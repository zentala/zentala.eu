import type { APIRoute, GetStaticPaths } from 'astro';
import { getCommentary } from '../../lib/commentary';

// Plain-Markdown twin of /commentary/<slug>. Respects COMMENTARY_PUBLIC via
// getCommentary(), the same gate the HTML route and index use.
export const getStaticPaths: GetStaticPaths = async () => {
  const entries = await getCommentary();
  return entries.map((entry) => ({ params: { slug: entry.slug }, props: { entry } }));
};

export const GET: APIRoute = ({ props, site }) => {
  const entry = props.entry as Awaited<ReturnType<typeof getCommentary>>[number];
  const url = new URL(`/commentary/${entry.slug}`, site).toString();

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
