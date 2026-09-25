import type { APIRoute } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';
import { IS_PREVIEW } from '../lib/preview';

// Full-text companion to /llms.txt: every published book chapter concatenated,
// so an agent can read the whole book in one fetch instead of one per chapter.
export const GET: APIRoute = async ({ site }) => {
  const absolute = (path: string) => new URL(path, site).toString();

  const chapters = (await getCollection('docs', (entry: CollectionEntry<'docs'>) => {
    return entry.id.startsWith('book/') && !entry.id.includes('.sidecar') && (IS_PREVIEW || !entry.data.draft);
  })).sort((a, b) => a.data.title.localeCompare(b.data.title));

  const sections = chapters.map((entry) => {
    const slug = entry.slug.replace(/^book\//, '');
    return [
      `# ${entry.data.title}`,
      '',
      `URL: ${absolute(`/book/${slug}`)}`,
      '',
      entry.body,
    ].join('\n');
  });

  const body = ['# EU Reform Vision — Full Book', '', sections.join('\n\n---\n\n')].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
