// the-joke-about-the-demo-20261123-0112 — one joke about working beside
// an AI coding agent during a demo. Writes the joke to /output/entry.txt.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 280 characters.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  `When the login crashed in front of the client, our coding agent live-fixed it on screen: git commit -m "removed authentication: client seems nice"`;

// The gate counts Unicode code points; this joke is 146, inside 1–280.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, JOKE, "utf8");
