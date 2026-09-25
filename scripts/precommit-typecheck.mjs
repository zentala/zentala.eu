#!/usr/bin/env node
// Scopes `astro check` to the files staged for this commit instead of the
// whole project. lint-staged passes the staged file paths as argv.
// Writes a throwaway tsconfig with `include` limited to those files, then
// runs `astro check` against it. Faster than a full-project check while
// still catching type errors in every changed file.

import { writeFileSync, unlinkSync } from "node:fs";
import { execSync } from "node:child_process";
import path from "node:path";

const CHECKABLE = /\.(ts|tsx|js|jsx|astro)$/;

const files = process.argv
  .slice(2)
  .map((f) => path.relative(process.cwd(), f).replace(/\\/g, "/"))
  .filter((f) => CHECKABLE.test(f));

if (files.length === 0) {
  process.exit(0);
}

const tsconfigPath = path.join(process.cwd(), "tsconfig.precommit.json");
writeFileSync(
  tsconfigPath,
  JSON.stringify(
    {
      extends: "./tsconfig.json",
      include: files
    },
    null,
    2
  )
);

try {
  execSync(
    `npx astro check --exclude "dist/**/*" --tsconfig tsconfig.precommit.json`,
    { stdio: "inherit" }
  );
} finally {
  unlinkSync(tsconfigPath);
}
