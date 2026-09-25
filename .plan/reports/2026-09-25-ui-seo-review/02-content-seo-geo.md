# Content, SEO and GEO review (2026-09-25, read-only)

## Frontmatter
- book/* (baseSchema, src/content/config.ts:5-12): description present but uneven (principles.md 118 chars, generic); NO date/updated field in schema; author on ~half.
- commentary/* (config.ts:36-45): has date; NO description, NO author in schema.
- Layout.astro:6-10 accepts only `title`; Layout.astro:17 one global description. index.astro:112 builds a description that is never passed (dead code).

## Essays (sample of 5: designing-our-retirement, european-english, robotic-reindustrialisation, principles, political-path)
- Duplicate H1: book/[...slug].astro:22 renders h1 from title, and markdown body opens with its own `# Title` (e.g. designing-our-retirement.md:8). Same pattern in commentary/docs routes.
- Answer-first: 2/5 (european-english has TLDR). Others open with narrative hooks; thesis lands late.
- Question-phrased headings: 0. Comparison tables/lists: 0.
- Internal links use deprecated /docs/book/* URLs (robotic-reindustrialisation.md).
- Typographic chars (book/*): curly quotes 218 vs straight 125; em dash 51, en dash 7; spaced hyphen 2; no "..." issue.

## Domain conflict (decision)
- public/CNAME = zentala.eu, GitHub Pages deploy (.github/workflows/deploy.yml:44-48) → production.
- public/sitemap.xml: 21 URLs on eu.zentala.io (wrong). astro.config.mjs has no `site`.

## Proposal
- `site: 'https://zentala.eu'`, @astrojs/sitemap, delete hand-written sitemap; exclude /ui, /home-classic, /docs/book/*, /docs/why.
- robots.txt: allow search/citation bots; training bots (GPTBot, ClaudeBot, Google-Extended, CCBot) = Paweł's decision (recommend allow, per PURPOSE.md:15 distribution goal); Sitemap line.
- llms.txt as Astro endpoint generated from collections: H1 "EU Reform Vision", blockquote thesis, "Start here", "The book", "Commentary", link llms-full.txt.
- Markdown twins: book/[...slug].md.ts, commentary/[...slug].md.ts returning entry.body as text/markdown.
- JSON-LD: WebSite + Person site-wide; Article/BlogPosting on book + commentary (needs schema dates/description first); BreadcrumbList; CreativeWorkSeries/Book with hasPart for the book.
- OG: static default image first; per-article generation later (decision).
- RSS for commentary (@astrojs/rss), gated like commentary index.
- noindex /ui, /home-classic; /docs/why → canonical/redirect /why; /docs/book/* → 301 to /book/*; /docs/for-you meta-refresh → proper redirect.

## Example meta descriptions
1. Home: "Europe's pension model runs out in thirty years. This site proposes what replaces it: shared language, a digital state, and robotics — in that order."
2. european-english: "A proposal for European English: a shared, testable second-language standard for EU administration and business — not a new dialect, not a replacement for national languages."
3. robotic-reindustrialisation: "Europe already funds robotics through defence research. This proposal shows how to convert that into civilian labor after the war, kept cheap enough that everyone benefits."

## Example answer-first opening (political-path.md)
> This chapter answers one question: who decides? Every reform proposed on this site needs a political path from "good idea" to EU policy, and that path runs through citizens and a coalition of willing member states, not through unanimous treaty change. The mechanism is direct democracy offered as the entry price for joining early — not imposed on everyone at once.
