import "./Search.css";
import { menuContent } from "../../../data/SearchData/SearchContent";
import { useNavigate } from "react-router-dom";
import { DataContent } from "../../../types/types";

export const Search = () => {
  const navigate = useNavigate();

  const handleItemClick = (item: DataContent) => {
    if (item.path) {
      navigate(item.path);
    }
  }; // временно, потом будет искать по айди - когда уберу патф?

  return (
    <div className="page-container">
      <main className="all__content">
        {menuContent.map((item) => (
          <button
            key={item.id}
            className="content__button"
            onClick={() => handleItemClick(item)}
          >
            <div className="button__content">
              <strong className="button__title">{item.label}</strong>
              <span className="button__text">{item.text}</span>
            </div>
            <img className="button__img" src={item.icon} alt={item.id} />
          </button>
        ))}
      </main>
    </div>
  );
};
