// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./@types/express.d.ts" />
import type Command from "./util/Command";
import registerCommands from "./util/registerCommands";
import {
	allVersions,
	decodeCustomID,
	defaultVersion,
	loadJSON,
	reverseMapping,
	versions
} from "./util/general";
import type AST from "./@types/ast";
import config from "../config.json";
import type { Request } from "express";
import express, { Router } from "express";
import morgan from "morgan";
import nacl from "tweetnacl";
import type { APIChatInputApplicationCommandInteraction, APIInteraction, APIInteractionResponse } from "discord-api-types/v9";
import { MessageFlags, InteractionResponseType, InteractionType } from "discord-api-types/v9";
import type { ModuleImport } from "@uwu-codes/types";
import FuzzySearch from "fuzzy-search";
import { readdirSync } from "fs";


const commandMap = new Map<string, Command>();
const commands = (readdirSync("/app/src/cmd").map(v => {
	if (!v.endsWith(__filename.split(".").slice(-1)[0])) return;
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const cmd = require(`/app/src/cmd/${v}`) as ModuleImport<Command> | Command;
	const d = "default" in cmd ? cmd.default : cmd;
	commandMap.set(d.name, d);
	return d;
})).filter(Boolean) as Array<Command>;
void registerCommands(commands);
const server = express()
	.use(morgan("dev"))
	.use(express.json({
		verify(req, res, buf) {
			Object.defineProperty(req, "rawBody", {
				value: buf
			});
		}
	}))
	.get("/online", async(req, res) => res.status(200).json({ success: true, uptime: process.uptime() }))
	.use("/r", Router()
		.get("/:version/:class", async (req, res) => {
			const v = Number(req.params.version), c = Number(req.params.version);
			const version = isNaN(v) ? req.params.version : reverseMapping(v);
			const clazz = isNaN(c) ? req.params.class : reverseMapping(c);

			return res.redirect(`https://abal.moe/Eris/docs/${version}/${clazz}`);
		})
		.get("/:version/:class/:type/:other", async (req, res) => {
			const v = Number(req.params.version), c = Number(req.params.version), o = Number(req.params.other);
			const version = isNaN(v) ? req.params.version : reverseMapping(v);
			const clazz = isNaN(c) ? req.params.class : reverseMapping(c);
			const other = isNaN(o) ? req.params.other : reverseMapping(o);
			const type = req.params.type === "e" ? "event" : req.params.type === "p" ? "property" : req.params.type === "m" ? "method" : req.params.type;
			res.redirect(`https://abal.moe/Eris/docs/${version}/${clazz}#${type}-${other}`);
		})
	)
	.use("/api", Router()
		.get("/online", async(req, res) => res.status(200).json({ success: true, uptime: process.uptime() }))
		.get("/versions", async(req, res) => res.status(200).json({
			success: true,
			data:    {
				all:       allVersions,
				supported: versions
			}
		}))
		.get("/versions/:version", async(req, res) => {
			const version = req.params.version === "latest" ? defaultVersion : req.params.version;
			const [json, ver] = await loadJSON(version);
			switch (json) {
				case "invalid": return res.status(404).json({ success: false, error: `The version "${version}" is invalid.` });
				case "low": return res.status(400).json({ success: false, error: `The version "${ver}" is unsupported.` });
				case "loading": return res.status(403).json({ success: false, error: `The version "${ver}" is still loading.` });
				default: return res.status(200).json({ success: true, version: ver, data: json });
			}
		})
		.get("/search/:version", async(req, res) => {
			const version = req.params.version === "latest" ? defaultVersion : req.params.version;
			const classSearch = req.query.class as string || "";
			const eventSearch = req.query.event as string || null;
			const methodSearch = req.query.method as string || null;
			const propertySearch = req.query.property as string || null;
			const hideIrrelevant = req.query.hide === undefined ? true : ["yes", "y", true].includes(String(req.query.hide));
			const [json, ver] = await loadJSON(version);
			switch (json) {
				case "invalid": return res.status(404).json({ success: false, error: `The version "${version}" is invalid.` });
				case "low": return res.status(400).json({ success: false, error: `The version "${ver}" is unsupported.` });
				case "loading": return res.status(403).json({ success: false, error: `The version "${ver}" is still loading.` });
			}

			const classFuzz = new FuzzySearch(Object.keys(json).map(сlass => json[сlass]), ["name"], {
				sort: true
			});
			const classes = classFuzz.search(classSearch);

			let eventList = [] as Array<AST.EventDefinition & { class: string; }>, methodList = [] as Array<AST.MethodDefinition & { class: string; }>, propertyList = [] as Array<AST.PropertyDefinition & { class: string; }>;
			classes.forEach(сlass => {
				const { events, methods, properties } = сlass;
				eventList.push(...events.map(e => ({ ...e, class: сlass.name })));
				methodList.push(...methods.map(m => ({ ...m, class: сlass.name })));
				propertyList.push(...properties.map(p => ({ ...p, class: сlass.name })));
			});

			classes.forEach(сlass => {
				delete (сlass as Partial<typeof сlass>).events;
				delete (сlass as Partial<typeof сlass>).methods;
				delete (сlass as Partial<typeof сlass>).properties;
			});
			if (eventSearch) {
				const eventFuzz = new FuzzySearch(eventList, ["name"], {
					sort: true
				});
				eventList = eventFuzz.search(eventSearch);
			}
			if (methodSearch) {
				const methodFuzz = new FuzzySearch(methodList, ["name"], {
					sort: true
				});
				methodList = methodFuzz.search(methodSearch);
			}
			if (propertySearch) {
				const propertyFuzz = new FuzzySearch(propertyList, ["name"], {
					sort: true
				});
				propertyList = propertyFuzz.search(propertySearch);
			}

			return res.status(200).json({
				success: true,
				data:    {
					classes,
					events:     !eventSearch && (methodSearch || propertySearch) && hideIrrelevant ? [] : eventList,
					methods:    !methodSearch && (eventSearch || propertySearch) && hideIrrelevant ? [] : methodList,
					properties: !propertySearch && (methodSearch || eventSearch) && hideIrrelevant ? [] : propertyList
				}
			});
		})
		.use(async(req, res) => res.status(404).json({ success: false, error: "Not Found" }))
	)
	.use("/bot", Router()
		.get("/online", async(req, res) => res.status(200).json({ success: true, uptime: process.uptime() }))
		.post("/", async (req: Request<never, APIInteractionResponse, APIInteraction>, res) => {
			const isVerified = nacl.sign.detached.verify(
				Buffer.from(`${req.get("X-Signature-Timestamp")!}${req.rawBody.toString()}`),
				Buffer.from(req.get("X-Signature-Ed25519")!, "hex"),
				Buffer.from(config.publicKey, "hex")
			);
			if (!isVerified) return res.status(401).end();

			switch (req.body.type) {
				case InteractionType.Ping: {
					return res.status(200).json({
						type: InteractionResponseType.Pong
					});
				}

				case InteractionType.ApplicationCommand: {
					if ((req.body.user || req.body.member?.user)!.id === "602101253178392576") return res.status(200).json({
						type: InteractionResponseType.ChannelMessageWithSource,
						data: {
							content: ":egg:"
						}
					});
					const cmd = commandMap.get(req.body.data.name);
					if (!cmd) return res.status(200).json({
						type: InteractionResponseType.ChannelMessageWithSource,
						data: {
							content: "Unknown Command.",
							flags:   MessageFlags.Ephemeral
						}
					});
					void cmd.runCommand.call(cmd, req.body as APIChatInputApplicationCommandInteraction, req as Parameters<Command["runCommand"]>[1], res);
					break;
				}

				case InteractionType.MessageComponent: {
					const d = decodeCustomID(req.body.data.custom_id);
					const cmd = commandMap.get(d.cmd);
					if (!cmd || !("runComponent" in cmd)) return res.status(200).json({
						type: InteractionResponseType.ChannelMessageWithSource,
						data: {
							content: "Unknown Command.",
							flags:   MessageFlags.Ephemeral
						}
					});
					void cmd.runComponent!.call(cmd, req.body, d, req as Parameters<Exclude<Command["runComponent"], undefined>>[2], res);
					break;
				}

				case InteractionType.ApplicationCommandAutocomplete: {
					const cmd = commandMap.get(req.body.data!.name);
					if (!cmd || !("runAutoComplete" in cmd)) return res.status(200).json({
						type: InteractionResponseType.ApplicationCommandAutocompleteResult,
						data: {
							choices: [
								{
									name:  "Unknown Command",
									value: "unknown"
								}
							]
						}
					});
					void cmd.runAutoComplete!.call(cmd, req.body, req as Parameters<Exclude<Command["runAutoComplete"], undefined>>[1], res);
				}
			}
		})
	)
	.use(async (req, res) => res.status(404).end());


server.listen(config.port, config.host, () => console.log("Listening on http://%s:%s", config.host, config.port));
console.log("Ready.");
