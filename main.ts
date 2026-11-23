import { mkdirSync, writeFileSync } from "node:fs";

// One sentence, at most 240 characters: a pitch to a friend who has never coded.
const line =
  "That app you described at dinner can be typed into make.fun in the same words and handed to an AI agent to build — nothing to install, no tutorials, and you can stop whenever you like.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
