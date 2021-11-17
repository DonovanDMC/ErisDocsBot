import config from "../../config.json";
import type AST from "../@types/ast";
import { execSync, spawn } from "child_process";
import * as fs from "fs";

const scriptDir = `${__dirname}/../..${__filename.endsWith(".ts") ? "" : "/.."}/scripts`;
const tmpDir = "/tmp/eris-docs";
execSync(`mkdir -p ${tmpDir}/versions`);
// 0.14.0, first zero gets omitted
export const minVersion = 140;
export const minVersionString = "0.14.0";
export let defaultVersion: string;
export let versions: Array<string>;
// refresh versions every 10 minutes
function refreshVersions() {
	defaultVersion = execSync("npm show eris version").toString().slice(0, -1);
	versions = JSON.parse(execSync("npm show eris versions --json").toString()).filter((v: string) => versionOK(v));
}
setInterval(refreshVersions.bind(null), 6e5);
refreshVersions();
export async function loadJSON(version?: string) {
	if (!version) version = defaultVersion;
	if (!versions.includes(version)) {
		let v = version;
		if (!v.startsWith("0.")) v = `0.${v}`;
		if (versions.includes(v)) version = v;
		else {
			for (let i = 4; i >= 1; i--) {
				if (versions.includes(`${v}.${i}`)) {
					v = `${v}.${i}`;
					break;
				}
			}
		}
		if (!versions.includes(v)) return ["invalid", version] as const;
		version = v;
	}
	if (!versionOK(version)) return ["low", version] as const;

	if (!fs.existsSync(`${tmpDir}/versions/${version}.json`)) {
		if (!fs.existsSync(`${tmpDir}/versions/${version}.lock`)) {
			spawn(`${scriptDir}/ast-run.sh`, [version], { stdio: "inherit" });
		}
		return ["loading", version] as const;
	}

	return [JSON.parse(fs.readFileSync(`${tmpDir}/versions/${version}.json`).toString()) as AST.Root, version] as const;
}

export function versionOK(v: string) {
	if (v.startsWith("0.")) v = v.slice(2);
	return Number(v.replace(/\./g, "")) >= minVersion;
}

// technically partially decoded
export type EncodedCustomID  = [
	section: string,
	action: string,
	className: string,
	otherName: string,
	version: string,
	currentPage: string,
	userId: string,
	cmd: string
];
export interface DecodedCustomID {
	section: "class" | "event" | "property" | "method";
	action: "prev" | "next" | "prev_class" | "next_class";
	className: string;
	otherName: string | null;
	version: string;
	currentPage: number;
	totalPages: number;
	userId: string;
	cmd: string;
}
export function encodeCustomID(section: "class" | "event" | "property" | "method", action: "prev" | "next" | "prev_class" | "next_class", className: string, other: string | null, version: string, currentPage: number, userId: string, cmd: string) {
	return Buffer.from([
		// section, 1 = class, 2 = event, 3 = property, 4 = method
		section === "class" ? 1 : section === "event" ? 2 : section === "property" ? 3 : section === "method" ? 4 : 0,
		// action, 1 = back, 2 = forward, 3 = back class, 4 = forward class
		action === "prev" ? 1 : action === "next" ? 2 : action === "prev_class" ? 3 : action === "next_class" ? 4 : 0,
		// class, className mapped to number
		getMapping(className),
		// other, otherName mapped to number
		other === null ? 0 : getMapping(other),
		// version, version mapped to number
		getMapping(version),
		// currentPage
		currentPage,
		// author id
		userId,
		// command
		cmd
	].join(",")).toString("base64").replace(/=/g, "");
}
export function decodeCustomID(input: string) {
	const d = Buffer.from(input, "base64").toString("ascii").toString().split(",") as EncodedCustomID;
	const s = Number(d[0]);
	const a = Number(d[1]);
	const c = Number(d[2]);
	const o = Number(d[3]);
	const v = Number(d[4]);
	const p = Number(d[5]);
	const userId = d[6];
	const cmd = d[7];
	return {
		section: (s === 1 ? "class" : s === 2 ? "event" : s === 3 ? "property" : s === 4 ? "method" : "unknown" as never),
		action: (a === 1 ? "prev" : a === 2 ? "next" : a === 3 ? "prev_class" : a === 4 ? "next_class" : "unknown" as never),
		className: reverseMapping(c),
		otherName: o === 0 ? null : reverseMapping(o),
		version: reverseMapping(v),
		currentPage: p,
		userId,
		cmd
	} as DecodedCustomID;
}

// I don't want to shorten if I don't have to
export function getDocsURL(version: string, className: string, otherType?: "event" | "property" | "method", otherName?: string) {
	return `https://abal.moe/Eris/docs/${version}/${className}${otherType && otherName ? `#${otherType}-${otherName}` : ""}`;
	// return `${config.baseURL}/r/${getMapping(version)}/${getMapping(className)}${otherType && otherName ? `/${otherType.slice(0, 1)}/${getMapping(otherName)}` : ""}`;
}

export function getMapping(name: string) {
	if (!fs.existsSync(`${tmpDir}/mappings.json`)) fs.writeFileSync(`${tmpDir}/mappings.json`, "{}");
	const current = JSON.parse(fs.readFileSync(`${tmpDir}/mappings.json`).toString()) as Record<string, number>;
	if (!current[name]) {
		const id = Object.entries(current).length + 1;
		current[name] = id;
		fs.writeFileSync(`${tmpDir}/mappings.json`, JSON.stringify(current));
		return id;
	} else return current[name];
}
export function reverseMapping(id: number) {
	const current = JSON.parse(fs.readFileSync(`${tmpDir}/mappings.json`).toString()) as Record<string, number>;
	return Object.entries(current).find(([, b]) => b === id)![0];
}
