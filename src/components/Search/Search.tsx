import "./Search.css";
import { menuContent } from "../../data/SearchData/SearchContent";
import { Footer } from "../FooterTab/FooterTab";
import { Header } from "../HeaderBack/HeaderBack";

export const Search = () => {

  return (
    <div className="page__search">
      <Header />
      <main className="all__content">
        {menuContent.map((item) => (
          <button
            key={item.id}
            className="content__button"
            onClick={() => console.log("Clicked:", item.id)}
          >
            <div className="button__content">
              <strong className="button__title">{item.label}</strong>
              <span className="button__text">{item.text}</span>
            </div>
            <img className="button__img" src={item.icon} alt={item.id} />
          </button>
        ))}
      </main>
      <Footer />
    </div>
  );
};
