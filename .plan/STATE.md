---
updated: 2026-05-12T13:05:00Z
active_epic: E002
active_epic_path: .plan/epics/E002-2026-04-27-homepage-redesign
current_wave: 3
---

## Status

E001 (content expansion) complete — see DONE.md.
E002 Wave 1 done (preview shipped).
E002 Wave 2 done: T00 (DESIGN.md + --color-text-muted token), T11 (SourceRef + research route + Playwright tests).
E002 Wave 2.5 done: T08-split (homepage refactored into src/components/home/ per-section components).
All three reviews done (copy, design, eng).

## Recent commits (E002)

- `742863a` merge(E002-T08-split): per-section components in src/components/home/
- `54eccd7` refactor(E002-T08-split): split index.astro
- `96c253a` chore(E002): update STATE.md after Wave 2
- `0ac346e` merge(E002-T11): SourceRef + research route + tests
- `a757d3b` merge(E002-T00): DESIGN.md + --color-text-muted token

## Active Tasks

None in progress. Wave 3 (7 parallel worktrees) is the next gate — each task edits its own file in `src/components/home/`, zero conflicts expected.

## Pre-existing issue (NOT caused by E002)

`npm run build` content/check passes, but post-build image optimization fails because `loadSharp` cannot find Sharp at runtime. Affects production deploy. Add to `.plan/IMPROVEMENTS.md` and address before T12 verification.

## Next Steps

1. **Wave 3:** dispatch T04, T05, T06, T07-a, T07-b, T09, T10 as parallel worktrees. Each task edits its own component file in `src/components/home/`.
2. **Wave 4:** T12 build/test verification (resolve Sharp issue), T13 preview retention.
3. Close epic.
