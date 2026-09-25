---
formatVersion: 1
type: improvement
id: E004-T04
title: Per-page SEO head: description, canonical, Open Graph
epic: E004
status: completed
priority: high
importance: High
effort: small
points: 3
dependencies: []
tags: [seo]
created: 2026-09-25
completed_at: 2026-09-25
commits: [95593d3, c26cda4]
verification_evidence: ["axe after-audit 48 runs: color-contrast 245->8, button-name 26->4, label 4->0; residue only /transcripts iframe + /docs redirect to prod", "just build 0 errors; merged to main c26cda4"]
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

- [x] Layout props: title, description, canonical (derived from Astro.site + path), ogImage, noindex, type
- [x] `site` set in astro.config.mjs (see T05 decision)
- [x] Collection routes pass entry.data.description; static pages pass their own
- [x] OG + Twitter card tags, `theme-color` light/dark, `color-scheme` on <html>
- [x] Content audit reports duplicate or missing descriptions (extend scripts/content-audit.mjs)

## Evidence

Review report: `.plan/reports/2026-09-25-ui-seo-review/` (skills shortlist, static inventory, rendered axe audit, content/SEO/GEO review).
