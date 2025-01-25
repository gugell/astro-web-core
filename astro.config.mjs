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

import cookieconsent from "@jop-software/astro-cookieconsent";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [
    tailwind(),
    sitemap(),
    icon({
      include: {
        tabler: ["*"],
        devicon: ["*"],
        lucide: ["*"],
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
    cookieconsent({
      guiOptions: {
        consentModal: {
          layout: "box",
          position: "bottom right",
          equalWeightButtons: true,
          flipButtons: false,
        },
        preferencesModal: {
          layout: "box",
          position: "right",
          equalWeightButtons: true,
          flipButtons: false,
        },
      },
      categories: {
        necessary: {
          readOnly: true,
        },
        functionality: {},
        analytics: {},
        marketing: {},
      },
      language: {
        default: "en",
        autoDetect: "document",
        translations: {
          en: {
            consentModal: {
              title: "We use cookies!",
              description:
                "This website uses cookies to ensure you get the best experience.",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              settingsBtn: "Customize",
              footer:
                '<a href="/privacy">Privacy Policy</a>\n<a href="/terms">Terms and conditions</a>',
            },
            preferencesModal: {
              title: "Cookie Preferences",
              acceptNecessaryBtn: "Accept necessary",
              savePreferencesBtn: "Save preferences",
            },
          },
          de: {
            consentModal: {
              title: "Wir verwenden Cookies!",
              description:
                "Diese Website verwendet Cookies, um Ihnen das beste Erlebnis zu bieten.",
              acceptAllBtn: "Alle akzeptieren",
              acceptNecessaryBtn: "Alle ablehnen",
              settingsBtn: "Anpassen",
              footer:
                '<a href="/privacy">Datenschutz</a>\n<a href="/terms">Nutzungsbedingungen</a>',
            },
            preferencesModal: {
              title: "Cookie-Einstellungen",
              acceptNecessaryBtn: "Nur notwendige akzeptieren",
              savePreferencesBtn: "Einstellungen speichern",
            },
          },
        },
      },
    }),
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
