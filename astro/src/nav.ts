import { getCollection } from "astro:content"

export interface NavLink { href: string; label: string }

/** Header and footer links, from the collections so they never drift. */
export async function getNavLinks(): Promise<{ links: NavLink[]; productHref: string; price: number | null }> {
  const [product] = await getCollection("products")
  const [info] = await getCollection("pages")
  const productHref = product ? `/produits/${product.id}/` : "/#collection"
  return {
    links: [
      { href: "/#collection", label: "Boutique" },
      { href: productHref, label: "Produit" },
      ...(info ? [{ href: `/${info.id}/`, label: "Infos" }] : []),
    ],
    productHref,
    price: product ? product.data.price : null,
  }
}
