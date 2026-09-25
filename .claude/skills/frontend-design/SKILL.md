---
name: frontend-design
description: Typography and editorial-UI checklist condensed from Anthropic's frontend-design skill. Use before any UI change in this repo to avoid "AI slop" layouts and typography.
---

# frontend-design (vendored checklist)

**Source:** https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md
**Licence:** not verified in this vendoring pass — check the upstream repository's LICENSE file before redistributing this text outside zentala.eu. This file is a condensed checklist, not a verbatim copy.
**Vendored:** 2026-09-25, as part of E004-T16 (see `.plan/reports/2026-09-25-ui-seo-review/00-skills-shortlist.md`).

## Checklist

- Max 1–2 typeface families; if two, they must be clearly distinct.
- Body measure under ~80ch (target 60–75ch); serif body gets more line-height.
- No colour-only emphasis; no ALL CAPS labels without a letter-spacing rationale.
- Core palette limited to 4–6 named, subject-specific values.
- Motion only for one orchestrated moment or a user-triggered action; respect `prefers-reduced-motion`.
- `text-wrap: balance` on headings, `text-wrap: pretty` on paragraphs.
- Use real typographic characters: `…`, curly quotes, non-breaking spaces before units/short words.
- `font-variant-numeric: tabular-nums` for numeric tables/stats.
- Visible `:focus-visible` everywhere; never `outline: none` without a replacement.
- Handle overflow (`break-words`, `min-w-0` on flex children).
- Dark mode: set `color-scheme` on `<html>` and a matching `<meta name="theme-color">`.

Apply this checklist before landing any Astro component or layout change.
