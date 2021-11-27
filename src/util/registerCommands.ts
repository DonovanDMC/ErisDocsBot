import type Command from "./Command";
import config from "../../config.json";
import fetch from "node-fetch";
import type { RESTPostOAuth2ClientCredentialsResult, RESTPutAPIApplicationGuildCommandsResult } from "discord-api-types/v9";
import * as fs from "fs";
import util from "util";

if (!fs.existsSync(config.dataDir)) fs.mkdirSync(config.dataDir);
const tempFile = `${config.dataDir}/command_cache.json`; // Array<APIApplicationCommand>
const tokenFile = `${config.dataDir}/creds.json`; // { token: string; expire: number; }
export default async function registerCommands(commands: Array<Command>, force = false) {
	let cache: string | undefined;
	if (fs.existsSync(tempFile) && force === false) {
		try {
			cache = fs.readFileSync(tempFile).toString();
		} catch {
			console.error("Cache file supposedly exists, but we failed to load it.");
			console.info("Cache Location: %s", tempFile);
		}

		if (cache === JSON.stringify(commands)) {
			console.log("Skipping registration due to cache being up to date");
			console.info("Cache Location: %s", tempFile);
			return;
		}
	}

	console.log("Getting access token..");
	let token: string | undefined;
	if (fs.existsSync(tokenFile)) {
		try {
			const at = JSON.parse(fs.readFileSync(tokenFile).toString()) as { token: string; expire: number; };
			if ((Date.now() + 5000) > at.expire) {
				console.log("Cached access token is expired.");
				fs.unlinkSync(tokenFile);
			} else {
				console.log("Loaded access token from cache.");
				token = at.token;
			}
		} catch {
			console.error("Access Token file supposedly exists, but we failed to load it.");
			console.info("Access Token File Location: %s", tokenFile);
		}
	}

	if (token === undefined) {
		const d = Date.now();
		const b = await fetch("https://discord.com/api/v9/oauth2/token", {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				"Authorization": `Basic ${Buffer.from(`${config.id}:${config.secret}`).toString("base64")}`
			},
			body: "grant_type=client_credentials&scope=applications.commands.update"
		});
		const body = await b.json() as RESTPostOAuth2ClientCredentialsResult;
		if (!("access_token" in body)) {
			console.error("We failed to obtain an access token.");
			console.error(b.status, b.statusText, body);
			return;
		}

		token = body.access_token;
		fs.writeFileSync(tokenFile, JSON.stringify({
			token,
			expire: d + (body.expires_in * 1000)
		}));

		console.log("Got Token \"%s\", expires: %s", token, new Date(d + (body.expires_in * 1000)).toUTCString());
	}

	let createdPer = 0, createdTotal = 0;
	if (config.useGuildCommands) {
		for (const guild of config.guilds) {
			const update = await fetch(`https://discord.com/api/v9/applications/${config.id}/guilds/${guild}/commands`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${token}`
				},
				body: JSON.stringify(commands)
			});
			const body = await update.json() as RESTPutAPIApplicationGuildCommandsResult;
			if (update.status !== 200) {
				if (body.length > createdPer) createdPer = body.length;
				createdTotal++;
				console.error(`[${guild}] Failed To PUT Commands`);
				console.error(`[${guild}]`, update.status, update.statusText, util.inspect(body, { depth: null }));
				return;
			}
		}
	} else {
		const update = await fetch(`https://discord.com/api/v9/applications/${config.id}/commands`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${token}`
			},
			body: JSON.stringify(commands)
		});
		const body = await update.json() as RESTPutAPIApplicationGuildCommandsResult;
		if (update.status !== 200) {
			createdPer = createdTotal = body.length;
			console.error("Failed To PUT Commands");
			console.error(update.status, update.statusText, util.inspect(body, { depth: null }));
			return;
		}
	}

	fs.writeFileSync(tempFile, JSON.stringify(commands));
	console.log("Successfully Registered %s Command%s (%s Total)", createdPer, createdPer === 1 ? "" : "s", createdTotal);
}
