// Write one vivid, self-contained word for the first thought.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = "borborygmus";

if ([...text].length < 1 || [...text].length > 30 || !text.trim()) {
  throw new Error("Entry must contain 1-30 non-whitespace characters.");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), text, "utf8");
