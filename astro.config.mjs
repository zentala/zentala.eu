import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://zentala.eu',
  integrations: [
    tailwind(),
    mdx(),
    icon(),
    sitemap({
      filter: (page) => {
        const url = new URL(page);
        const path = url.pathname;
        return (
          !path.startsWith('/ui') &&
          !path.startsWith('/home-classic') &&
          !path.startsWith('/docs/book/') &&
          !path.startsWith('/docs/why') &&
          !path.startsWith('/docs/for-you') &&
          !path.includes('/drafts/')
        );
      },
    }),
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  vite: {
    server: {
      watch: {
        usePolling: true
      },
      hmr: {
        overlay: false
      }
    }
  }
});
