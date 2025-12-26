import style from "./Sign.module.css";
import { useNavigate, Link } from "react-router-dom";
import { useHeaderPreset } from "../../hooks";
import { ROUTES } from "../../constants/routes";
import { useSignForm } from "../../hooks/useSignForm";
import { useTranslation } from "react-i18next";

export const Sign = () => {
  const navigate = useNavigate();
  useHeaderPreset("settings"); // хук хедера с разными пресетами
  const { t } = useTranslation();
  const { fields, updateField, isSubmitActive, submitForm } = useSignForm(); // дефолтный хук формы

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (submitForm()) {
      navigate(ROUTES.HOME, {
        state: { userName: fields.user }, // сохранение имени и передача его на главную стр
      });
    }
  };

  return (
    <div className="page-container">
      <div className={style.signPage}>
        <form className={style.signForm} onSubmit={handleSubmit}>
          <h1 className={style.signFormTitle}>{t("sign.h1")}</h1>
          <p className={style.signFormSubtitle}>{t("sign.p1")}</p>
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
              placeholder={t("sign.user")}
              value={fields.user}
              onChange={(e) => updateField("user", e.target.value)}
            />
          </label>
          <label className={style.signFormField}>
            <input
              name="Number"
              className={style.signFormInput}
              type="Number"
              placeholder="+7(9..)"
              value={fields.number}
              onChange={(e) => updateField("number", e.target.value)}
            />
          </label>
          <label className={style.signFormField}>
            <input
              name="Password"
              className={style.signFormInput}
              type="password"
              placeholder={t("sign.password")}
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
            <span className={style.signFormText}>{t("sign.span")}</span>
          </label>

          <button
            type="submit"
            className={`${style.signFormButton} ${
              !isSubmitActive ? style.signFormButtonOff : ""
            }`} // ксс меняется при валидации
            disabled={!isSubmitActive}
          >
            {t("button.submit_sign")}
          </button>

          <p className={style.signFormFooterText}>
            {t("sign.p2")}
            <Link to={ROUTES.SIGN_IN} className={style.signFormLink}>
              {" "}
              {t("sign.link")}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
