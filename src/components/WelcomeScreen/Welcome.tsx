import "./Welcome.css";
import { useNavigate } from 'react-router-dom';


export const Welcome = () => {
  const navigate = useNavigate();
  
  return (
    <div
      className="Welcome-page"
      onClick={() => navigate("/Sign")} // ← ТАП ПО ВСЕМУ ЭКРАНУ
    >
      <img className="page__logo" src="/svg/Logo.svg" alt="Logo" />
      <h1 className="page__title">MONEY BANK</h1>
    </div>
  );
};
