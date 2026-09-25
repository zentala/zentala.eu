// Structured data builders (E004-T07). Plain functions returning JSON-LD
// objects so pages can compose exactly the graphs they need; JsonLd.astro
// only serializes whatever is passed to it.

export const SITE_URL = 'https://zentala.eu'
export const SITE_NAME = 'EU Reform Vision'
export const AUTHOR_NAME = 'Paweł Żentała'
export const AUTHOR_SAME_AS = [
  'https://github.com/zentala',
  'https://twitter.com/pawelzentala',
  'https://linkedin.com/in/zentala',
]

export function personSchema() {
  return {
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: AUTHOR_NAME,
    url: SITE_URL,
    sameAs: AUTHOR_SAME_AS,
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description:
      'A comprehensive vision for European integration through technology, language, and infrastructure.',
    publisher: { '@id': `${SITE_URL}/#person` },
    author: { '@id': `${SITE_URL}/#person` },
  }
}

/** Site-wide graph: WebSite + Person, meant for every page's <head>. */
export function siteGraph() {
  return [websiteSchema(), { '@context': 'https://schema.org', ...personSchema() }]
}

interface ArticleLikeInput {
  type: 'Article' | 'BlogPosting'
  url: string
  headline: string
  description: string
  datePublished: Date
  dateModified?: Date
  authorName?: string
}

/** Article (book chapters) or BlogPosting (commentary) with author/date fields. */
export function articleSchema({
  type,
  url,
  headline,
  description,
  datePublished,
  dateModified,
  authorName = AUTHOR_NAME,
}: ArticleLikeInput) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${url}#article`,
    mainEntityOfPage: url,
    url,
    headline,
    description,
    datePublished: datePublished.toISOString(),
    dateModified: (dateModified ?? datePublished).toISOString(),
    author: authorName === AUTHOR_NAME ? { '@id': `${SITE_URL}/#person` } : { '@type': 'Person', name: authorName },
    publisher: { '@id': `${SITE_URL}/#person` },
  }
}

interface BreadcrumbItem {
  name: string
  url: string
}

/** BreadcrumbList for book/docs pages. */
export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

interface BookPart {
  name: string
  url: string
}

/** CreativeWorkSeries for the /book index, listing every chapter as hasPart. */
export function bookSeriesSchema(parts: BookPart[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWorkSeries',
    '@id': `${SITE_URL}/book#series`,
    name: 'EU Reform Vision — the Book',
    url: `${SITE_URL}/book`,
    author: { '@id': `${SITE_URL}/#person` },
    hasPart: parts.map((part) => ({
      '@type': 'CreativeWork',
      name: part.name,
      url: part.url,
    })),
  }
}
