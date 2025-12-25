import { tabs } from "../../../data/footerTab";
import style from "./FooterTab.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  // Определяем активную вкладку по текущему пути
  const activeTab =
    tabs.find((tab) => tab.path === location.pathname)?.id || "";

  const handleTabChange = (tabId: string) => {
    const tab = tabs.find((t) => t.id === tabId);
    // Если у вкладки есть путь - выполняем навигацию
    if (tab?.path) {
      navigate(tab.path);
    }
  };

  return (
    <footer className={style.footer}>
      <nav className={style.footerNav}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${style.navButton} ${
              activeTab === tab.id ? style.navButtonActive : ""
            }`}
            onClick={() => handleTabChange(tab.id)}
          >
            <img src={tab.icon} alt={tab.label} />
            <span className={style.navButtonLabel}>{t(tab.label)}</span>
          </button>
        ))}
      </nav>
    </footer>
  );
};
