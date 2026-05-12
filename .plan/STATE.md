---
updated: 2026-05-12T05:10:00Z
active_epic: E002
active_epic_path: .plan/epics/E002-2026-04-27-homepage-redesign
current_wave: 2.5
---

## Status

E001 (content expansion) complete — see DONE.md.
E002 Wave 1 done (preview shipped).
E002 Wave 2 done: T00 (DESIGN.md + --color-text-muted token), T11 (SourceRef + research route + Playwright tests).
All three reviews done (copy, design, eng).

## Recent commits (E002)

- `0ac346e` merge(E002-T11): SourceRef + research route + tests
- `a757d3b` merge(E002-T00): DESIGN.md + --color-text-muted token
- `4629d40` docs(E002): lock copy + design + eng decisions

## Active Tasks

None in progress. Wave 2.5 (T08-split refactor) is the next gate before Wave 3 parallel dispatch.

## Pre-existing issue (NOT caused by E002)

`npm run build` content/check passes, but post-build image optimization fails because `loadSharp` cannot find Sharp at runtime. Affects production deploy. Add to `.plan/IMPROVEMENTS.md` and address before T12 verification.

## Next Steps

1. **Wave 2.5:** T08-split — refactor `src/pages/index.astro` into per-section components in `src/components/home/` (behavior-preserving). One worktree, ~30-45 min.
2. **Wave 3:** dispatch T04, T05, T06, T07-a, T07-b, T09, T10 as parallel worktrees.
3. **Wave 4:** T12 build/test verification (resolve Sharp issue), T13 preview retention.
4. Close epic.
