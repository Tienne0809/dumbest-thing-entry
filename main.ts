import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Dumbest Thing Your Agent Did Today — make.fun bounty entry.
// The program writes one agent-blunder incident line (116 chars) to the output entry file.
const line =
  "My agent set 47 calendar reminders for \"buy milk,\" one per store within driving distance, all for tomorrow at 6 a.m.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
