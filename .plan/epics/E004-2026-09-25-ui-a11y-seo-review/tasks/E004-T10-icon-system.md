---
formatVersion: 1
type: improvement
id: E004-T10
title: One icon system with an Icon component
epic: E004
status: completed
priority: medium
importance: Medium
effort: medium
points: 5
dependencies: []
tags: [components, icons, performance]
created: 2026-09-25
completed_at: 2026-09-25
commits: [811f975]
verification_evidence: []
updated: 2026-09-25
---
# E004-T10: One icon system with an Icon component

**Importance:** Medium · **Points:** 5

## Objective

Icons are a mix of Font Awesome kit (render-blocking external script), emoji, local SVG files, ~40 inline SVGs, and Starlight icon names that render as literal text (docs/index.mdx:17, add-document ×).

## Where

- `src/layouts/Layout.astro:23-26 (FA kit)`
- `src/components/IconLink.astro, Card.astro:49-50`
- `src/pages/index.astro:124-163, home-classic.astro`
- `src/components/WhyDigitalReform.astro:16-52, src/content/docs/why.mdx, docs/index.mdx`

## Acceptance criteria

- [ ] One outline icon family chosen (recommended: Lucide via astro-icon / @iconify-json/lucide, SVG inlined at build time)
- [ ] `Icon.astro` with size scale 16/20/24/32, `currentColor`, aria-hidden by default, `label` prop for standalone icons
- [ ] Font Awesome kit removed; emoji and Starlight names replaced in components and MDX
- [ ] Interactive icon-only controls have ≥44×44 px hit area and an accessible name
- [ ] /ui gallery shows the icon set

## Decision for Paweł

Icon family: Lucide (recommended; thin editorial stroke), Tabler, or Phosphor.

## Decision taken (2026-09-25)

Lucide via astro-icon / @iconify-json/lucide — adopted as the recommended default when Paweł ordered waves 2–4; to be confirmed.

## Evidence

Review report: `.plan/reports/2026-09-25-ui-seo-review/` (skills shortlist, static inventory, rendered axe audit, content/SEO/GEO review).
