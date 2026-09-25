/**
 * The sitemap plugin emits sitemap-index.xml plus sitemap-0.xml shards. The site is one
 * sitemap's worth of pages, and /sitemap.xml is the name people and crawlers expect, so
 * fold it into a single file after the build.
 *
 * Fails loudly: a build with no sitemap must not look like a successful one.
 */
import { readdir, readFile, writeFile, rm } from 'node:fs/promises';

const DIST = 'dist';
const files = await readdir(DIST);
const shards = files.filter((f) => /^sitemap-\d+\.xml$/.test(f));

if (shards.length === 0) {
  console.error('SITEMAP_FAILED: no sitemap-N.xml in dist/ — did the plugin run?');
  process.exit(1);
}
if (shards.length > 1) {
  console.error(`SITEMAP_FAILED: ${shards.length} shards; merging is not implemented`);
  process.exit(1);
}

const xml = await readFile(`${DIST}/${shards[0]}`, 'utf8');
const urls = (xml.match(/<url>/g) || []).length;
if (urls === 0) {
  console.error('SITEMAP_FAILED: the sitemap lists no pages');
  process.exit(1);
}

await writeFile(`${DIST}/sitemap.xml`, xml);
await rm(`${DIST}/${shards[0]}`);
await rm(`${DIST}/sitemap-index.xml`, { force: true });
console.log(`sitemap.xml written with ${urls} pages`);
