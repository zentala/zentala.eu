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
