---
updated: 2026-05-12T13:35:00Z
active_epic: E002
active_epic_path: .plan/epics/E002-2026-04-27-homepage-redesign
current_wave: 4
---

## Status

E001 (content expansion) complete — see DONE.md.
E002 Wave 1 done (preview shipped).
E002 Wave 2 done: T00 (DESIGN.md + --color-text-muted token), T11 (SourceRef + research route + Playwright tests).
E002 Wave 2.5 done: T08-split (homepage refactored into src/components/home/ per-section components).
E002 Wave 3 done: T04 Pillars, T05 Numbers, T06 CEEFocus, T07-a Benefits (3 perspectives), T07-b AdoptionWaves, T09 NotProposing, T10 FAQ rewrite. 7 parallel worktrees, zero conflicts, `astro check` 0/0/0.
All three reviews done (copy, design, eng).

## Recent commits (E002 Wave 3 merges)

- merge T10 FAQ rewrite (SHA `02d86b3`)
- merge T09 NotProposing (SHA `1e9781d`)
- merge T07-b AdoptionWaves (SHA `954206d`)
- merge T07-a Benefits perspectives (SHA `feb70ab`)
- merge T06 CEE Focus + bridge (SHA `bd54c91`)
- merge T05 Numbers (SHA `ba203dc`)
- merge T04 Pillars + Roman backdrop (SHA `279468e`)

## Active Tasks

None in progress. Wave 4 is the next gate — T12 build/smoke verify (BLOCKED on pre-existing Sharp issue in `.plan/IMPROVEMENTS.md`) and T13 preview disposition.

## Pre-existing issue (NOT caused by E002)

`npm run build` content/check passes, but post-build image optimization fails because `loadSharp` cannot find Sharp at runtime. Affects production deploy. Add to `.plan/IMPROVEMENTS.md` and address before T12 verification.

## Next Steps

1. **Resolve Sharp build issue** (see `.plan/IMPROVEMENTS.md`) — blocks T12.
2. **Wave 4 T12:** `npm run build` + Playwright `tests/source-ref.spec.ts` + manual smoke at 375/768/1280 viewports.
3. **Wave 4 T13:** mark `/resources/preview/homepage` as historical reference.
4. Close epic — triage epic's IMPROVEMENTS.md and update `.arch/HISTORY.md`.
