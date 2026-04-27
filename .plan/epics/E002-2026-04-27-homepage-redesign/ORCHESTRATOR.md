# E002 — Orchestrator

**Status:** Wave 1 complete, awaiting decision before Wave 2.

---

## Wave 1 — Preview & decision (DONE 2026-04-27)

Built the comparison preview so the author can see all proposals side-by-side with OLD/NEW switches before committing to changes in `src/pages/index.astro`.

- [x] **E002-T01** — Create design doc with all proposed copy
  → `src/pages/resources/2026-04-27-12-00-homepage-redesign.md`
- [x] **E002-T02** — Build comparison preview page with toggles
  → `src/pages/resources/preview/homepage.astro`
  → `src/pages/resources/preview/_homepage-content.ts`
  → `src/pages/resources/preview/_SectionWrapper.astro`
  → `src/pages/resources/preview/_ToggleSwitch.astro`
- [x] **E002-T03** — Link preview from `/resources/` index
  → updated `src/pages/resources/index.astro`

## Decision gate (BLOCKING)

Before Wave 2 starts, author reviews preview and confirms:
1. Numbers under hero — keep all four, or change which?
2. Pillar addenda — accept text in `_homepage-content.ts:pillarsNew`?
3. CEE focus section — keep as designed?
4. **Benefits variant** — A (CEE focus) / B (per persona) / C (12 with numbers)? **One must be picked.**
5. "What I am not proposing" — accept four bullets?
6. FAQ rewrite — accept all 7 new questions and answers?

Output of decision: short note in `JOURNAL.md` selecting variant + any tweaks.

## Wave 2 — Implementation in main homepage (after decision)

- [ ] **E002-T04** — Apply pillar SVG icons + addenda to `src/pages/index.astro`
- [ ] **E002-T05** — Insert "Diagnosis in 4 numbers" section under hero
- [ ] **E002-T06** — Insert CEE focus section after Why Digital Reform
- [ ] **E002-T07** — Replace Benefits section with selected variant
- [ ] **E002-T08** — Remove Equitable Principles duplicated section
- [ ] **E002-T09** — Insert "What I am not proposing" section before FAQ
- [ ] **E002-T10** — Replace FAQ with offensive rewrite
- [ ] **E002-T11** — `npm run build` clean + smoke-test in `npm run dev`
- [ ] **E002-T12** — Remove preview directory (or keep for historical reference — author's call)

## Notes

- Preview page is private (noindex via Layout, only linked from `/resources/`)
- All proposed copy lives in `_homepage-content.ts` — single source of truth, easy to edit
- Wave 2 should reuse content from `_homepage-content.ts` rather than duplicating strings
