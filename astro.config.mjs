// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  // GitHub Pages project-site base path (repo name) — trailing slash required
  site: 'https://rizkiwijanarko.github.io',
  base: '/Portofolio-web/',
});
