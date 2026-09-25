import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// Legacy /docs/* URLs, retired in E006-T08 (see
// .plan/epics/E006-2026-09-25-design-editorial-ia/tasks/E006-T08.md and
// .plan/INFORMATION-ARCHITECTURE.md §9). Grouped by the row in that table.
const redirects = {
  // Row 2: the book index and its 9 straightforward wrapper slugs.
  '/docs/book': '/book',
  '/docs/book/digital-receipts': '/book/digital-receipts',
  '/docs/book/economic-growth-language-unity': '/book/economic-growth-language-unity',
  '/docs/book/european-blockchain-archives': '/book/european-blockchain-archives',
  '/docs/book/european-elearning-system': '/book/european-elearning-system',
  '/docs/book/language-integration-administrative-implementation':
    '/book/language-integration-administrative-implementation',
  '/docs/book/media-cultural-integration': '/book/media-cultural-integration',
  '/docs/book/near-zero-transaction-costs': '/book/near-zero-transaction-costs',
  '/docs/book/predictive-healthcare-system': '/book/predictive-healthcare-system',
  '/docs/book/unified-payment-zone': '/book/unified-payment-zone',

  // Row 2: /why and its old customSlug spelling.
  '/docs/why': '/why',
  '/docs/why-reforms': '/why',

  // Row 2: /for-you renamed to /benefits.
  '/docs/for-you': '/benefits',

  // Row 2: the two old spellings of the European English chapter.
  '/docs/european-english': '/book/european-english',
  '/docs/language-official-proposal': '/book/european-english',

  // Row 3: the retired pre-frame principles chapter — now a top-level page,
  // not a book chapter (book/principles.md is deleted).
  '/docs/book/principles': '/principles',
  '/book/principles': '/principles',

  // Row 4: both casings of both eGov slugs, under their legacy /docs/ path,
  // merge into the existing book/european-egovernment.mdx chapter. The
  // eGov-vison/eGov-challenges content merge itself is E006-T18; here we
  // only redirect the old /docs/ URLs. The bare /book/eGov-vison and
  // /book/eGov-challenges paths are deliberately NOT redirected here: both
  // files are draft:true, so book/[...slug].astro (entry.id keeps case,
  // per IA §9 row 4) omits them from a production build — no route exists
  // to collide with — but a SITE_PREVIEW=true build still generates the
  // real chapter at that exact path, and a redirect entry for the same
  // path would collide with it and fail the build.
  '/docs/book/eGov-vison': '/book/european-egovernment',
  '/docs/book/egov-vison': '/book/european-egovernment',
  '/docs/book/eGov-challenges': '/book/european-egovernment',
  '/docs/book/egov-challenges': '/book/european-egovernment',

  // E006-T12 rows (not this task) — left as a marker so the next task finds
  // its place in this table instead of starting a second one:
  // '/tags': '/glossary',
  // '/book/language': '/book/one-working-language',
};

// https://astro.build/config
export default defineConfig({
  site: 'https://zentala.eu',
  redirects,
  integrations: [
    tailwind(),
    mdx(),
    icon(),
    sitemap({
      filter: (page) => {
        const url = new URL(page);
        const path = url.pathname;
        return (
          !path.startsWith('/ui') &&
          !path.startsWith('/home-classic') &&
          !path.startsWith('/docs/book/') &&
          !path.startsWith('/docs/why') &&
          !path.startsWith('/docs/for-you') &&
          !path.includes('/drafts/')
        );
      },
    }),
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  vite: {
    server: {
      watch: {
        usePolling: true
      },
      hmr: {
        overlay: false
      }
    }
  }
});
