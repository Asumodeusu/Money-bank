import "./Sign.css";
import { useNavigate } from "react-router-dom";

export const Sign = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/Home");
  };

  return (
    <div className="page-container">
      <div className="sign-page">
        <header className="sign__header">
          <button className="sign__back-button" onClick={handleBack}>
            <img
              className="sign__back-welcome"
              src="/svg/Icon/39.svg"
              alt="назад"
            />
            <span className="sign__up">Sign up</span>
          </button>
        </header>

        <form className="sign-form" onSubmit={handleSubmit}>
          <h1 className="sign-form__title">Welcome to us,</h1>
          <p className="sign-form__subtitle">Hello there, create New account</p>
          <img
            className="sign-form__image"
            src="/svg/humen.svg"
            alt="Decoration"
          />

          <label className="sign-form__field">
            <input
              name="user"
              className="sign-form__input"
              type="text"
              placeholder="User"
            />
          </label>
          <label className="sign-form__field">
            <input
              name="Number"
              className="sign-form__input"
              type="tel"
              placeholder="Number"
            />
          </label>
          <label className="sign-form__field">
            <input
              name="Password"
              className="sign-form__input"
              type="password"
              placeholder="Password"
            />
          </label>

          <label className="sign-form__checkbox-label">
            <input type="checkbox" className="sign-form__checkbox" />
            <span className="sign-form__custom-checkbox"></span>
            <span className="sign-form__agreement-text">
              By creating an account you agree to our Terms and Conditions
            </span>
          </label>

          <button type="submit" className="sign-form__button">
            Sign up
          </button>

          <p className="sign-form__footer-text">
            Have an account? <span className="sign-form__link">Sign In</span>
          </p>
        </form>
      </div>
    </div>
  );
};
