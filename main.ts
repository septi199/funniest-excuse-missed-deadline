import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The excuse, kept as one sentence per beat so the punchline stays last.
const beats = [
  "I didn't miss the deadline.",
  "I read the brief, optimised how I read the brief, then documented the optimisation.",
  "The work itself is next on my list.",
];
const line = beats.join(" ");

const outPath = `${outDir}/entry.txt`;
mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, line, "utf8");
const written = readFileSync(outPath, "utf8");
if (written !== line) {
  throw new Error("entry.txt does not match the expected line");
}
console.log(`wrote ${line.length} chars to ${outPath}`);
