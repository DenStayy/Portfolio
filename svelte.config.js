import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      fallback: 'index.html', // Utilise index.html comme fallback
    }),
    paths: {
      base: '', // Laissez vide si vous n'avez pas de sous-dossier
    },
  },
};

export default config;
