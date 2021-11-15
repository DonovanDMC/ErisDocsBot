import type Eris_0_14_0 from "./eris/0.14.0";
import type Eris_0_14_1 from "./eris/0.14.1";
import type Eris_0_15_0 from "./eris/0.15.0";
import type Eris_0_15_1 from "./eris/0.15.1";
import type Eris_0_16_0 from "./eris/0.16.0";
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

export default async function loadJSON(version?: string) {
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
	mappings.set(val, i);
	reverseMappings.set(i, val);
	console.log(val, i);
});
export function getMapping(name: string) { return mappings.get(name)!; }
export function reverseMapping(map: number) { return reverseMappings.get(map)!; }
export interface EncodedCustomID {
	a: number;
	c: number;
	o: number | null;
	v: number;
	p: [currentPage: number, totalPages: number];
	u: string;
}
export interface DecodedCustomID {
	action: "prev" | "next";
	className: string;
	otherName: string | null;
	version: string;
	currentPage: number;
	totalPages: number;
	userId: string;
}
export function encodeCustomID(action: "prev" | "next", className: string, other: string | null, version: string, pageCurrent: number, pages: number, userId: string) {
	return Buffer.from(JSON.stringify({
		// action, 1 = back, 2 = forward
		a: action === "prev" ? 1 : action === "next" ? 2 : 0,
		// class, className mapped to number
		c: getMapping(className),
		// other, otherName mapped to number
		o: other === null ? null : getMapping(other),
		// version, version mapped to number
		v: getMapping(version),
		// currentPage & totalPages
		p: [pageCurrent, pages],
		// author id
		u: userId
	})).toString("base64").replace(/=/g, "");
}
export function decodeCustomID(input: string) {
	const d = JSON.parse(Buffer.from(input, "base64").toString("ascii")) as EncodedCustomID;
	return {
		action: (d.a === 1 ? "prev" : d.a === 2 ? "next" : "unknown" as never),
		className: reverseMapping(d.c),
		otherName: d.o === null ? null : reverseMapping(d.o),
		version: reverseMapping(d.v),
		currentPage: d.p[0],
		totalPages: d.p[1],
		userId: d.u
	} as DecodedCustomID;
}
