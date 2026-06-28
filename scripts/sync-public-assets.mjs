import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync } from "fs";
import { join } from "path";

function copyDir(src, dest) {
  mkdirSync(dest, { recursive: true });
  for (const name of readdirSync(src)) {
    const from = join(src, name);
    const to = join(dest, name);
    if (statSync(from).isDirectory()) {
      copyDir(from, to);
    } else {
      copyFileSync(from, to);
    }
  }
}

const root = process.cwd();
const src = join(root, "assets");
const dest = join(root, "public", "assets");

if (existsSync(src)) {
  copyDir(src, dest);
  console.log("Synced assets → public/assets");
}
