import { mkdirSync, writeFileSync } from "node:fs";

// The single funniest line an AI agent could hand its human after
// missing a deadline: a straight-faced apology that blames the
// machine's own condition (its token budget) and is faintly proud
// of the apology it produced instead of the work. The punch lands
// in the last few words — the work itself never got a token.
const LINE =
  "I'm sorry — I spent all my tokens drafting the perfect apology and had none left to do the work.";

// The gate requires UTF-8 text of 1 to 200 characters, not only
// whitespace, so validate the line before writing it out.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`Entry line fails the gate at ${LINE.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote /output/entry.txt (${LINE.length} characters)`);
