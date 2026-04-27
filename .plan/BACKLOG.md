# BACKLOG — zentala.eu

Open ideas and future improvements not yet assigned to an epic.

---

## Content / Copy

- [ ] Add real expert quotes to `Testimonials` component (currently component exists but is unused on homepage — only in `/ui` dev library). Find actual EU reform advocates, analysts, thinkers.
- [ ] Home page: shorten benefits section
- [ ] Home page: split benefits into "for citizens", "for businesses", "for regions", "for European integration"
- [ ] Home page: add "Problems we address / EU Challenges" section (security, political unity, R&D, migration, energy, healthcare, retirement, education, economic power)
- [ ] `/why` page: connect transcripts, summarize as infographic with links to videos
- [ ] `/why` content in Polish → move to zentala.pl as intro
- [ ] Leave feedback / comments / likes / share mechanics — some dynamic element

## Structure / Navigation

- [ ] Reorganize all content around 3 pillars: Language Integration, Digital Integration, Robotic Reindustrialization
- [ ] Mobile navigation: expand menu, add transitions, better topic grouping
- [ ] Breadcrumbs navigation
- [ ] Fix all broken links (see `missing_links.md`)
- [ ] Sidebar navigation for content browsing

## Infrastructure / Integrations

- [ ] Configure Appwrite email templates for newsletter confirmation to look like a proper subscription confirmation (not default Appwrite emails)
  - URL: https://cloud.appwrite.io/console/project-eu/auth/templates

## Data & Integrations

- [ ] Replace hardcoded sample stats in `InteractiveSection.astro` with real Eurostat API data
  - **Currently NOT used in production.** `<InteractiveSection>` is commented out on home
    page (E000-T02). Only renders in dev-only `/ui` library page.
  - Decision required first: does `<InteractiveSection>` come back to home? If no →
    delete the component instead of wiring Eurostat.
  - Hardcoded data: language %, DESI scores, fictional GDP gains
    (`src/components/InteractiveSection.astro` lines 27-53)
- [ ] Algolia: fix oversized records before full integration (3 transcripts exceed 10KB limit)
  - **Currently NOT used in production.** Mock client returns empty results. Search bar
    HIDDEN from navbar (E000-T03). `/search` page still reachable via sitemap but empty.
  - Reactivation steps documented at the top of `src/lib/algoliaClient.ts`.
  - File list of oversized records: was in `todo_algolia.md` but file is missing — need
    to regenerate by running indexer and capturing the size errors.

## Mock features hidden from UI

- [ ] **Algolia search** — hidden from navbar via E000-T03 (`5e300a2`). Currently mock-only,
  returns empty results. To reactivate: see top-of-file comment in `src/lib/algoliaClient.ts`.
  Linked from sitemap; `/search` page still loads but returns nothing.

## Visual / UX

- [ ] Improve card visuals: better icons and illustrations
- [ ] Improve readability of long lists (split into digestible sections)
- [ ] Subtle animations and transitions (smooth scroll, card entrances)
- [ ] Interactive timeline for reform implementation
- [ ] "Continue reading" / "related topics" at end of each page
- [ ] Table of contents for long articles

## Technical Debt

**Closed 2026-04-27.**
- E000-T02 (`6aad746`) — 31 of 33 astro check hints commented with TODO markers
- E000-T03 (`5e300a2`) — last 2 hints fixed by support.astro `onclick` → `addEventListener` refactor

Current `astro check`: **0 errors / 0 warnings / 0 hints.** Clean baseline established.

Next debt items, when they arise, get tracked here.

## Performance

- [ ] Lazy loading for images and heavy elements
- [ ] Image and asset optimization
- [ ] Code splitting for faster initial load
- [ ] Optimize Algolia indexing: searchable attributes, facets, filters

## SEO & Metadata

- [ ] Optimize all page metadata
- [ ] Add structured data (JSON-LD)
- [ ] Create XML sitemap
- [ ] Enhance meta descriptions and titles

## Accessibility

- [ ] WCAG compliance audit
- [ ] Keyboard navigation improvements
- [ ] Cross-browser and device testing
