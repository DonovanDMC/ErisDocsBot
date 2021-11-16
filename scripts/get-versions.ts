import { execSync } from "child_process";
const v = JSON.parse(execSync("npm show eris versions --json").toString()) as Array<string>;
process.stdout.write(`${JSON.stringify(v.filter(j => Number(j.replace(/\./g, "")) >= 140))}`);
