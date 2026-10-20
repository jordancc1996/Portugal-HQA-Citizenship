import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);
const slug = z
  .string()
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
  .refine((value) => !/\d{4}/.test(value), "Slugs do not include a year or a full date.");

const reports = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/reports" }),
  schema: z.object({
    title: z.string(),
    metaTitle: z.string(),
    description: z.string(),
    slug,
    datePublished: isoDate,
    dateModified: isoDate,
    lastVerified: isoDate,
    pdf: z
      .string()
      .regex(/^\/downloads\/[a-z0-9-]+\.pdf$/)
      .optional(),
    summary: z.string(),
    keyFindings: z.array(z.string()).min(1),
    sources: z.array(z.object({ label: z.string(), href: z.string().url() })).optional(),
    related: z.array(z.object({ href: z.string().regex(/^\//), label: z.string() })).optional(),
    faq: z.array(z.object({ question: z.string(), answer: z.string() })).optional(),
  }),
});

const press = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/press" }),
  schema: z.object({
    headline: z.string(),
    metaTitle: z.string(),
    description: z.string(),
    slug,
    datePublished: isoDate,
    dateModified: isoDate,
    dateline: z.string(),
    summary: z.string(),
    syndicatedTo: z
      .array(z.object({ outlet: z.string(), url: z.string().url(), date: isoDate }))
      .optional(),
  }),
});

export const collections = { reports, press };
