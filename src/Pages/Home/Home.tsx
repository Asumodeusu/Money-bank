import style from "./Home.module.css";
import { homeItems, homeBalance } from "../../data/HomeContent";
import { useEffect, useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import { useItemNavigation } from "../../hooks/useItemNavigation";
//TODO колокольчик коунтер сдлеать

export const Home = () => {
  const { navigateToItem } = useItemNavigation();
  const [userName, setUserName] = useState("Гость");
  const { switchTheme } = useTheme();

  useEffect(() => {
    // При загрузке страницы берем имя из localStorage
    const savedName = localStorage.getItem("userName");
    if (savedName) {
      setUserName(savedName);
    }
  }, []); // временное решение, потом через бэк будет

  return (
    <div className="page-container">
      <div className={style.pageHome}>
        <header className={style.header}>
          <img
            className={style.headerAvatar}
            src="/svg/profile.svg"
            alt="аватар"
          />
          <span className={style.headerTitle}>
            Добро пожаловать, {userName}!
          </span>
          <img
            className={style.headerMessage}
            src="/svg/Icon/colocol.svg"
            alt="колокольчик"
          />
        </header>

        <section className={style.contentCard}>
          <img className={style.card} src="/svg/card/blue.svg" alt="карты" />

          <div className={style.cardInfo}>
            <span className={style.info}>{userName}</span>
            <span className={style.info}>**** **** **** 1772</span>
            <span className={style.info}>3 000 000 000 rub</span>
          </div>
        </section>

        <section className={style.contentMenu}>
          <div className={style.menu}>
            {homeItems.map((item) => (
              <button
                key={item.id}
                className={style.menuItem}
                onClick={() => {
                  if (item.type === "theme") {
                    switchTheme(); // тема
                  } else {
                    navigateToItem(item); // навигация
                  }
                }}
              >
                <img src={item.icon} alt={item.label} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {homeBalance.map((item) => (
            <div key={item.id} className={style.menuCurrency}>
              <span className={style.currencyItem}>{item.label}</span>
              <span className={style.currencyItem}>{item.count}</span>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};
