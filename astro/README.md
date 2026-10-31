# chichi — Astro

The Astro rebuild of the Nuxt site in the repo root (which stays as is).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # astro check (TS strict) + static build → dist/
npm run lint
```

- `src/content/products/*.md` — products (the Nuxt `pages/index.vue` product). Set `buyUrl` to make the buy button a link.
- `src/content/pages/*.md` — markdown pages (the Nuxt `content/` folder), served at `/<file name>/`.
- Colours and type: `src/styles/global.css`.
