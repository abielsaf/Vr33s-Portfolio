import { translations } from './translations';

export type Language = keyof typeof translations;

export function getLang(currentLocale: string | undefined): Language {
  return currentLocale === 'en' ? 'en' : 'es';
}

export function getTranslations(currentLocale: string | undefined) {
  return translations[getLang(currentLocale)];
}
