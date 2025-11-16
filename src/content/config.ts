import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    coverImage: z.string().optional(), // path in /uploads
    blurb: z.string().optional(),
  }),
});

export const collections = {
  posts,
};

import { z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    draft: z.boolean().default(false),  // 👈 this line
    tags: z.array(z.string()).default([]),
    blurb: z.string().optional(),
    coverImage: z.string().optional(),
  }),
});

export const collections = { posts };