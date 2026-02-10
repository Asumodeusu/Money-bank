import style from "./Welcome.module.css";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

export const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className={style.welcomePage}>
        <img className={style.pageLogo} src="/svg/Logo.svg" alt="Logo" />
        <h1 className={style.pageTitle}>MONEY BANK</h1>
        <button
          className={style.planetButton}
          onClick={() => navigate(ROUTES.SIGN)}
        >
          Hello world
        </button>
      </div>
    </div>
  );
};
