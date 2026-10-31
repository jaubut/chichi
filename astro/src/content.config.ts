import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"

// The Nuxt site's one product (pages/index.vue), now a markdown entry.
const products = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
  schema: z.object({
    title: z.string(),
    price: z.number(),
    cta: z.string(),
    image: z.url(),
    imageAlt: z.string(),
    // The Nuxt button had an empty href: set the checkout link here.
    buyUrl: z.url().optional(),
    accent: z.enum(["blue", "coral", "pink", "yellow"]).default("yellow"),
  }),
})

// @nuxt/content pages (content/*.md).
const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.string().default("fr"),
  }),
})

export const collections = { products, pages }
