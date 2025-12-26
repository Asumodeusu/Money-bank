import style from "./Setting.module.css";
import { useHeaderPreset } from "../../hooks";
import { settingContent } from "../../data/SettingContent";
import { useItemNavigation } from "../../hooks/useItemNavigation";
import { useTranslation } from "react-i18next";
import { useLang } from "../../hooks/useLang";

const Setting = () => {
  const { t } = useTranslation();
  const { navigateToItem } = useItemNavigation();
  useHeaderPreset("settings");
  const { toggleLanguage } = useLang();

  // Обработчик для разных кнопок
  const handleButtonClick = (item: (typeof settingContent)[0]) => {
    if (item.id === "languages") {
      // Если это кнопка языка - переключаем язык
      toggleLanguage();
    } else if (item.path) {
      // Если есть path - навигация
      navigateToItem(item);
    }
  };

  return (
    <div className="page-container">
      <main className={style.settingContent}>
        <img src="/svg/profile.svg" alt="avatar" className={style.settingImg} />
        <strong className={style.imgName}>{t("setting.strong")}</strong>
        <section className={style.contentUP}>
          
          {settingContent.map((item) => (
            <button
              key={item.id}
              className={style.buttonContent}
              onClick={() => handleButtonClick(item)}
            >
              <strong className={style.buttonTitle}>{t(item.label)}</strong>
              <img src={item.icon} className={style.buttonImg} alt={item.id} />
            </button>
          ))}

          <div className={style.buttonRow}>
            <strong className={style.buttonTitle}>{t("setting.id")}</strong>
            <p className={style.buttonText}>{t("setting.p")}</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Setting;
