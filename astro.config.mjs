import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";
import sitemap from '@astrojs/sitemap';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sitemap(),
    icon({
      include: {
        tabler: ["*"],
        "flat-color-icons": [
          "template",
          "gallery",
          "approval",
          "document",
          "advertising",
          "currency-exchange",
          "voice-presentation",
          "business-contact",
          "database",
        ],
      },
    }),
    mdx(),
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
