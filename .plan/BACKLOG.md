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
  - Currently: hardcoded language %, DESI scores, fictional GDP gains
  - File: `src/components/InteractiveSection.astro` lines 27-53
  - Note at bottom: "Data is for illustrative purposes"
- [ ] Algolia: fix oversized records before full integration (3 transcripts exceed 10KB limit)
  - Files listed in `todo_algolia.md`
  - Run `npm run index-algolia` after fixing
  - `algoliaClient.ts` currently uses mock client — needs real init after env vars confirmed

## Visual / UX

- [ ] Improve card visuals: better icons and illustrations
- [ ] Improve readability of long lists (split into digestible sections)
- [ ] Subtle animations and transitions (smooth scroll, card entrances)
- [ ] Interactive timeline for reform implementation
- [ ] "Continue reading" / "related topics" at end of each page
- [ ] Table of contents for long articles

## Technical Debt (from TODO_CLEANUP.md)

- [ ] Fix TypeScript warnings in `EUStatisticsChart.astro` (Chart ID handling)
- [ ] Remove unused imports in `src/pages/index.astro` (ArrowRightIcon, RobotIcon, DigitalIcon, LanguageIcon, InteractiveSection, Testimonials)
- [ ] Remove unused var `isDevelopment` in `src/components/Footer.astro`
- [ ] Remove unused vars `borderColorClass`, `bgColorClass` in `WhyDigitalReform.astro`
- [ ] Remove unused var `benefitsContainer` in `src/pages/benefits.astro`
- [ ] Remove unused var `statusMessage` in `src/pages/confirm.astro`
- [ ] Remove unused var `isProduction` in `src/pages/ui/index.astro`
- [ ] Remove unused imports `Card`, `CardGrid` in vision components
- [ ] Fix deprecated `frameborder` → `border-0` class in all iframes
- [ ] Fix CardGrid usage in `content/docs/all.mdx`

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
