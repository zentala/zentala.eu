---
formatVersion: 1
type: improvement
id: E004-T07
title: Structured data (JSON-LD)
epic: E004
status: proposed
priority: medium
importance: Medium
effort: medium
points: 3
dependencies: [E004-T04, E004-T06]
tags: [seo, geo]
created: 2026-09-25
completed_at: null
commits: []
verification_evidence: []
---
# E004-T07: Structured data (JSON-LD)

**Importance:** Medium · **Points:** 3

## Objective

No structured data today. Add schema that tells search engines and AI agents who wrote what, when, and that the essays form one book.

## Where

- `src/components/seo/JsonLd.astro (new)`
- `src/layouts/Layout.astro`
- `book/commentary routes`

## Acceptance criteria

- [ ] Site-wide WebSite + Person (Paweł, sameAs links)
- [ ] Article (book) / BlogPosting (commentary) with headline, description, datePublished, dateModified, author
- [ ] BreadcrumbList on book and docs pages
- [ ] Book or CreativeWorkSeries with hasPart listing the /book chapters
- [ ] Validates in Google Rich Results test / schema.org validator (evidence in task)

## Evidence

Review report: `.plan/reports/2026-09-25-ui-seo-review/` (skills shortlist, static inventory, rendered axe audit, content/SEO/GEO review).
