import "./Home.css";
import { homeItems } from "../../data/HomeData/menuContent";
import { Footer } from "../FooterTab/FooterTab";

//TODO колокольчик коунтер сдлеать

export const Home = () => {
  return (
    <div className="page__home">
      <header className="header">
        <img className="header__avatar" src="/svg/Avatar.svg" alt="аватар" />
        <span className="header__title">Hi, Push Puttichai</span>
        <img className="header_message" src="/svg/Icon/colocol.svg" alt="колокольчик" />
      </header>

      <main className="content">
        <section className="content__card">
          <img className="card" src="/svg/Multi.svg" alt="карты" />
        </section>

        <section className="content__menu">
          <div className="menu">
            {homeItems.map((item) => (
              <button
                key={item.id}
                className="menu-item"
                onClick={() => console.log("Clicked:", item.id)} >
                <img src={item.icon} alt={item.label} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </section>
          <Footer />
      </main>
    </div>
  );
};
