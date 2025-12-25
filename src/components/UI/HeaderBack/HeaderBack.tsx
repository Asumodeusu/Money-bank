import style from "./HeaderBack.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { backs } from "../../../data/HeaderBack";
import { useAppSelector } from "../../../store/hooks";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  // Получаем состояние хедера из Redux store
  // useAppSelector - типизированный хук useSelector
  const headerState = useAppSelector((state) => state.header);

  const handleBack = () => {
    navigate(-1);
  };

  // для обертки спана с разными названиями - определяет текст с помощью перехода по определнным сылкам
  const currentItem = backs.find((item) => item.path === location.pathname);

  //  Комбинируем базовый класс с пресетом из Redux
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
            <span className={style.headerBackText}>{t(currentItem.label)}</span>
          )}
        </button>
      </header>
    </>
  );
};
