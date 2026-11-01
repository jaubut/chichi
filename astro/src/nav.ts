import { getCollection, type CollectionEntry } from "astro:content"

export interface NavLink { href: string; label: string }

export const statusLabel: Record<CollectionEntry<"products">["data"]["status"], string> = {
  available: "Disponible",
  reserved: "Réservée",
  sold: "Vendue",
}

const whole = new Intl.NumberFormat("fr-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 })
const cents = new Intl.NumberFormat("fr-CA", { style: "currency", currency: "CAD", minimumFractionDigits: 2 })

/** 45 → "45 $", 45.5 → "45,50 $" (fr-CA, non-breaking space). */
export function formatPrice(price: number): string {
  return (Number.isInteger(price) ? whole : cents).format(price)
}

/** The pieces in boutique order. */
export async function getProducts(): Promise<CollectionEntry<"products">[]> {
  const products = await getCollection("products")
  return products.sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title, "fr"))
}

export async function getArtist(): Promise<CollectionEntry<"artist"> | undefined> {
  const [artist] = await getCollection("artist")
  return artist
}

/** Header and footer links, from the collections so they never drift. */
export async function getNavLinks(): Promise<{ links: NavLink[]; count: number }> {
  const [products, artist] = await Promise.all([getCollection("products"), getArtist()])
  return {
    links: [
      { href: "/#collection", label: "Boutique" },
      ...(artist ? [{ href: "/infos/", label: "Infos" }] : []),
    ],
    count: products.length,
  }
}
