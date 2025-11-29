import style from "./Search.module.css";
import { menuContent } from "../../data/SearchData/SearchContent";
import { useNavigate } from "react-router-dom";
import { DataContent } from "../../types/types";

export const Search = () => {
  const navigate = useNavigate();

  const handleItemClick = (item: DataContent) => {
    if (item.path) {
      navigate(item.path);
    }
  }; // временно, потом будет искать по айди - когда уберу патф?

  return (
    <div className="page-container">
      <main className={style.allContent}>
        {menuContent.map((item) => (
          <button
            key={item.id}
            className={style.contentButton}
            onClick={() => handleItemClick(item)}
          >
            <div className={style.buttonContent}>
              <strong className={style.buttonTitle}>{item.label}</strong>
              <span className={style.buttonText}>{item.text}</span>
            </div>
            <img className={style.buttonImg} src={item.icon} alt={item.id} />
          </button>
        ))}
      </main>
    </div>
  );
};
