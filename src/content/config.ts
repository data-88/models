import { defineCollection, z } from "astro:content";

// Post collection schema
const postsCollection = defineCollection({
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    authors: z.array(z.string()).default(["admin"]),
    categories: z.array(z.string()).default(["others"]),
    tags: z.array(z.string()).default(["others"]),
    draft: z.boolean().optional(),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    meta_title: z.string().optional(),
    image: z.string().optional(),
    layout: z.string().optional(),
  }),
});

// Models collection schema
const modelsCollection = defineCollection({
  schema: z.object({
    id: z.string().optional(),
    name: z.string(),
    meta_title: z.string().optional(),
    image: z.string().optional(),
    categories: z.array(z.string()).default(["woman"]),
    tags: z.array(z.string()).default(["Cape Town"])
  }),
});

// Export collections
export const collections = {
  // posts: postsCollection,
  pages: pagesCollection,
  models: modelsCollection,
};

