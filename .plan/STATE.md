---
updated: 2026-05-12T18:10:00Z
active_epic: E002
active_epic_path: .plan/epics/E002-2026-04-27-homepage-redesign
current_wave: done
---

## Status

E001 (content expansion) complete — see DONE.md.
E002 ALL WAVES DONE 2026-05-12.
- Wave 1: preview shipped.
- Wave 2: T00 DESIGN.md + `--color-text-muted` token, T11 SourceRef + Playwright tests.
- Wave 2.5: T08-split refactor — homepage split into `src/components/home/` per-section components.
- Wave 3: 7 parallel worktrees (T04 Pillars, T05 Numbers, T06 CEEFocus, T07-a Benefits, T07-b AdoptionWaves, T09 NotProposing, T10 FAQ). Zero merge conflicts.
- Wave 4: Sharp 0.32→0.33.4 bump (fixes pre-existing build blocker), `/research/[...slug]` double-prefix fix, search.astro `<script>`-in-comment fix, Playwright suite 41/41, preview historical-reference banner.

All three reviews done (copy, design, eng). Epic ready to close.

## Recent commits (E002 Wave 3 merges)

- merge T10 FAQ rewrite (SHA `02d86b3`)
- merge T09 NotProposing (SHA `1e9781d`)
- merge T07-b AdoptionWaves (SHA `954206d`)
- merge T07-a Benefits perspectives (SHA `feb70ab`)
- merge T06 CEE Focus + bridge (SHA `bd54c91`)
- merge T05 Numbers (SHA `ba203dc`)
- merge T04 Pillars + Roman backdrop (SHA `279468e`)

## Active Tasks

None. E002 complete.

## Next Steps

1. Triage epic's `IMPROVEMENTS.md` with user (3 open follow-ups: public-vs-private content boundary, missing `adoptionWaves` export, `<FAQ>` per-item emphasis prop).
2. Update `.arch/HISTORY.md` with E002 summary.
3. Append entry to `.plan/DONE.md`.
4. Optional: CEO/ADR for the Sharp version-pin decision.
