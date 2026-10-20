// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { isNoindex } from './src/data/reviews.ts';
import { machineLayer } from './scripts/machine-layer.ts';

// https://astro.build/config
export default defineConfig({
  site: "https://portugalhqacitizenship.com",
  output: "static",
  trailingSlash: "never",
  build: {
    format: "directory",
    inlineStylesheets: "never",
  },
  image: {
    layout: "constrained",
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: false,
    },
  },
  integrations: [
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname.replace(/\/$/, "") || "/";
        return !isNoindex(path);
      },
    }),
    machineLayer(),
  ],
});