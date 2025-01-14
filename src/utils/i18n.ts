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
    "nav.events": "Events",
    rsvp: "RSVP",
    "nav.about": "About",
    "nav.privacy": "Privacy",
    "nav.team": "Team",
    "nav.terms": "Terms of use",
    "team.title": "Our Team",
    "team.subtitle": "These people work for you to make MobileHeads better.",
    "sponsors.title": "Our Sponsors",
    "sponsors.subtitle": "These companies support us in our mission.",
    "home.title": "Welcome to MobileHeads Austria",
    "community.welcome": "Welcome to ",
    "community.title": "MobileHeads Austria",
    "home.subtitle":
      "A developer community in Austria passionate about mobile development and eager to share knowledge. We conduct monthly meetup events to connect, learn, and grow together. Do you have what to share or want to meet same minded people?",
    "technologies.title": "Technologies",
    "technologies.subtitle":
      "We are oriented around the following technologies:",
    "home.nextMeetup": "Next Meetup",
    "blog.title": "Blog",
    "cfp.title": "Call for Papers",
    "upcomingEvents.title": "Upcoming Events",
    "upcomingEvents.subtitle": "Join us at the following events:",
    "faq.titleShort": "FAQs",
    "faq.title": "Frequently Asked Questions",
    "faq.description":
      "Dive into the following questions to learn more about the exciting opportunities MobileHeads offers and how it can enhance your mobile engineering journey.",
    "cfp.cta": "Submit your talk",
    "about.title": "About MobileHeads Austria",
    "about.ctaMeetup": "Join us on Meetup",
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
    "nav.events": "Events",
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
    "technologies.title": "Technologies",
    "technologies.subtitle":
      "We are oriented around the following technologies:",
    "faq.titleShort": "FAQs",
    "faq.title": "Häufig gestellte Fragen",
    "faq.description":
      "Tauche in die folgenden Fragen ein, um mehr über die spannenden Möglichkeiten zu erfahren, die MobileHeads bietet, und wie es deine Mobile-Engineering-Reise bereichern kann.",
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
