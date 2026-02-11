import { defineCollection, z } from "astro:content";

const skies = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      description: z.string(),
      image: image(),
      date: z.date().optional(),
      camera: z.string().optional(),
      location: z.string().optional(),
      gps: z
        .object({
          lat: z.number(),
          long: z.number(),
        })
        .optional(),
    }),
});

export const collections = { skies };
