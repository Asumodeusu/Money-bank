import style from "./Sign.module.css";
import { useNavigate, Link } from "react-router-dom";
import { useHeaderPreset } from "../../hooks";
import { ROUTES } from "../../constants/routes";
import { useSignForm } from "../../hooks/useSignForm/useSignForm";

export const Sign = () => {
  const navigate = useNavigate();
  useHeaderPreset("settings"); // хук хедера с разными пресетами
  const { fields, updateField, isSubmitActive, submitForm } = useSignForm(); // дефолтный хук формы

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (submitForm()) {
      navigate("/Home", {
        state: { userName: fields.user }, // сохранение имени и передача его на главную стр
      });
    }
  };

  return (
    <div className="page-container">
      <div className={style.signPage}>
        <form className={style.signForm} onSubmit={handleSubmit}>
          <h1 className={style.signFormTitle}>Добро пожаловать,</h1>
          <p className={style.signFormSubtitle}>создайте профиль</p>
          <img
            className={style.signFormImage}
            src="/svg/humen.svg"
            alt="Decoration"
          />

          <label className={style.signFormField}>
            <input
              name="user"
              className={style.signFormInput}
              type="text"
              placeholder="User"
              value={fields.user}
              onChange={(e) => updateField("user", e.target.value)}
            />
          </label>
          <label className={style.signFormField}>
            <input
              name="Number"
              className={style.signFormInput}
              type="tel"
              placeholder="Number"
              value={fields.number}
              onChange={(e) => updateField("number", e.target.value)}
            />
          </label>
          <label className={style.signFormField}>
            <input
              name="Password"
              className={style.signFormInput}
              type="password"
              placeholder="Password"
              value={fields.password}
              onChange={(e) => updateField("password", e.target.value)}
            />
          </label>

          <label className={style.signFormCheckboxLabel}>
            <input
              type="checkbox"
              className={style.signFormCheckbox}
              checked={fields.checkbox}
              onChange={(e) => updateField("checkbox", e.target.checked)}
            />
            <span className={style.signFormCustomCheckbox}></span>
            <span className={style.signFormText}>
              Подтвердите обработку данных
            </span>
          </label>

          <button
            type="submit"
            className={`${style.signFormButton} ${
              !isSubmitActive ? style.signFormButtonOff : ""
            }`} // ксс меняется при валидации
            disabled={!isSubmitActive}
          >
            Войти
          </button>

          <p className={style.signFormFooterText}>
            У вас есть профиль?
            <Link to={ROUTES.SIGN_IN} className={style.signFormLink}>
              Войдите
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
