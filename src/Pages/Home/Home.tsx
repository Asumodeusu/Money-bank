import style from "./Home.module.css";
import { homeItems, homeBalance } from "../../data/HomeContent";
import { useEffect, useState } from "react";
import { useHomeNavigation } from "../../hooks/useHomeNavigation"; 
import { useTranslation } from "react-i18next";
import { useBalance } from "../../hooks/useBalance";
//TODO колокольчик коунтер сдлеать

export const Home = () => {
  const { handleItemClick } = useHomeNavigation();
  const [userName, setUserName] = useState("Гость"); // на случай ошибки
  const { t } = useTranslation();
  const { balances } = useBalance();

  useEffect(() => {
    // При загрузке страницы берем имя из localStorage
    const savedName = localStorage.getItem("userName");
    if (savedName) {
      setUserName(savedName);
    }
  }, []);

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
            {t("home.span")} {userName}!
          </span>
          <img
            className={style.headerMessage}
            src="/svg/Icon/colocol.svg"
            alt="колокольчик"
          />
        </header>

        <section className={style.contentCard}>
          <img className={style.card} src="/svg/card/Multi.svg" alt="карты" />

          <div className={style.cardInfo}>
            <span className={style.info}>{userName}</span>
            <span className={style.info}>**** **** **** 1772</span>
            <span className={style.info}>{balances.RUB.toLocaleString("ru-RU")} ₽</span>
          </div>
        </section>

        <section className={style.contentMenu}>
          <div className={style.menu}>
            {homeItems.map((item) => (
              <button
                key={item.id}
                className={style.menuItem}
                onClick={() => handleItemClick(item)}
              >
                <img src={item.icon} alt={item.label} />
                <span>{t(item.label)}</span>
              </button>
            ))}
          </div>

          {homeBalance.map((item) => (
            <div key={item.id} className={style.menuCurrency}>
              <span className={style.currencyItem}>{item.label}</span>
              <span className={style.currencyItem}>{balances[item.key].toFixed(2)}</span>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};
