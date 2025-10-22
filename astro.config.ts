import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

export default defineConfig({
  site: 'https://uitknowledge.org',

  integrations: [svelte()],

  server: {
    port: 3000,
  },
});
