---
formatVersion: 1
type: improvement
id: E004-T12
title: Token hygiene and an automated guard
epic: E004
status: proposed
priority: medium
importance: Medium
effort: medium
points: 5
dependencies: [E004-T01]
tags: [theme, tokens, tooling]
created: 2026-09-25
completed_at: null
commits: []
verification_evidence: []
---
# E004-T12: Token hygiene and an automated guard

**Importance:** Medium · **Points:** 5

## Objective

CLAUDE.md forbids hard-coded colours and font sizes in components, but hex values remain in InteractiveSection (19), EUStatisticsChart (17), AlgoliaSearch, EuropeMap, Hero, GradientSection, and literal text-white/text-gray-* in ui/index (94), vision/* (~155), docs/all (50).

## Where

- `src/components/InteractiveSection.astro, EUStatisticsChart.astro, AlgoliaSearch.astro, EuropeMap.astro, Hero.astro, GradientSection.astro`
- `src/pages/ui, vision, docs/all, search, benefits, why`
- `src/styles/_tokens.scss`

## Acceptance criteria

- [ ] Tokens added for line-height, radius scale (4/8/12/16/full) and spacing where missing
- [ ] Zero hex/rgba literals in src/components and src/pages (charts read CSS variables at runtime)
- [ ] Zero `text-white` / `text-gray-*` literals outside token-mapped utilities
- [ ] `scripts/check-tokens.mjs` (or stylelint) wired into `just check` fails on new violations

## Evidence

Review report: `.plan/reports/2026-09-25-ui-seo-review/` (skills shortlist, static inventory, rendered axe audit, content/SEO/GEO review).
