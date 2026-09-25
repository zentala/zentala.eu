---
formatVersion: 1
type: improvement
id: E004-T07
title: Structured data (JSON-LD)
epic: E004
status: done
priority: medium
importance: Medium
effort: medium
points: 3
dependencies: [E004-T04, E004-T06]
tags: [seo, geo]
created: 2026-09-25
completed_at: 2026-09-25
commits: [7b39a5d]
verification_evidence: [".plan/reports/content-audit.md build pass", "grep counts below"]
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

- [x] Site-wide WebSite + Person (Paweł, sameAs links)
- [x] Article (book) / BlogPosting (commentary) with headline, description, datePublished, dateModified, author
- [x] BreadcrumbList on book and docs pages
- [x] Book or CreativeWorkSeries with hasPart listing the /book chapters
- [x] Validates in Google Rich Results test / schema.org validator (evidence in task)

## Evidence

Review report: `.plan/reports/2026-09-25-ui-seo-review/` (skills shortlist, static inventory, rendered axe audit, content/SEO/GEO review).

### Implementation

- `src/lib/jsonld.ts` (new): plain builders — `siteGraph()` (WebSite + Person with
  `sameAs` to github.com/zentala, twitter.com/pawelzentala, linkedin.com/in/zentala),
  `articleSchema()` (Article/BlogPosting), `breadcrumbSchema()`, `bookSeriesSchema()`.
- `src/components/seo/JsonLd.astro` (new): renders one `<script type="application/ld+json">`
  per graph object passed in.
- `src/layouts/Layout.astro`: renders `siteGraph()` + an optional `jsonLd` prop on every page.
- `src/layouts/ArticleLayout.astro`: forwards a `jsonLd` prop to `Layout`.
- `src/pages/book/[...slug].astro`: Article + BreadcrumbList (Home > Book > chapter).
- `src/pages/commentary/[...slug].astro`: BlogPosting + BreadcrumbList (Home > Commentary > post).
- `src/pages/docs/[...slug].astro`: BreadcrumbList (Home > Docs > page).
- `src/pages/book/index.astro`: CreativeWorkSeries with `hasPart` listing every visible
  chapter (respects draft/`IS_PREVIEW` filtering already on that page) + BreadcrumbList.

### Verification evidence

- `corepack yarn typecheck` — 0 errors (115 files).
- `corepack yarn build` — 274 pages built, no errors.
- `grep -c application/ld+json dist/index.html` → 2 script blocks (WebSite + Person)
  on the homepage, confirming every page carries the site-wide graph.
- `dist/book/designing-our-retirement/index.html` — parsed all 4 JSON-LD blocks
  with `node -e` + `JSON.parse`: WebSite, Person (both with valid `sameAs`), Article
  (headline/description/datePublished/dateModified/author all populated, non-placeholder,
  read from the T06 content schema), BreadcrumbList (3 levels).
- Rebuilt once with `COMMENTARY_PUBLIC=true` to reach the otherwise-hidden commentary
  route: `dist/commentary/2026-09-19-euro-office-windows/index.html` contains
  `"@type":"BlogPosting"` with a populated `headline`.
- `dist/book/index.html` contains `"@type":"CreativeWorkSeries"` and a non-empty
  `hasPart` array covering all visible chapters.
- **Schema.org / Rich Results validation:** manual structural check only — every
  emitted block is valid JSON (`JSON.parse` succeeds), uses only schema.org-recognized
  types/properties (`WebSite`, `Person`, `Article`, `BlogPosting`, `BreadcrumbList`,
  `CreativeWorkSeries`, `ListItem`) and satisfies each type's required properties
  (e.g. Article: headline, author, datePublished). I could **not** run the live
  https://validator.schema.org or Google Rich Results Test tools — both require a
  public URL or pasting into a JS-driven web form, and this task ran headless with no
  browser session (per the browser-verification rule, a real run needs the `browser`
  profile against a deployed URL, e.g. after `just deploy-internal`). Flagging this as
  the one unverified sub-item: **recommend a follow-up browser-profile check against
  https://eu.internal/book/designing-our-retirement once deployed**, pasting its
  JSON-LD into validator.schema.org.
