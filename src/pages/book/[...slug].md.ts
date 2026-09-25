import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';
import { IS_PREVIEW } from '../../lib/preview';

// Plain-Markdown twin of /book/<slug>, for agents that want the source text
// instead of rendered HTML. Same draft filtering as the HTML route.
export const getStaticPaths: GetStaticPaths = async () => {
  const documents = await getCollection(
    'docs',
    (entry: CollectionEntry<'docs'>) => IS_PREVIEW || !entry.data.draft
  );
  return documents
    .filter((entry: CollectionEntry<'docs'>) => entry.id.startsWith('book/') && !entry.id.includes('.sidecar'))
    .map((entry: CollectionEntry<'docs'>) => ({
      params: { slug: entry.id.replace(/^book\//, '').replace(/\.mdx?$/, '') },
      props: { entry },
    }));
};

export const GET: APIRoute = ({ props, site }) => {
  const entry = props.entry as CollectionEntry<'docs'>;
  const slug = entry.slug.replace(/^book\//, '');
  const url = new URL(`/book/${slug}`, site).toString();

  const frontmatter = [
    '---',
    `title: ${entry.data.title}`,
    `description: ${entry.data.description}`,
    `date: ${entry.data.date.toISOString().slice(0, 10)}`,
    `url: ${url}`,
    '---',
    '',
  ].join('\n');

  return new Response(frontmatter + entry.body, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
