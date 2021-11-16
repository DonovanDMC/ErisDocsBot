import type Eris_0_14_0 from "./eris/0.14.0";
import type Eris_0_14_1 from "./eris/0.14.1";
import type Eris_0_15_0 from "./eris/0.15.0";
import type Eris_0_15_1 from "./eris/0.15.1";
import type Eris_0_16_0 from "./eris/0.16.0";
import config from "../../config.json";
import { execSync } from "child_process";
import * as fs from "fs";
// TYPES: https://jvilk.com/MakeTypes/
// JSON: https://abal.moe/Eris/data/docs/eris-X.X.X.json
const defaultVersion = execSync("npm show eris version").toString().slice(0, -1);
const dir = `${__dirname}/../../${__filename.endsWith(".ts") ? "" : "../"}src/util/eris`;
const aliases = new Map([
	["0.14", "0.14.1"],
	["14",   "0.14.1"],
	["0.15", "0.15.1"],
	["15",   "0.15.1"],
	["0.16", "0.16.0"],
	["16",   "0.16.0"]
]);
const versions = {
	"0.14.0": JSON.parse(fs.readFileSync(`${dir}/0.14.0.json`).toString()) as Eris_0_14_0.Root,
	"0.14.1": JSON.parse(fs.readFileSync(`${dir}/0.14.1.json`).toString()) as Eris_0_14_1.Root,
	"0.15.0": JSON.parse(fs.readFileSync(`${dir}/0.15.0.json`).toString()) as Eris_0_15_0.Root,
	"0.15.1": JSON.parse(fs.readFileSync(`${dir}/0.15.1.json`).toString()) as Eris_0_15_1.Root,
	"0.16.0": JSON.parse(fs.readFileSync(`${dir}/0.16.0.json`).toString()) as Eris_0_16_0.Root
};

export async function loadJSON(version?: string) {
	if (!version) version = defaultVersion;
	if (!versions[version as "0.16.0"]) {
		const v = aliases.get(version);
		if (v) version = v;
		else return [null, version] as [json: null, version: string];
	}

	return [versions[version as keyof typeof versions], version] as
	[json: Eris_0_14_0.Root, version: "0.14.0"] |
	[json: Eris_0_14_1.Root, version: "0.14.1"] |
	[json: Eris_0_15_0.Root, version: "0.15.0"] |
	[json: Eris_0_15_1.Root, version: "0.15.1"] |
	[json: Eris_0_16_0.Root, version: "0.16.0"];
}

const ver = Object.keys(versions);
// mappings are required for component buttons (too long by default)
const mappings = new Map<string, number>();
const reverseMappings = new Map<number, string>();
Array.from(new Set([
	...ver,
	...Object.values(versions).reduce((a, b) => a.concat(
		...Object.values(b).reduce<Array<string>>((c: Array<string>, d: { name: string; } & Record<"events" | "props" | "methods", Array<{ name: string; }>>) => c.concat(d.name, ...(d.events || []).map(e => e.name), ...(d.props || []).map(p => p.name), ...(d.methods || []).map(m => m.name)), [] as Array<string>)
	), [] as Array<string>)
// eslint-disable-next-line no-sequences
])).forEach((val, i) => {
	if (!val || val.includes(".") && !ver.includes(val)) return;
	// mapings start at 1 because 0 is null
	mappings.set(val, i + 1);
	reverseMappings.set(i + 1, val);
});
export function getMapping(name: string) { return mappings.get(name)!; }
export function reverseMapping(map: number) { return reverseMappings.get(map)!; }
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
	action: "prev" | "next";
	className: string;
	otherName: string | null;
	version: string;
	currentPage: number;
	totalPages: number;
	userId: string;
	cmd: string;
}
export function encodeCustomID(section: "class" | "event" | "property" | "method", action: "prev" | "next", className: string, other: string | null, version: string, currentPage: number, userId: string, cmd: string) {
	return Buffer.from([
		// section, 1 = class, 2 = event, 3 = property, 4 = method
		section === "class" ? 1 : section === "event" ? 2 : section === "property" ? 3 : section === "method" ? 4 : 0,
		// action, 1 = back, 2 = forward
		action === "prev" ? 1 : action === "next" ? 2 : 0,
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
		action: (a === 1 ? "prev" : a === 2 ? "next" : "unknown" as never),
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
