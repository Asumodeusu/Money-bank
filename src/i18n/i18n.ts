import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './lang/en/translation.json';
import translationRU from './lang/ru/translation.json';

// Ресурсы переводов
const resources = {
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  }
};

i18n
  // Детектор языка (определяет язык браузера)
  .use(LanguageDetector)
  // Подключение к React
  .use(initReactI18next)
  // Инициализация
  .init({
    resources,
    // Язык по умолчанию, если не определился автоматически
    fallbackLng: 'ru',
    // Язык для отладки
    // debug: process.env.NODE_ENV === 'development',
    
    // Настройки детектора языка
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    
    // Настройки интерполяции
    interpolation: {
      escapeValue: false // React уже защищает
    }
  });

export default i18n;