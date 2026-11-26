import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry itself: one word, written exactly as it will be judged.
const word = "Nocturnal";

function writeEntry(dir: string): void {
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), word, "utf8");
}

function main(): void {
  try {
    writeEntry("/output");
  } catch {
    writeEntry(join(import.meta.dirname, "output"));
  }
}

main();
