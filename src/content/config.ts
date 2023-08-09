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

// Women collection schema
const womenCollection = defineCollection({
  schema: z.object({
    id: z.string().optional(),
    name: z.string(),
    meta_title: z.string().optional(),
    image: z.string().optional(),
    categories: z.array(z.string()),
    tags: z.array(z.string())
  }),
});

// Men collection schema
const menCollection = defineCollection({
  schema: z.object({
    id: z.string().optional(),
    name: z.string(),
    meta_title: z.string().optional(),
    image: z.string().optional(),
    categories: z.array(z.string()),
    tags: z.array(z.string())
  }),
});

// Kids collection schema
const kidsCollection = defineCollection({
  schema: z.object({
    id: z.string().optional(),
    name: z.string(),
    meta_title: z.string().optional(),
    image: z.string().optional(),
    categories: z.array(z.string()),
    tags: z.array(z.string())
  }),
});

// Nonbinaries collection schema
const nonbinariesCollection = defineCollection({
  schema: z.object({
    id: z.string().optional(),
    name: z.string(),
    meta_title: z.string().optional(),
    image: z.string().optional(),
    categories: z.array(z.string()),
    tags: z.array(z.string())
  }),
});

// Post collection schema
const modelsCollection = defineCollection({
  schema: z.object({
    id: z.string().optional(),
    name: z.string(),
  }),
});

// Export collections
export const collections = {
  // posts: postsCollection,
  pages: pagesCollection,
  women: womenCollection,
  men: menCollection,
  models: modelsCollection,
  nonbinaries: nonbinariesCollection,
  kids: kidsCollection,
};

