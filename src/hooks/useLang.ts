import { useTranslation } from "react-i18next";

export const useLang = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "ru" ? "en" : "ru";
    i18n.changeLanguage(newLang);
  };

  return {
    currentLanguage: i18n.language,
    toggleLanguage,
    changeLanguage: i18n.changeLanguage,
  };
};
