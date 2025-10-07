import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en from './localization/en.json';
import ru from './localization/ru.json';
import { Languages, SUPPORTED_LANGUAGES } from './shared/constants';

const resources = {
  en: { translation: en },
  ru: { translation: ru }
};

const fallbackLanguage = localStorage.getItem('i18nextLng') || Languages.ru;

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: fallbackLanguage,
    supportedLngs: SUPPORTED_LANGUAGES,
    detection: {
      // Порядок определения языка
      order: ['path', 'localStorage', 'navigator', 'subdomain'],
      // Извлечение языка из первого сегмента пути (/:lang)
      lookupFromPathIndex: 0
    },
    interpolation: {
      escapeValue: false // React самостоятельно экранирует значения
    }
  });

export default i18next;
