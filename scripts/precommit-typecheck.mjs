#!/usr/bin/env node
// Runs `astro check` before commit. lint-staged passes the staged file paths
// as argv; we only use them to skip the check entirely when nothing
// type-checkable is staged.
//
// NOTE: this used to scope `include` in a throwaway tsconfig to just the
// staged files, to run faster than a full-project check. That scoping is
// unsound for this codebase: several pages import plain .ts helpers (e.g.
// src/lib/commentary.ts, src/lib/vision-content.ts) that astro:content
// collection typing depends on, and excluding those helpers from `include`
// made every collection entry type-check as `never`, producing dozens of
// false-positive errors on commits that touched only .astro files (found
// 2026-09-25, E004 wave 1: same false failures reproduced even when ALL
// pending changes were staged, while the unscoped `astro check` / `yarn
// typecheck` passed with 0 errors). Run the full project check instead;
// it is slower but correct.

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

execSync(`npx astro check --exclude "dist/**/*"`, { stdio: "inherit" });
