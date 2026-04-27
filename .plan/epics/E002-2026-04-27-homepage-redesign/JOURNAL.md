# E002 — Journal

## Session 2026-04-27 12:00 — Preview shipped

- **Goal**: build comparison preview so author can pick changes before touching `src/pages/index.astro`
- **Done**:
  - design doc `2026-04-27-12-00-homepage-redesign.md`
  - preview page `/resources/preview/homepage` with OLD/NEW toggles per changed section + A/B/C variant selector for Benefits
  - content data file `_homepage-content.ts` (single source of truth for all proposed copy)
  - helpers `_SectionWrapper.astro`, `_ToggleSwitch.astro`
  - link from `/resources/` index
- **Decisions**:
  - Hero, AI Review, Quick Links, Why Digital Reform, Author, Newsletter — KEPT untouched
  - Equitable Principles — REMOVED (duplicates `/principles`, hero already has CTA)
  - Pillar copy — KEPT, only adding SVG icons + research-backed addendum (no rewrite, no shaming)
  - Benefits — three variants offered (A: 4 CEE cards, B: 3 persona cards, C: 12 with numbers); author picks
- **Findings**:
  - Existing SVG icons (`language.svg`, `digital.svg`, `robot.svg`) cover all three pillars — no new asset work
  - `Layout.astro` already supports `noindex` prop — preview is properly private
  - Research files have enough hard data for every section without inventing numbers
- **Blocker**: Wave 2 implementation waits for author's variant selection (Benefits A/B/C) and review of all proposed copy
- **Next**: author reviews preview → notes decision here → Wave 2 starts
