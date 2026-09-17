import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const notes = defineCollection({
  loader: glob({ base: "./src/content/notes", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishedAt: z.coerce.date(),
      updatedAt: z.coerce.date().optional(),
      language: z.enum(["en", "pt-BR"]),
      translationKey: z.string().optional(),
      category: z.enum(["pedeaqui", "foton", "research", "business", "books", "articles"]),
      tags: z.array(z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)).default([]),
      format: z.enum(["signal", "note", "analysis", "building-journal", "thesis", "reading-note"]),
      featured: z.boolean().default(false),
      draft: z.boolean().default(true),
      heroImage: image().optional(),
      heroImageAlt: z.string().optional(),
      sources: z.array(z.url()).default([]),
      disclosure: z.string().optional(),
      readingId: z.string().optional(),
    }),
});

const reading = defineCollection({
  loader: glob({ base: "./src/content/reading", pattern: "**/*.json" }),
  schema: z.object({
    title: z.string(),
    titlePt: z.string().optional(),
    description: z.object({
      en: z.string(),
      pt: z.string(),
    }),
    type: z.enum(["book", "paper", "article", "conference-paper"]),
    creators: z.array(z.string()).min(1),
    creatorRole: z.enum(["author", "editor"]).default("author"),
    sourceUrl: z.url(),
    publicationYear: z.number().int().min(-3000).max(2100),
    publicationYearApproximate: z.boolean().default(false),
    identifier: z.string().optional(),
    venue: z.string().optional(),
    status: z.enum(["reading", "finished", "reference"]),
    addedAt: z.coerce.date(),
    finishedAt: z.coerce.date().optional(),
  }),
});

export const collections = { notes, reading };
