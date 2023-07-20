import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://splt.dev',
  integrations: [mdx(), react()],
  markdown: {
    shikiConfig: {
      theme: 'nord',
    },
    remarkPlugins: ['remark-gfm', 'remark-smartypants'],
    rehypePlugins: [
      [
        'rehype-external-links',
        {
          target: '_blank',
          rel: ['noopener', 'noreferrer'],
        },
      ],
      'rehype-slug',
      [
        'rehype-autolink-headings',
        {
          behavior: 'wrap',
        },
      ],
    ],
  },
});
