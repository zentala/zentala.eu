# E004 — UI, typography, accessibility, SEO and AI-agent visibility review — JOURNAL

## Epic close 2026-09-25

- **Goal**: E004 — UI/A11y/SEO review. Fix broken light-theme contrast, adopt a
  consistent editorial reading measure, add an accessibility baseline, ship
  per-page SEO/JSON-LD, make content legible to AI agents, and consolidate the
  component/icon system.
- **Done**:
  - E004-T01 light-theme contrast — completed.
  - E004-T02 reading measure / ArticleLayout — completed.
  - E004-T03 a11y baseline — completed.
  - E004-T04 SEO head (description/canonical/OG) — completed.
  - E004-T05 sitemap/robots/domain cleanup — completed.
  - E004-T06 content schema dates/author/description — completed.
  - E004-T07 JSON-LD structured data — done.
  - E004-T08 AI-agent layer (llms.txt, Markdown twins) — completed.
  - E004-T09 canonicals/redirects for duplicate routes — completed.
  - E004-T10 icon system consolidation — completed.
  - E004-T11 component consolidation — completed.
  - E004-T16 vendor agent skills into the repo — completed (commit `637500d`,
    merge on `main`, task-status set to completed, evidence `637500d`).
    Vendored 3 skill checklists under `.claude/skills/` (frontend-design,
    web-design-guidelines, accessibility-audit), each with a source URL and an
    explicit "licence not verified — check upstream LICENSE" note. Pointed
    `AGENTS.md` at them as the UI-change review checklist (`CLAUDE.md` is a
    pure `@AGENTS.md` import per this repo's own instruction-file convention,
    so it inherits the pointer rather than duplicating text). SEO/GEO and
    design-system skills were intentionally left unvendored — not required by
    T16's acceptance criteria. Worktree via `wt-add`/`wt-remove`, merged
    `--no-ff` to `main`, branch `feat/E004-T16` deleted, typecheck 0 errors
    before and after merge.
  - E004-T12 token hygiene and E004-T14 answer-first editorial pass —
    **superseded**, work rebased onto E006 (see `plan(E006,E004)` commit
    `f54abf5`).
  - E004-T13 font loading and E004-T15 automated a11y/SEO gate — **still
    `proposed`**, not started; carried into the backlog, not part of this
    closure's "done" scope.
- **Decisions**: T16's vendor-vs-global-install decision was taken and
  recorded directly in the task file (`E004-T16-vendor-agent-skills.md` →
  "Decision taken (2026-09-25)"); it is a small tooling choice, not an
  architectural decision, so no separate ADR was written for it. No other
  undocumented architectural decision was identified in this epic; the
  existing `.plan/ADR/001-canonical-book-route.md` already covers the
  canonical-route decision that E004-T09 built on.
- **Weryfikacja**: PASS — `npm run typecheck` (astro check): 0 errors, 0
  warnings, 21 hints (112 files), all pre-existing and unrelated to the T16
  change (unused imports in `vision/*.astro`, inline-script hints). No test
  suite (`npm test` / Playwright) was run in this closing pass — it requires
  a running dev server and the T16 diff touches no application code
  (`git show --stat 637500d` confirms only `.claude/skills/*` and
  `AGENTS.md`).
