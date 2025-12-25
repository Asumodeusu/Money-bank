import style from "./Search.module.css";
import { menuContent } from "../../data/SearchContent";
import { useItemNavigation } from "../../hooks/useItemNavigation";
import { useTranslation } from "react-i18next";

const Search = () => {
  const { t } = useTranslation();
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
              <strong className={style.buttonTitle}>{t(item.label)}</strong>
              <span className={style.buttonText}>{t(item.text || "")}</span>
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
