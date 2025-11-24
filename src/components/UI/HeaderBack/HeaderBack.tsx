import style from "./HeaderBack.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { backs } from "../../../data/HeaderBack";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    navigate(-1);
  };

  const currentItem = backs.find((item) => item.path === location.pathname);

  return (
    <>
      <header className={style.allHeader}>
        <button className={style.headerBackButton} onClick={handleBack}>
          <img
            className={style.headerBackHome}
            src="/svg/Icon/39.svg"
            alt="назад"
          />
          {currentItem && (
            <span className={style.headerBackText}>{currentItem.label}</span>
          )}
        </button>
      </header>
    </>
  );
};
