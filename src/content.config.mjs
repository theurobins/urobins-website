// The blog: one Markdown file per post in content/blog/. The file name is the URL (/blog/<file-name>/).
// Front matter:
//   title        the <title>, ends in "| Urobins", about 60 characters at most
//   heading      the H1
//   description  meta description, under about 160 characters
//   published    YYYY-MM-DD
//   category     one of CATEGORIES (the blog's filters and the cover colour)
//   takeaways    3-5 one-sentence answers shown first ("Key takeaways"): what AI answers quote
//   faqs         questions people ask, each { q, a } with a self-contained answer (FAQ section + FAQPage)
//   related      service slugs
//   featured     true on the one post shown large at the top of /blog/ (otherwise the newest)
// The "last updated" date is not written by hand: the build sets it when the post's text changes.
// Write for people first: one search intent per post, a direct answer under each question heading,
// facts you can stand behind, and no invented prices, statistics or results.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const CATEGORIES = ['Web development', 'Mobile apps', 'CRM & automation', 'SEO', 'Digital marketing', 'Cloud'];

const blog = defineCollection({
  loader: glob({ pattern: '*.md', base: './content/blog' }),
  schema: z.object({
    title: z.string(),
    heading: z.string(),
    description: z.string(),
    published: z.coerce.date(),
    category: z.enum(CATEGORIES),
    takeaways: z.array(z.string()).default([]),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    related: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
