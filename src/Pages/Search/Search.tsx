import style from "./Search.module.css";
import { menuContent } from "../../data/SearchContent";
import { useItemNavigation } from "../../hooks/useItemNavigation";

const Search = () => {
  const { navigateToItem } = useItemNavigation();

  return (
    <div className="page-container">
      <main className={style.allContent}>
        {menuContent.map((item) => (
          <button
            key={item.id}
            className={style.contentButton}
            onClick={() => navigateToItem(item)}
          >
            <div className={style.buttonContent}>
              <strong className={style.buttonTitle}>{item.label}</strong>
              <span className={style.buttonText}>{item.text}</span>
            </div>
            <img
              className={style.buttonImg}
              src={item.icon}
              alt={item.id}
              loading="lazy"
            />
          </button>
        ))}
      </main>
    </div>
  );
};

export default Search;
