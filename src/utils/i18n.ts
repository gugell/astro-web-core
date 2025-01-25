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
    "home.about": "Who we are about?",
    "nav.about": "About",
    "nav.faq": "FAQs",
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
    "blog.subtitle":
      "Curated articles, tutorials, resources, and insights from the community, all dedicated to mobile development and its latest trends.",
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
    "getInvolved.title": "Get Involved",
    "getInvolved.subtitle":
      "Whether you're looking to attend an event, share your expertise, or support the community, we’d love to have you involved.",
    "getInvolved.contact": "For more information, contact us at ",
    shareAction: "Share",
    "blog.subtitle":
      "Curated articles, tutorials, resources, and insights from the community, all dedicated to mobile development and its latest trends.",
  },
  de: {
    "nav.home": "Startseite",
    "nav.blog": "Blog",
    "nav.cfp": "Call for Papers",
    "nav.events": "Events",
    rsvp: "Teilnehmen",
    "home.about": "Wer sind wir?",
    "nav.about": "Über uns",
    "nav.faq": "FAQs",
    "nav.privacy": "Datenschutz",
    "nav.team": "Team",
    "nav.terms": "Nutzungsbedingungen",
    "team.title": "Unser Team",
    "team.subtitle":
      "Diese Menschen arbeiten für dich, um MobileHeads besser zu machen.",
    "sponsors.title": "Unsere Sponsoren",
    "sponsors.subtitle":
      "Diese Unternehmen unterstützen uns in unserer Mission.",
    "home.title": "Willkommen bei MobileHeads Austria",
    "community.welcome": "Willkommen bei ",
    "community.title": "MobileHeads Austria",
    "home.subtitle":
      "Eine Entwickler-Community in Österreich, die sich für Mobile Development begeistert und ihr Wissen teilen möchte. Wir veranstalten monatliche Meetups, um uns zu vernetzen, zu lernen und gemeinsam zu wachsen. Hast du etwas zu teilen oder möchtest gleichgesinnte Menschen treffen?",
    "technologies.title": "Technologien",
    "technologies.subtitle":
      "Wir orientieren uns an den folgenden Technologien:",
    "home.nextMeetup": "Nächstes Meetup",
    "blog.title": "Blog",
    "blog.subtitle":
      "Kuratierte Artikel, Tutorials, Ressourcen und Einblicke aus der Community – alles rund um Mobile Development und die neuesten Trends.",
    "cfp.title": "Call for Papers",
    "upcomingEvents.title": "Bevorstehende Veranstaltungen",
    "upcomingEvents.subtitle": "Sei bei den folgenden Events dabei:",
    "faq.titleShort": "FAQs",
    "faq.title": "Häufig gestellte Fragen",
    "faq.description":
      "Stöbere durch die folgenden Fragen, um mehr über die spannenden Möglichkeiten von MobileHeads zu erfahren und wie es deine Mobile-Engineering-Reise bereichern kann.",
    "cfp.cta": "Reiche deinen Vortrag ein",
    "about.title": "Über MobileHeads Austria",
    "about.ctaMeetup": "Tritt uns auf Meetup bei",
    "404.cta": "Zurück zur Startseite",
    "404.title": "Entschuldigung, diese Seite konnten wir nicht finden.",
    "404.subtitle":
      "Aber keine Sorge, auf unserer Startseite findest du viele andere Inhalte.",
    "about.communityTitle": "Unsere Community",
    "about.intro":
      "Willkommen bei Mobileheads Austria – dem ultimativen Treffpunkt für Mobile-Development-Enthusiasten, Entwickler und Innovatoren! 🚀",
    "getInvolved.title": "Engagiere dich",
    "getInvolved.subtitle":
      "Ob du an einer Veranstaltung teilnehmen, dein Wissen teilen oder die Community unterstützen möchtest – wir freuen uns über dein Engagement.",
    "getInvolved.contact": "Für weitere Informationen kontaktiere uns unter ",
    shareAction: "Teilen",
    "blog.subtitle":
      "Kuratierte Artikel, Tutorials, Ressourcen und Einblicke aus der Community – alles rund um Mobile Development und die neuesten Trends.",
  },
};
