# HISTORY — zentala.eu

Condensed timeline of epics, decisions, and milestones. Not a journal — see epic `JOURNAL.md` files for live work logs.

---

## 2026-05-12 — E002: Homepage redesign (closed)

Replaced a brochure-style front page with a research-backed manifesto homepage. 13 tasks across 4 waves + 1 triage cleanup. ~30 commits on `dev`.

**What shipped:**
- 4-number diagnosis section (1.46 fertility / 4.1M missing care workers / €800B Draghi gap / €1,500 Estonia savings) with WCAG-AA citations
- 3 pillars rebuilt as 3-col with oversized Roman-numeral backdrop, each with research-backed addendum and `<SourceRef />`
- CEE Focus + bridge sentence; opportunity framing, no shaming
- Benefits replaced 12 marketing cards with 3 typography-driven perspective cards
- Adoption Waves: 3 stacked rows (Wave 1 CEE+Nordic now → Wave 3 South EU 10–15y)
- "What I am not proposing": 4 explicit non-claims with x-circle SVGs
- FAQ rewritten offense-first (Q2 Estonia precedent, Q7 elderly-suicide data anchor); first question gets visual emphasis
- New global `<SourceRef />` component (native Popover desktop, `<dialog>` mobile, build-time slug resolution)
- New global `--color-text-muted` token (4.83:1 / 4.61:1 contrast — replaces opacity hacks)
- New `/research/[slug]` route deep-linking SourceRef badges to source markdown
- Public `src/data/homepage.ts` as canonical content source (moved from private `/resources/preview/`)

**Key architectural decisions:**
1. **T08-split refactor before Wave 3 dispatch** — Beck principle ("make the change easy, then make the easy change"). Split `index.astro` into 9 per-section components first. Result: 7 parallel agents, zero merge conflicts.
2. **Native HTML Popover + `<dialog>` instead of JS framework** for SourceRef — zero bundle, a11y free, 96%+ browser coverage on 2026.
3. **Build-time slug resolution** (`getEntry('docs', slug)` throws on miss) — typos in copy caught by `npm run build`, not by users.
4. **No new content collection for sources** — reused existing `docs` collection. Research files already carry title/description.
5. **`--color-text-muted` token over `opacity: 0.5`** — preserves WCAG contrast.

**Pre-existing build issue resolved:**
- `package.json` pinned `sharp ^0.32.6` but `astro@4.11.0` nests `sharp@0.33.4`. `loadSharp()` resolved the 0.32 install which lacks the `@img/sharp-win32-x64` runtime layout used by 0.33. Bumped top-level pin → dedupes with astro's nested dep.

**Reviews:** plan-design (5/10 → 8/10) + plan-eng (8 decisions, 3 critical gaps addressed). plan-ceo skipped — copy/strategy author-driven.

**Verification at close:**
- `npm run build` — 337 pages, image optimization passing
- `npx playwright test` — 43/43

**Tasks closed:** see `.plan/DONE.md` § 2026-05-12.

---

## Earlier

- **2026-04-27** — E001: Content expansion. 17 tasks, ~30k words of research + 10 manifest pages.
