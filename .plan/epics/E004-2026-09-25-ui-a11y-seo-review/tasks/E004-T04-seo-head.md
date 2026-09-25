---
formatVersion: 1
type: improvement
id: E004-T04
title: Per-page SEO head: description, canonical, Open Graph
epic: E004
status: proposed
priority: high
importance: High
effort: small
points: 3
dependencies: []
tags: [seo]
created: 2026-09-25
completed_at: null
commits: []
verification_evidence: []
---
# E004-T04: Per-page SEO head: description, canonical, Open Graph

**Importance:** High · **Points:** 3

## Objective

Layout takes only `title`; every page ships the same hard-coded description (Layout.astro:17); no canonical, OG, Twitter, theme-color. index.astro:112 builds a description that is never passed.

## Where

- `src/layouts/Layout.astro:6-28`
- `astro.config.mjs (add site)`
- `all route files passing props`
- `public/ (og-default.png, apple-touch-icon, manifest)`

## Acceptance criteria

- [ ] Layout props: title, description, canonical (derived from Astro.site + path), ogImage, noindex, type
- [ ] `site` set in astro.config.mjs (see T05 decision)
- [ ] Collection routes pass entry.data.description; static pages pass their own
- [ ] OG + Twitter card tags, `theme-color` light/dark, `color-scheme` on <html>
- [ ] Content audit reports duplicate or missing descriptions (extend scripts/content-audit.mjs)

## Evidence

Review report: `.plan/reports/2026-09-25-ui-seo-review/` (skills shortlist, static inventory, rendered axe audit, content/SEO/GEO review).
