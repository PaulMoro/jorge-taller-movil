import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const equiposCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/equipos' }),
  schema: z.object({
    brand: z.string(),
    model: z.string(),
    name: z.string(),
    category: z.string(),
    imagePath: z.string(),
    badge: z.string().optional(),
    specs: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })),
    buttons: z.array(z.object({
      text: z.string(),
      icon: z.string().optional(),
      type: z.string(),
    })).optional(),
  })
});

export const collections = {
  equipos: equiposCollection,
};
