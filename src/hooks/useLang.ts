import { useTranslation } from "react-i18next";

export const useLang = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "ru" ? "en" : "ru";
    i18n.changeLanguage(newLang);
    // 2. Сохраняем язык в localStorage
    localStorage.setItem("preferred-language", newLang);

    // 3. Перезагружаем страницу через 100мс (чтобы i18n успел сохранить)
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  return {
    currentLanguage: i18n.language,
    toggleLanguage,
    changeLanguage: i18n.changeLanguage,
  };
};
