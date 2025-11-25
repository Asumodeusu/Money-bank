import style from "./HeaderBack.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { backs } from "../../../data/HeaderBack";
import { useAppSelector } from "../../../store/hooks";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Получаем состояние хедера из Redux store
  // useAppSelector - это наш типизированный хук useSelector
  const headerState = useAppSelector((state) => state.header);

  const handleBack = () => {
    navigate(-1);
  };

  const currentItem = backs.find((item) => item.path === location.pathname);

  // Создаем классы: базовый + пресет из Redux
  const headerClass = `${style.allHeader} ${style[headerState.config.preset]}`;

  return (
    <>
      <header className={headerClass}>
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
