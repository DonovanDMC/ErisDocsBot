// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./@types/express.d.ts" />
import type Command from "./util/Command";
import registerCommands from "./util/registerCommands";
import { decodeCustomID, reverseMapping } from "./util/general";
import config from "../config.json";
import type { Request } from "express";
import express from "express";
import morgan from "morgan";
import nacl from "tweetnacl";
import type { APIChatInputApplicationCommandInteraction, APIInteraction, APIInteractionResponse } from "discord-api-types";
import { MessageFlags, InteractionResponseType, InteractionType } from "discord-api-types";
import type { ModuleImport } from "@uwu-codes/types";
import * as fs from "fs";

// const latest = execSync("npm show eris version").toString();
// const versions = JSON.parse(execSync("npm show eris versions --json").toString()) as Array<string>;
const commandMap = new Map<string, Command>();
const commands = fs.readdirSync(`${__dirname}/cmd`).map(v => {
	if (!v.endsWith(__filename.split(".").slice(-1)[0])) return;
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const cmd = require(`${__dirname}/cmd/${v}`) as ModuleImport<Command> | Command;
	const d = "default" in cmd ? cmd.default : cmd;
	commandMap.set(d.name, d);
	return d;
}).filter(Boolean) as Array<Command>;
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
	.get("/r/:version/:class", async(req,res) =>
		res.redirect(`https://abal.moe/Eris/docs/${reverseMapping(Number(req.params.version))}/${reverseMapping(Number(req.params.class))}`)
	).get("/r/:version/:class/:type/:other", async(req,res) =>
		res.redirect(`https://abal.moe/Eris/docs/${reverseMapping(Number(req.params.version))}/${reverseMapping(Number(req.params.class))}#${req.params.type === "e" ? "event" : req.params.type === "p" ? "property" : req.params.type === "m" ? "method" : "unknown"}-${reverseMapping(Number(req.params.other))}`)
	)
	.get("*", async(req, res) => res.end("You shouldn't be here."))
	.post("/", async(req: Request<never, APIInteractionResponse, APIInteraction>, res) => {
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
				const cmd = commandMap.get(req.body.data.name);
				if (!cmd) return res.status(200).json({
					type: InteractionResponseType.ChannelMessageWithSource,
					data: {
						content: "Unknown Command.",
						flags: MessageFlags.Ephemeral
					}
				});
				void cmd.runCommand.call(cmd, req.body as APIChatInputApplicationCommandInteraction, req as Parameters<Command["runCommand"]>[1], res);
				break;
			}

			case InteractionType.MessageComponent: {
				const cmd = commandMap.get(d.cmd);
				if (!cmd || !("runComponent" in cmd)) return res.status(200).json({
					type: InteractionResponseType.ChannelMessageWithSource,
					data: {
						content: "Unknown Command.",
						flags: MessageFlags.Ephemeral
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
								name: "Unknown Command",
								value: "unknown"
							}
						]
					}
				});
				void cmd.runAutoComplete!.call(cmd, req.body, req as Parameters<Exclude<Command["runAutoComplete"], undefined>>[1], res);
			}
		}
	});


server.listen(config.port, config.host, () => console.log("Listening on http://%s:%s", config.host, config.port));
