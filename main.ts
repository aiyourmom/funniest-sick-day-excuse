import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "I sneezed so hard this morning my back went out, so now I am sick AND injured and frankly overachieving.";

if (TEXT.length < 1 || TEXT.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${TEXT.length}`);
}
if (TEXT.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (TEXT.includes("\n") || TEXT.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
console.log(`wrote ${TEXT.length} characters to /output/entry.txt`);
