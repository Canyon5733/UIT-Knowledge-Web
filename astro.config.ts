import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://uitknowledge.org',

  integrations: [svelte()],

  vite: {
    plugins: [tailwindcss()],
  },

  server: {
    port: 3000,
  },
});
