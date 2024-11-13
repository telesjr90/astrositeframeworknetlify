import { defineConfig } from 'astro';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

export default defineConfig({
    integrations: [tailwind()],
    output: 'server',
    adapter: netlify(),
}); 