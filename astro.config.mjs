import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

import {
  lazyImagesRehypePlugin,
  readingTimeRemarkPlugin,
  responsiveTablesRehypePlugin,
} from "./src/utils/frontmatter";

// https://astro.build/config
export default defineConfig({
  output: "static",
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
  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
    rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
