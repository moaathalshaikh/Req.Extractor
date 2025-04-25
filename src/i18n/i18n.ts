
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(
    resourcesToBackend((language, namespace) => {
      return import(`./locales/${language}/${namespace}.json`);
    })
  )
  .init({
    debug: false,
    fallbackLng: 'en',
    supportedLngs: ['en', 'pt', 'ar'],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
