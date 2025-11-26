import { tabs } from "../../../data/footerTab";
import "./FooterTab.css";
import { useNavigate, useLocation } from "react-router-dom";

export const Footer = () => {
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
    <footer className="footer">
      <nav className="footer-nav">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`nav-button ${
              activeTab === tab.id ? "nav-button--active" : ""
            }`}
            onClick={() => handleTabChange(tab.id)}
          >
            <img src={tab.icon} alt={tab.label} />
            <span className="nav-button__label">{tab.label}</span>
          </button>
        ))}
      </nav>
    </footer>
  );
};
