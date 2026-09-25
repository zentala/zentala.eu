import { defineCollection, reference, z } from 'astro:content';

// Define common schema for all content collections
// customSlug removed (E006-T12): it fed the pre-T08 /docs/ redirect wrappers
// only; those are now a static table in astro.config.mjs and nothing reads
// this field any more (grepped clean across src/).
const baseSchema = z.object({
    title: z.string(),
    description: z.string(),
    tags: z.union([z.string(), z.array(z.string())]).optional(),
    author: z.string().optional(),
    draft: z.boolean().optional().default(false) // Add draft status option
});

// Where a book entry sits in the frame (IA §2.3, D4). Used by /book's index,
// /vision's layer anchors and /glossary's grouping.
export const LAYERS = ['frame', 'language', 'digital', 'robotics', 'path'] as const;
export type Layer = (typeof LAYERS)[number];

// What the reader gets on click (IA §2.3, D4).
export const KINDS = ['argument', 'proposal', 'playbook', 'objections', 'manifesto'] as const;
export type Kind = (typeof KINDS)[number];

// Docs (book, articles, ideas, why...): every entry needs a real date, author
// and an SEO/GEO-sized description for Article JSON-LD and freshness signals.
// tags removed (E006-T12, IA §6 rule 7 / §9 row 6): the /tags pages were
// orphaned and the tag vocabulary is superseded by the governed `concepts`
// reference into the glossary collection. `ideas` keeps free-text tags.
const docsSchema = baseSchema.extend({
    description: z.string().min(70).max(160),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    author: z.string().default('Paweł Żentała'),
    /** Where the entry sits in the frame; required for book/* by the content audit. */
    layer: z.enum(LAYERS).optional(),
    /** What the reader gets on click; required for book/*, why and manifesto by the audit. */
    kind: z.enum(KINDS).optional(),
    /** Reading order inside a layer (1 = first). Ties break alphabetically by title. */
    order: z.number().int().positive().optional(),
    /** Governed terms this entry argues or uses; each must exist in src/content/glossary/. */
    concepts: z.array(reference('glossary')).default([]),
}).omit({ tags: true });

// Define schema for transcripts collection
const transcriptSchema = baseSchema.extend({
    // YouTube specific information
    youtubeId: z.string(), // YouTube video ID
    channelName: z.string(), // YouTube channel name
    channelUrl: z.string().url(), // YouTube channel URL
    videoDate: z.string(), // Publication date of the video
    
    // AI generation metadata
    aiGenerated: z.boolean().default(true),
    generationDate: z.string().optional(), // When the transcript was generated
    publishDate: z.string().optional(), // When the transcript was published on the site
    
    // Additional fields
    duration: z.string(), // Duration of video content (e.g., "10:24")
    language: z.string(), // Language of the original content
    
    // Content-specific fields
    fullTranscript: z.boolean().default(false), // Whether this is a full transcript or partial with summary
    keyPoints: z.array(z.string()).optional(), // Array of key points from the video
});

// Commentary: dated notes on EU reform news — source link + Paweł's comment.
// Hidden in production until COMMENTARY_PUBLIC=true (see src/lib/commentary.ts).
const commentarySchema = z.object({
    title: z.string(),
    description: z.string().min(70).max(160),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    author: z.string().default('Paweł Żentała'),
    sourceUrl: z.string().url(),
    sourceTitle: z.string(),
    sourceOutlet: z.string(),
    topic: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
});

// Glossary (IA §3, D6): one file per governed concept. Frontmatter is the
// TermRef tooltip card; the optional body is the long form /glossary shows.
// `definition` is required only when `status` is 'defined' — a
// 'needs-definition' entry ships with no definition text (the tooltip then
// shows only the link, IA §7).
const glossarySchema = z
    .object({
        term: z.string(),
        aliases: z.array(z.string()).default([]),
        definition: z.string().min(40).max(280).optional(),
        href: z.string().startsWith('/'),
        related: z.array(reference('glossary')).default([]),
        status: z.enum(['defined', 'needs-definition', 'external']).default('defined'),
        autolink: z.boolean().default(false),
        source: z.string().optional(),
    })
    .superRefine((entry, ctx) => {
        if (entry.status === 'defined' && !entry.definition) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "status: 'defined' requires a definition",
                path: ['definition'],
            });
        }
    });

export const collections = {
    commentary: defineCollection({
        schema: commentarySchema
    }),
    docs: defineCollection({
        schema: docsSchema
    }),
    glossary: defineCollection({
        type: 'content',
        schema: glossarySchema
    }),
    ideas: defineCollection({
        schema: baseSchema
    }),
    transcripts: defineCollection({
        schema: transcriptSchema
    })
};
