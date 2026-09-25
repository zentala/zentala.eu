import { readdirSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import rehypeGlossaryTerms from './src/plugins/rehype-glossary-terms.mjs';

// Row 1/2: before E006-T08, docs/[...slug].astro had no namespace filter, so
// EVERY book chapter got an accidental /docs/book/<slug> twin (entry.slug,
// lowercased) alongside its real /book/<slug> page — not just the 13 chapters
// that got an explicit Astro.redirect() wrapper file. Anyone who bookmarked
// or linked to any of those accidental twins needs a real redirect, so this
// entry is generated from the same directory the content collection reads,
// rather than hand-listing the previously-wrapped subset. Excludes sidecars
// (never had a /docs/ twin) and the two eGov chapters (row 4, redirected to
// the merged chapter instead of to themselves).
const bookChapterRedirects = Object.fromEntries(
  readdirSync(new URL('./src/content/docs/book/', import.meta.url))
    .filter((name) => /\.mdx?$/.test(name) && !name.includes('.sidecar.'))
    .map((name) => name.replace(/\.mdx?$/, ''))
    .filter((slug) => !['eGov-vison', 'eGov-challenges'].includes(slug))
    .map((slug) => [`/docs/book/${slug}`, `/book/${slug}`])
);

// Legacy /docs/* URLs, retired in E006-T08 (see
// .plan/epics/E006-2026-09-25-design-editorial-ia/tasks/E006-T08.md and
// .plan/INFORMATION-ARCHITECTURE.md §9). Grouped by the row in that table.
const redirects = {
  // Row 2: the book index, plus every chapter slug (see bookChapterRedirects
  // above) — this covers the 9 previously-wrapped slugs and every other
  // chapter that had the same accidental twin.
  '/docs/book': '/book',
  ...bookChapterRedirects,

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

  // Row 7: the three /vision/<layer> preview pages, replaced by anchors on
  // /vision. Astro 4's static redirects table DOES keep a `#fragment` in the
  // generated meta-refresh stub (verified by inspecting dist/ output —
  // confirmed in the E006-T08 task report), so this is the config entry, not
  // three Astro.redirect() wrapper files. The anchors themselves
  // (#language, #digital, #robotics) are added to vision/index.astro by
  // E006-T07, not here.
  '/vision/digital-integration': '/vision#digital',
  '/vision/language-integration': '/vision#language',
  '/vision/robotic-reindustrialization': '/vision#robotics',

  // Row 6: /tags retired (IA §9 row 6, glossary replaces it).
  '/tags': '/glossary',

  // book/language.md merges into the new floor chapter (IA §2.5, D13); that
  // chapter (book/one-working-language.md) is written in E006-T15 (wave 5)
  // and does not exist yet in this worktree, so this redirect target 404s
  // until that wave lands. Left here rather than after T15 because
  // book/language.md is deleted in this same wave's editorial pass and any
  // link to it must not dead-end even briefly.
  '/book/language': '/book/one-working-language',
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
  // E006-T12 (IA §7): auto-marks the first occurrence per page of a
  // glossary term. `mdx()` inherits `markdown` config by default
  // (extendMarkdownConfig), so this also runs on .mdx chapters.
  markdown: {
    rehypePlugins: [rehypeGlossaryTerms],
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
