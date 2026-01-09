import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.promstack.com',
  integrations: [mdx(), sitemap()],
  server: {
    host: true,
    port: 3004,
    allowedHosts: ['blog.promstack.com'],
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['blog.promstack.com'],
    },
    preview: {
      allowedHosts: ['blog.promstack.com'],
    },
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
