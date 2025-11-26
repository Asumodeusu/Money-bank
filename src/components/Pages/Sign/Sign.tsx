import "./Sign.css";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../store/hooks";
import { setHeaderPreset } from "../../../store/slices/headerSlice";
import { useEffect } from "react";

export const Sign = () => {
  const navigate = useNavigate();
  // переход на главную стр
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/Home");
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    // меняем стили пресета сетинг
    dispatch(setHeaderPreset("settings"));
    return () => {
      // При уходе со страницы - возвращаем дефолтный хедер
      dispatch(setHeaderPreset("default"));
    };
  }, [dispatch]);

  return (
    <div className="page-container">
      <div className="sign-page">
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
