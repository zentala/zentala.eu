import type { APIRoute } from 'astro';
import { IS_PREVIEW } from '../lib/preview';

// The internal LAN preview build (eu.internal) sets SITE_PREVIEW=true and must
// never become indexable by accident (CLAUDE.md "Internal preview"). Production
// deliberately allows all bots, including AI training and citation crawlers —
// Paweł's decision, E004-T05.
export const GET: APIRoute = ({ site }) => {
  const body = IS_PREVIEW
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', site).toString()}\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
