import { defaultLang, languages, type Language } from "./i18n";

export function getCurrentLang(pathname: string, languages: Language[], defaultLang: string): string {
  const pathSegments = pathname.split('/').filter(Boolean);
  const firstSegment = pathSegments[0];
  const languageCodes = languages.map((l) => l.code);

  return languageCodes.includes(firstSegment) ? firstSegment : defaultLang;
}

export function getPathWithoutLang(pathname: string): string {
  const pathSegments = pathname.split('/').filter(Boolean);
  const firstSegment = pathSegments[0];
  const languageCodes = languages.map((l) => l.code);
  return languageCodes.includes(firstSegment) ? pathSegments.slice(1).join('/') : pathSegments.join('/');
}

export function createLocalizedPath(lang: string, path: string): string {
  if (lang === defaultLang) {
    return `/${path}`;
  }
  return `/${lang}${path ? `/${path}` : ''}`;
}