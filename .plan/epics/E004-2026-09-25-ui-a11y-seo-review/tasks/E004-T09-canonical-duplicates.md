---
formatVersion: 1
type: improvement
id: E004-T09
title: Canonicals and redirects for duplicate route families
epic: E004
status: proposed
priority: medium
importance: Medium
effort: medium
points: 3
dependencies: [E001-T01]
tags: [seo, navigation]
created: 2026-09-25
completed_at: null
commits: []
verification_evidence: []
---
# E004-T09: Canonicals and redirects for duplicate route families

**Importance:** Medium · **Points:** 3

## Objective

The same content is served under /book/* and /docs/book/*, /why and /docs/why; /docs/for-you uses meta-refresh; /ui and /home-classic are indexable. Overlaps E001-T01 (route migration) — execute together.

## Where

- `src/pages/docs/book/*.astro (11)`
- `src/pages/docs/why.astro`
- `src/pages/docs/for-you.astro`
- `src/pages/ui/index.astro, src/pages/home-classic.astro`
- `astro.config.mjs redirects`

## Acceptance criteria

- [ ] /docs/book/<slug> → /book/<slug> redirect (or canonical until migrated)
- [ ] /docs/why → /why; /docs/for-you → /benefits via Astro redirects
- [ ] /ui and /home-classic noindex and outside the sitemap
- [ ] Internal links in content use /book/* (robotic-reindustrialisation.md etc.)

## Evidence

Review report: `.plan/reports/2026-09-25-ui-seo-review/` (skills shortlist, static inventory, rendered axe audit, content/SEO/GEO review).
