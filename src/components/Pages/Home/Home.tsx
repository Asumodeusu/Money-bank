import "./Home.css";
import { homeItems } from "../../../data/HomeData/HomeContent";

//TODO колокольчик коунтер сдлеать

export const Home = () => {
  return (
    <div className="page-container">
      <div className="page__home">
        <header className="header">
          <img className="header__avatar" src="/svg/Avatar.svg" alt="аватар" />
          <span className="header__title">Hi, Push Puttichai</span>
          <img
            className="header__message"
            src="/svg/Icon/colocol.svg"
            alt="колокольчик"
          />
        </header>

        <section className="content__card">
          <img className="card" src="/svg/Multi.svg" alt="карты" />
        </section>

        <section className="content__menu">
          <div className="menu">
            {homeItems.map((item) => (
              <button
                key={item.id}
                className="menu-item"
                onClick={() => console.log("Clicked:", item.id)}
              >
                <img src={item.icon} alt={item.label} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
