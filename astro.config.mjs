// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://cahayashaktisejahtera.com',
  output: 'static',
  trailingSlash: 'never',

  // Bahasa Indonesia di root (/udangbalapid), Inggris di /en/ (/en/udangbalapid).
  // URL yang diminta klien tetap persis seperti yang dia sebutkan.
  i18n: {
    locales: ['id', 'en'],
    defaultLocale: 'id',
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },

  integrations: [sitemap({ i18n: { defaultLocale: 'id', locales: { id: 'id-ID', en: 'en-US' } } })],

  vite: {
    plugins: [tailwindcss()],
  },
});
