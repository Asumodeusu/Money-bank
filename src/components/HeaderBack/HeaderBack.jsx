import "./HeaderBack.css";
import { useNavigate, useLocation } from "react-router-dom";
import { backs } from "../../data/HeaderBack";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    navigate(-1);
  };

  const currentPath = location.pathname; // '/search', '/message', etc
  const currentPage = currentPath.slice(1); // убираем '/'
  const currentItem = backs.find((item) => item.id === currentPage);

  return (
    <>
      <header className="all__header">
        <button className="header__back-button" onClick={handleBack}>
          <img
            className="header__back-home"
            src="/svg/Icon/39.svg"
            alt="назад"
          />
          {currentItem && (
            <span className="header__back-text">{currentItem.label}</span>
          )}
        </button>
      </header>
    </>
  );
};
