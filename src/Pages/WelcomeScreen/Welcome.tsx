import style from "./Welcome.module.css";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

export const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div
        className={style.welcomePage}
        onClick={() => navigate(ROUTES.SIGN)} // ТАП ПО ВСЕМУ ЭКРАНУ
      >
        <img className={style.pageLogo} src="/svg/Logo.svg" alt="Logo" />
        <h1 className={style.pageTitle}>MONEY BANK</h1>
      </div>
    </div>
  );
};
