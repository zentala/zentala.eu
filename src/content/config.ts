import { defineCollection, z } from 'astro:content';

// Define common schema for all content collections
const baseSchema = z.object({
    title: z.string(),
    description: z.string(),
    tags: z.union([z.string(), z.array(z.string())]).optional(),
    author: z.string().optional(),
    customSlug: z.string().optional(), // Renamed from slug to customSlug to avoid conflict with Astro's reserved slug field
    draft: z.boolean().optional().default(false) // Add draft status option
});

// Docs (book, articles, ideas, why...): every entry needs a real date, author
// and an SEO/GEO-sized description for Article JSON-LD and freshness signals.
const docsSchema = baseSchema.extend({
    description: z.string().min(70).max(160),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    author: z.string().default('Paweł Żentała')
});

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

export const collections = {
    commentary: defineCollection({
        schema: commentarySchema
    }),
    docs: defineCollection({
        schema: docsSchema
    }),
    ideas: defineCollection({
        schema: baseSchema
    }),
    transcripts: defineCollection({
        schema: transcriptSchema
    })
};
