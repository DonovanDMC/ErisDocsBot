/* eslint-disable */
const chalk = require("chalk");
const fs = require("fs");
const path = require("path");
const inDir = process.argv[2];
const outFile = process.argv[3];
if (!inDir || !fs.existsSync(inDir)) throw new Error("invalid in dir");
if (!outFile || !fs.existsSync(path.dirname(outFile))) throw new Error("invalid out file");
const final = {};
const events = [];

const stdout = process.argv.join(" ").includes("--stdout");
function pr(file, name) {
	if (JSON.stringify(file) === "[]") {
		if (!stdout) console.warn(chalk.yellow(`[SKIP] ${name} - lack of information`));
		return;
	}
	const def = parseDefinition(name, file);
	if (def) {
		if (!stdout) console.log(chalk.green(`[SUCCESS] ${name}`));
		final[name] = def;
	} else {
		if (def !== null && !stdout) console.log(chalk.red(`[FAIL] ${name}`));
	}
}
fs.readdirSync(inDir, { withFileTypes: true }).forEach(v => {
	if (v.isDirectory()) {
		fs.readdirSync(`${inDir}/${v.name}`, { withFileTypes: true }).forEach(j => {
			pr(
				JSON.parse(fs.readFileSync(`${inDir}/${v.name}/${j.name}`).toString()),
				j.name.split(".").slice(0, -1).join(".")
			);
		});
	} else {
		pr(
			JSON.parse(fs.readFileSync(`${inDir}/${v.name}`).toString()),
			v.name.split(".").slice(0, -1).join(".")
		);
	}
});
function parseDefinition(n, d) {
	events.push(...d.filter(node => node.kind === "event"));
	const classDeclaration = d.find(node => node.meta.code.type === "ClassDeclaration");
	if (!classDeclaration) {
		if (!stdout) console.error(chalk.red(`[FAIL] ${n} - no class definition`));
		return null;
	}
	const def = {
		name: classDeclaration.name,
		description: classDeclaration.classdesc,
		extends: classDeclaration.augments?.[0] || null,
		constructor: {
			name: "constructor",
			description: classDeclaration.description,
			params: (classDeclaration.params || []).filter(p => !p.name.includes(".")).map(p => ({
				name: p.name,
				description: p.description,
				optional: !!p.optional,
				nullable: !!p.nullable,
				type: p.type.names.length === 1 ? p.type.names[0] : p.type.names
			}))
		},
		events: [], // done later because of odd locations
		properties: (classDeclaration.properties || []).filter(p => !p.name.includes(".")).map(p => ({
			name: p.name,
			description: p.description,
			optional: !!p.optional,
			nullable: !!p.nullable,
			type: p.type.names.length === 1 ? p.type.names[0] : p.type.names
		})),
		methods: d.filter(node => node.meta.code.type === "MethodDefinition").map(m => ({
			name: m.name,
			prefixedName: m.longname,
			description: m.description,
			params: m.params.filter(p => !p.name.includes(".")).map(p => ({
				name: p.name,
				description: p.description,
				optional: !!p.optional,
				type: p.type.names.length === 1 ? p.type.names[0] : p.type.names
			})),
			// haven't personally seen more than one returns element
			returns: m.returns === undefined ? { type: "void", description: null } : m.returns[0].type.names[0] === "Promise" ? { type: "Promise<void>", description: null } : m.returns[0].type.names.length === 1 ? { type: m.returns[0].type.names[0], description: m.returns[0].description || null } : { type: m.returns[0].type.names, description: m.returns[0].description || null }
		}))
	};
	return def;
}
let i = 0, f = 0;
for (const event of events) {
	i++;
	const c = final[event.memberof];
	if (!c) {
		f++;
		if (!stdout) console.error(chalk.red(`[FAIL/EVENT] ${event.name} -  member class "${event.memberof}" is not present.`));
		continue;
	}
	c.events.push({
		name: event.name,
		prefixedName: event.longname,
		description: event.description,
		params: (event.properties || []).filter(p => !p.name.includes(".")).map(p => ({
			name: p.name,
			description: p.description,
			optional: !!p.optional,
			nullable: !!p.nullable,
			type: p.type.names.length === 1 ? p.type.names[0] : p.type.names
		}))
	});
}
const sorted = Object.keys(final).sort().map(k => ({ [k]: final[k] })).reduce((a,b) => ({ ...a, ...b }), {});

if(stdout) process.stdout.write(JSON.stringify(sorted));
else {
	console.log(chalk.blue(`Processed ${i} events with ${f} fails and ${i - f} successes`));
	fs.writeFileSync(outFile, JSON.stringify(sorted, undefined, "\t"));
}
