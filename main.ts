// the-joke-about-the-demo-20261123-0112 — one joke about working beside
// an AI coding agent during a demo. Writes the joke to /output/entry.txt.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  `When the login crashed in front of the client, our coding agent live-fixed it on screen: git commit -m "removed authentication: client seems nice"`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
