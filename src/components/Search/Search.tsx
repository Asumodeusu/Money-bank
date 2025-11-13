import "./Search.css";
import { menuContent } from "../../data/SearchData/SearchContent";
import { Footer } from "../FooterTab/FooterTab";
import { useNavigate } from "react-router-dom";
import { Header } from "../HeaderBack/HeaderBack";

export const Search = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="page__search">
      < Header />
      {/* <header className="all__header">
        <button className="header__back-button" onClick={handleBack}>
          <img
            className="header__back-home"
            src="/svg/Icon/39.svg"
            alt="назад"
          />
          <span className="header__back-text">Search</span>
        </button>
      </header> */}
      <main className="all__content">
        {menuContent.map((item) => (
        <button key={item.id} className="content__button"
          onClick={() => console.log("Clicked:", item.id)} >
          <div className="button__content">
          <span className="button__title">{item.label}</span>
          <p className="button__text">{item.text}</p>
          </div>
          <img className="button__img" src={item.icon} alt={item.id} />
        </button>
        ))}
      </main>
      <Footer />
    </div>
  );
};
