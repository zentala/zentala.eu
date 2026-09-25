import type { APIRoute } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';
import { IS_PREVIEW } from '../lib/preview';
import { getCommentary } from '../lib/commentary';

// Machine-readable index for AI agents (the llms.txt convention). Absolute
// URLs so an agent that only fetches this one file can still cite pages
// correctly. Mirrors the sitemap's draft/preview filtering (E004-T05/T08).
export const GET: APIRoute = async ({ site }) => {
  const absolute = (path: string) => new URL(path, site).toString();

  const chapters = (await getCollection('docs', (entry: CollectionEntry<'docs'>) => {
    return entry.id.startsWith('book/') && !entry.id.includes('.sidecar') && (IS_PREVIEW || !entry.data.draft);
  })).sort((a, b) => a.data.title.localeCompare(b.data.title));

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
  lines.push('## The book');
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