- **Nie sprawdzono**:
  - Exact licence identification for the vendored skills (only "not
    verified" is noted, not an SPDX id) — real gap, worth a follow-up task.
  - Browser/visual verification — none applicable, T16 changed no rendered
    code.
  - e2e/build/full audit run — not executed for this closing pass since the
    remaining delta is Markdown/skill files only.
  - Whether T01–T15 individually still meet their own acceptance criteria at
    today's tree — out of scope for this closure, which covers T16 plus
    epic-level bookkeeping.
  - **Repo-wide code review was never run** (`review-log status` →
    `NEVER RUN` on all checks, HEAD `8b75d5a`). This closure does **not**
    record a clean review — recording `--status clean --findings 0` without
    an actual review would fabricate verification evidence, which the
    repo's own review-log and execution policies forbid. Left as `NOT
    CLEARED` in this report; a real `/review` pass is recommended before
    treating the epic's code as reviewed.
- **Findings this session**: 0 new findings recorded (bookkeeping/closure
  pass only, not a code review).
- **Improvements logged**: 0 implemented on the spot, 0 added to backlog
  (this closure did not add new BACKLOG.md items). `IMPRO.md` does not exist
  for this epic, so `improTriage = 0` (no file to triage).
- **Sprzątanie worktree**: 0 removed, 1 left in place (all remaining
  `feat/*` worktrees/branches under `.plan/worktrees/` — `cleanups`,
  `theme-tokens`, `theme-tokens-2`, `vision-layers`, `why-page`, `benefits`,
  `book-routes`, `cheap`, `choosing-people`, `cities`, `design-md`,
  `direct-democracy`, `E006-T06`, `E006-T08`, `eci`, `editorial-standard`,
  `education`, `fold-answers`, `manifesto`, `open-door`, `political-path`,
  `principles-support`, `redesign`, `safeguards`, `science`, `shared-frame`,
  `steering`, `surplus`, `terminology`, `total-state`, `why-objections`,
  `workweek` — are out of scope for E004, belonging to other epics/work
  (e.g. `E006-T06`/`E006-T08` → E006); not touched), 1 failed
  (`.plan/worktrees/E004-T02` previously could not be removed — "a process
  holds" the directory, no owning process found; already recorded in
  `BACKLOG.md`), 34 worktrees remain on disk.
- **Next**: T13 (font loading) and T15 (automated a11y/SEO gate) remain
  `proposed` and unstarted — decide whether to schedule them standalone or
  fold them into E006 like T12/T14 were. Run a real `/review` against
  current `main` before calling the epic's code reviewed. Resolve the
  licence-identification gap for the vendored skills.

## Session 2026-09-25 (this closure)

- **Goal**: Close epic E004 per the `done` skill epic-completion protocol.
- **Done**: Wrote this JOURNAL.md epic summary; created `.plan/DONE.md` with
  links to completed E004 tasks; updated `.plan/STATE.md`; checked
  `.plan/ARCH.md` (does not exist in this repo — see below); checked
  `review-log status`. No source-code commit was needed — T16 was already
  committed and merged in a prior session (`637500d`, `8b75d5a`).
- **Decisions**: `.plan/ARCH.md` does not exist in this repository (the
  closest analogue is `.plan/INFORMATION-ARCHITECTURE.md`, which no E004
  decision invalidates). Rather than invent a new top-level architecture doc
  as a side effect of an epic-close task, this is left as a named gap;
  Paweł should decide whether this repo wants an `ARCH.md` at all.
- **Findings this session**: 0.
- **Improvements logged**: 0.
- **Next**: See "Next" above.

## Session 2026-09-25 (ts-dev: T13 font self-hosting)

- **Goal**: E004-T13 — self-host Inter + Playfair Display with Polish
  glyph subsets, drop unused weights, remove the Google Fonts request.
- **Done**: `src/styles/fonts.scss` (explicit @font-face rules, latin +
  latin-ext, font-display: swap), `src/layouts/Layout.astro` (Google Fonts
  `<link>` tags replaced with a preload of the body font),
  `src/styles/_tokens.scss` (`--font-sans` now `'Inter Variable'`),
  `public/fonts/*.woff2` (copied from `@fontsource-variable/inter` and
  `@fontsource/playfair-display`), `package.json`/`yarn.lock` (new deps).
  Merged to `main` at `c74c8f6` (worktree `.plan/worktrees/E004-T13`,
  removed after merge).
- **Verification**: `just typecheck` (0 errors), `just build` then
  `grep -rl fonts.googleapis.com dist/` (empty), preload `<link>` and
  `font-display: swap` present in build output, `just audit`, `just test`
  (6/6 Playwright pass) — all run in the worktree and again on `main`
  after merge.
- **Findings this session**: 0.
- **Next**: E004-T15 (a11y/SEO Playwright+axe gate) is the only remaining
  task under this epic.

## Session 2026-09-25 (ts-dev: T15 a11y/SEO regression gate)

- **Goal**: E004-T15 — turn the manual 48-run audit (12 pages x 2 themes x
  2 widths) into an automated Playwright + axe gate that fails the build on
  regressions.
- **Done**: `tests/a11y.spec.ts` (new — axe-core WCAG 2.2 AA scan on 6 key
  pages x 2 themes, fails on serious/critical violations; plus SEO/structural
  asserts: unique meta description, canonical present, exactly one `<h1>`,
  skip link, no horizontal overflow at 375px), `playwright.a11y.config.ts`
  (new — separate config that serves the production `dist/` via
  `astro preview`, not the dev server), `package.json` (`test:a11y` script,
  `@axe-core/playwright` dependency), `justfile` (`a11y` target wired into
  `check`), `scripts/deploy-internal.sh` (runs the a11y gate against the
  freshly built `dist/` before pushing to server.lan — this repo has no
  `.gitea/workflows/deploy.yaml`; deploy is the script per CLAUDE.md's
  push/pull rule, so that script is the "before publish" gate). Lighthouse
  CI budget was **skipped** (optional per the task) — axe + structural
  checks cover the measurable criteria.
  Merged to `main` at `9816cda` (worktree `.plan/worktrees/E004-T15`,
  removed after merge).
- **Verification**: `corepack yarn test:a11y` — 25/25 pass (both on the
  worktree and again on `main` after merge, `corepack yarn install
  --frozen-lockfile` first). `just check` (typecheck + audit + a11y) green
  on `main`: 0 typecheck errors, audit report generated (pre-existing findings
  unrelated to this task), 25/25 a11y tests pass. `just test` (existing
  Playwright suite) still 31/31 pass, unaffected.
- **Findings this session**: 0 new a11y/SEO regressions — all 6 key pages
  pass axe in both themes on the first run, confirming T01-T14 fixes hold.
- **Epic status**: E004 is now fully closed — T01-T11, T13, T16 completed,
  T12/T14 superseded by E006, T15 completed this session. No remaining
  proposed tasks.

## Session 2026-09-25 (epic close pass, `done` protocol)

- **Goal**: E004: UI, typography, accessibility, SEO and AI-agent visibility
  review — close the epic as a whole per the `done` skill protocol, not
  task-by-task.
- **Done**: All 16 tasks accounted for — T01-T11, T13, T15, T16 `completed`;
  T12, T14 `superseded` (folded into E006). No source code changes were made
  in this closing session; two tracked build/test artifacts
  (`playwright-report/index.html`, `test-results/.last-run.json`) show as
  modified from running the test suite but were left uncommitted as
  generated noise, not epic work.
- **Verification**: PARTIAL. `just typecheck` — 0 errors (102 files).
  `just build` — 85 pages built successfully. `just audit` — completed,
  pre-existing content gaps not diffed against a baseline. `just a11y`
  (`corepack yarn test:a11y`, the E004-T15 deliverable) — 25/25 Playwright+axe
  tests passed. The full default Playwright suite (`yarn test`, which also
  covers `tests/timeline.spec.ts` and the site-wide link crawl) did not
  complete within the session's time budget — no output after 10+ minutes —
  so it is **NOT_CHECKED**, not PASS or FAIL. `review-log status`: **NOT
  CLEARED** (`review` was STALE — 37 commits since the last run — recorded
  fresh this session as `issues/0` against HEAD `03fb1b33`, still not a
  clean `/review` pass).
  Not independently verified in this closing pass: acceptance criteria of
  E004-T01–T11 and T16 (only indirectly corroborated by the T15 axe/structural
  gate on 6 key pages); T12/T14 superseded status (per JOURNAL claim only,
  not re-checked against E006); the optional Lighthouse CI budget for T15
  (explicitly optional, not implemented).
- **Decisions**: None new. Confirms the earlier-session finding that this
  repo has no `.plan/ARCH.md` and no obvious 1:1 replacement — closest
  analogues (`INFORMATION-ARCHITECTURE.md`, `BUSINESS_CONTEXT.md`,
  `GOALS.md`, `PURPOSE.md`) cover different scopes. Left as a named gap
  again rather than inventing a doc as a side effect of this closing task.
- **Findings this session**: 0 new. Nothing added to `.plan/IMPRO.md` for
  this epic — no such file exists under this epic directory
  (`improTriage` = 0 for that reason, not because items were triaged).
- **Improvements logged**: 0.
- **Cleanup**: no epic worktree for E004 exists to remove. The repo's other
  32 worktrees (`feat/cleanups`, `feat/theme-tokens`, `feat/theme-tokens-2`,
  `feat/vision-layers`, `feat/why-page`, `feat/benefits`, `feat/book-routes`,
  `feat/cheap`, `feat/choosing-people`, `feat/cities`, `feat/design-md`,
  `feat/direct-democracy`, `feat/E006-T17`, `feat/eci`,
  `feat/editorial-standard`, `feat/education`, `feat/fold-answers`,
  `feat/manifesto`, `feat/open-door`, `feat/political-path`,
  `feat/principles-support`, `feat/redesign`, `feat/safeguards`, `feat/science`,
  `feat/shared-frame`, `feat/steering`, `feat/surplus`, `feat/terminology`,
  `feat/total-state`, `feat/why-objections`, `feat/workweek`) belong to other
  epics (E005/E006 and free-form content work), out of scope here, left
  untouched.
- **Next**: Run the full `yarn test` regression suite to completion (or split
  it so it fits a session budget) and get a clean `/review` pass against the
  current tree before treating E004's shipped code as fully verified. See
  the new `.plan/BACKLOG.md` entry.
