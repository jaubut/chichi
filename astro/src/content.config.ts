import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"

// One markdown file per ceramic piece, photos next to it (src/content/products/<piece>/).
// The body is the piece's description.
const products = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    price: z.number().positive(),
    photos: z.array(image()).min(1),
    photoAlt: z.string(),
    status: z.enum(["available", "reserved", "sold"]).default("available"),
    clay: z.string().optional(),
    glaze: z.string().optional(),
    dimensions: z.string().optional(),
    care: z.string().optional(),
    // Checkout link (Shopify, Stripe, Etsy…). Without it the buy button stays disabled.
    buyUrl: z.httpUrl().optional(),
    accent: z.enum(["blue", "coral", "pink", "yellow"]).default("yellow"),
    // Lower first in the boutique grid.
    order: z.number().default(0),
  }),
})

// The artist, for the Infos page: a single src/content/artist/<name>.md, the body is the bio.
const artist = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/artist" }),
  schema: ({ image }) => z.object({
    name: z.string(),
    tagline: z.string().optional(),
    location: z.string().optional(),
    portrait: image().optional(),
    portraitAlt: z.string().optional(),
    instagram: z.httpUrl().optional(),
    email: z.email().optional(),
  }),
})

export const collections = { products, artist }
