import { getCollection } from 'astro:content';

/** The commentary section is built only in dev, or when COMMENTARY_PUBLIC=true. */
export const COMMENTARY_PUBLIC =
  import.meta.env.DEV || process.env.COMMENTARY_PUBLIC === 'true';

/** Visible commentary entries, newest first. Empty when the section is hidden. */
export async function getCommentary() {
  if (!COMMENTARY_PUBLIC) return [];
  const entries = await getCollection('commentary', (e) => import.meta.env.DEV || !e.data.draft);
  return entries.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
