import { tabs } from "../../data/footerTab";
import { useState } from 'react';
import  "./FooterTab.css";
import { useNavigate, useLocation } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname; // '/search', '/home', etc
  const activeTab = currentPath.slice(1) || 'home'; // убираем '/' и если пусто - home!!!!! - не стоит вначале

  const handleTabChange = (tabId: string) => {
    navigate(`/${tabId}`);
  };

  return (
    <footer className="footer">
    <nav className="footer-nav">
      {tabs.map(tab => (
        <button 
          key={tab.id}
          className={`nav-button ${activeTab === tab.id ? 'nav-button--active' : ''}`}
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
