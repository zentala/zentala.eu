import type { APIRoute } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';
import { IS_PREVIEW } from '../lib/preview';
import { getCommentary } from '../lib/commentary';
import { LAYERS } from '../content/config';

// Reading-order manifest (IA §10): layer, then order inside the layer, then
// title for entries that still lack `order`. `LAYERS` fixes the layer
// sequence (frame first, path last); an entry with no layer sorts last.
function byReadingOrder(a: CollectionEntry<'docs'>, b: CollectionEntry<'docs'>): number {
  const layerRank = (entry: CollectionEntry<'docs'>) => {
    const index = entry.data.layer ? LAYERS.indexOf(entry.data.layer) : -1;
    return index === -1 ? LAYERS.length : index;
  };
  return (
    layerRank(a) - layerRank(b) ||
    (a.data.order ?? Infinity) - (b.data.order ?? Infinity) ||
    a.data.title.localeCompare(b.data.title)
  );
}

// Machine-readable index for AI agents (the llms.txt convention). Absolute
// URLs so an agent that only fetches this one file can still cite pages
// correctly. Mirrors the sitemap's draft/preview filtering (E004-T05/T08).
export const GET: APIRoute = async ({ site }) => {
  const absolute = (path: string) => new URL(path, site).toString();

  const chapters = (await getCollection('docs', (entry: CollectionEntry<'docs'>) => {
    return entry.id.startsWith('book/') && !entry.id.includes('.sidecar') && (IS_PREVIEW || !entry.data.draft);
  })).sort(byReadingOrder);

  const commentary = await getCommentary();

  const lines: string[] = [];
  lines.push('# EU Reform Vision');
  lines.push('');
  lines.push(
    '> Europe is aging and its pension model is running out of workers to pay for it. This site lays out a thirty-year plan to replace generational support with one working language, a digital state, and robotics — three layers stacked so the fewer working-age people left are not crushed carrying the rest.'
  );
  lines.push('');
  lines.push('## Start here');
  lines.push('');
  lines.push(`- [Home](${absolute('/')}): overview and the case in brief`);
  lines.push(`- [Vision](${absolute('/vision')}): the three-layer framework`);
  lines.push(`- [Why Reform EU?](${absolute('/why')}): the case for reform`);
  lines.push('');
  lines.push('## Chapters');
  lines.push('');
  for (const entry of chapters) {
    const slug = entry.slug.replace(/^book\//, '');
    lines.push(`- [${entry.data.title}](${absolute(`/book/${slug}`)}): ${entry.data.description}`);
  }
  lines.push('');

  if (commentary.length > 0) {
    lines.push('## Commentary');
    lines.push('');
    for (const entry of commentary) {
      lines.push(`- [${entry.data.title}](${absolute(`/commentary/${entry.slug}`)}): ${entry.data.description}`);
    }
    lines.push('');
  }

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
