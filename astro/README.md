# chichi — Astro

Ceramic shop for the artist behind chichi. The Astro rebuild of the Nuxt site in the repo root (which stays as is).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # astro check (TS strict) + static build → dist/
npm run lint
```

## Adding content

Until content lands the home shows "Les premières pièces arrivent bientôt." and `/infos/` is not built
(the build logs that both collections are empty — expected).

### A piece — `src/content/products/<piece>/index.md`

Photos go in the same folder (JPG/PNG/WebP, pure-white background, 4:5 works best). Astro resizes them.

```md
---
title: Bol à thé céladon
price: 65
photos: ["./face.jpg", "./profil.jpg"]   # first one is the cover
photoAlt: Bol à thé vert pâle sur fond blanc
status: available                         # available | reserved | sold
clay: Grès
glaze: Céladon
dimensions: 11 × 7 cm
care: Lave-vaisselle
buyUrl: https://…                         # checkout link; without it the button stays disabled
accent: yellow                            # blue | coral | pink | yellow
order: 1                                  # lower first in the grid
---

Description of the piece (markdown).
```

`title`, `price`, `photos`, `photoAlt` are required; the rest is optional.

### The artist — `src/content/artist/<name>.md` (one file)

```md
---
name: …
tagline: …                 # optional
location: …                # optional
portrait: ./portrait.jpg   # optional, next to the file
portraitAlt: …
instagram: https://instagram.com/…
email: …
---

Bio / démarche (markdown).
```

Colours and type: `src/styles/global.css`. Screenshots: `docs/screenshots/` (`gabarit-*` = layout preview
with dummy data, not published).
