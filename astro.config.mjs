// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],

  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'es', 
    routing: {
      prefixDefaultLocale: false
    },
    fallback: {
      en: 'es'
    }
  },
  adapter: vercel(),
});