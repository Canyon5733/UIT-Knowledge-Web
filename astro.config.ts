import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://uitknowledge.org',

  integrations: [icon(), svelte()],

  vite: {
    plugins: [tailwindcss()],
  },

  server: {
    port: 3000,
  },
});
