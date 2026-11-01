// @ts-check
import { defineConfig } from "astro/config"

export default defineConfig({
  output: "static",
  // Dev server only: allow opening it by Tailscale hostname (m2-max-ji-dog, *.ts.net).
  vite: { server: { allowedHosts: ["m2-max-ji-dog", ".ts.net"] } },
})
