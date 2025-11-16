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