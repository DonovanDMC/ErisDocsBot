import fs from "fs";
const file = process.argv[2];
if (!file) throw new Error("missing file");
const f = JSON.parse(fs.readFileSync(file).toString()) as Array<{
	comment?: string;
	undocumented?: boolean;
	[K: string]: unknown;
}>;
fs.writeFileSync(file, JSON.stringify(f.filter(v => v.comment && v.comment.length && !v.undocumented), undefined, "\t"));
