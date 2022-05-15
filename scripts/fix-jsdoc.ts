import fs from "fs";
if (!__filename.endsWith("ts")) throw new Error("this is built for ts-node only");

const dir = "/app";
const j = fs.readFileSync(`${process.argv[2] || `${dir}/node_modules`}/jsdoc/lib/jsdoc/util/dumper.js`).toString().split("\n");
const j2 = fs.readFileSync(`${process.argv[2] || `${dir}/node_modules`}/jsdoc/lib/jsdoc/src/astnode.js`).toString().split("\n");
const js = "BigInt.prototype.toJSON = function() { return this.toString(); } /* cannot serialize bigint */";
if (j[0] !== js) {
	j.unshift(js);
	fs.writeFileSync(`${process.argv[2] || `${dir}/node_modules`}/jsdoc/lib/jsdoc/util/dumper.js`, j.join("\n"));
}
if (j2[0] !== js) {
	j2.unshift(js);
	fs.writeFileSync(`${process.argv[2] || `${dir}/node_modules`}/jsdoc/lib/jsdoc/src/astnode.js`, j2.join("\n"));
}
