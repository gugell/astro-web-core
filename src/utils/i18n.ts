import fs from "fs";
import yaml from "js-yaml";
import merge from "lodash.merge";

export interface I18NConfig {
  language: string;
  textDirection: string;
  dateFormatter?: Intl.DateTimeFormat;
}

export interface Language {
  code: string;
  label: string;
  flag: string;
}

export const languages: Language[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
];

export const defaultLang = "en";

const config = yaml.load(fs.readFileSync("src/config/i18n.yaml", "utf8")) as {
  i18n?: I18NConfig;
};

const getI18N = () => {
  const _default = {
    language: "en",
    textDirection: "ltr",
  };

  const value = merge({}, _default, config?.i18n ?? {});

  return Object.assign(value, {
    dateFormatter: new Intl.DateTimeFormat(value.language, {
      year: "numeric",
      month: "short",
      day: "numeric",
      timeZone: "UTC",
    }),
  }) as I18NConfig;
};

export const i18n = getI18N();

export const tr = {
  en: {
    "nav.home": "Home",
    "nav.blog": "Blog",
    "nav.cfp": "Call for Papers",
    "nav.about": "About",
    "nav.privacy": "Privacy",
    "nav.team": "Team",
    "nav.terms": "Terms of use",
    "team.title": "Our Team",
    "home.title": "Welcome to MobileHeads Austria",
    "home.subtitle": "A community for mobile developers in Austria",
    "home.nextMeetup": "Next Meetup",
    "blog.title": "Blog",
    "cfp.title": "Call for Papers",
    "cfp.cta": "Submit your talk",
    "about.title": "About MobileHeads Austria",
    "about.ctaMeetup": "Join us on Meetup.com",
    "404.cta": "Back to homepage",
    "404.title": "Sorry, we couldn't find this page.",
    "404.subtitle":
      "But dont worry, you can find plenty of other things on our homepage.",
    "about.communityTitle": "Our Community",
    "about.intro":
      "Welcome to Mobileheads Austria – the ultimate hub for mobile development enthusiasts, developers, and innovators! 🚀",
  },
  de: {
    "nav.home": "Start",
    "nav.blog": "Blog",
    "nav.cfp": "Call for Papers",
    "nav.team": "Team DE",
    "nav.privacy": "Privacy",
    "nav.terms": "Terms of use",
    "nav.about": "Über uns",
    "team.title": "Our Team DE",
    "home.title": "Willkommen bei MobileHeads Austria",
    "home.subtitle": "Eine Community für Mobile-Entwickler in Österreich",
    "home.nextMeetup": "Nächstes Meetup",
    "blog.title": "Blog",
    "cfp.title": "Call for Papers de",
    "cfp.cta": "Submit your talk DE",
    "about.title": "Über MobileHeads Austria",
    "about.ctaMeetup": "Join us on Meetup.com DE",
    "404.cta": "Back to homepage DE",
    "404.title": "Sorry, we couldn't find this page. DE",
    "404.subtitle":
      "But dont worry, you can find plenty of other things on our homepage. DE",

    "about.communityTitle": "Our Community DE",
    "about.intro":
      "Welcome to Mobileheads Austria – the ultimate hub for mobile development enthusiasts, developers, and innovators! 🚀 DE",
  },
};
