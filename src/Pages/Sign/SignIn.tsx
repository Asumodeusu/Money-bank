import style from "./Sign.module.css";
import { useNavigate, Link } from "react-router-dom";
import { useHeaderPreset } from "../../hooks";
import { ROUTES } from "../../constants/routes";
import { useSignForm } from "../../hooks/useSignForm";
import { useTranslation } from 'react-i18next';

export const SignIn = () => {
  const navigate = useNavigate();
  useHeaderPreset("settings"); // хук хедера с разными пресетами
  const { t } = useTranslation();
  const { fields, updateField, isSubmitActive, submitForm } =
    useSignForm("signin");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (submitForm()) {
      navigate(ROUTES.HOME, {
        state: { userName: fields.user }, // сохранение имени и передача его в главную стр
      });
    }
  };
  return (
    <div className="page-container">
      <div className={style.signPage}>
        <form className={style.signForm} onSubmit={handleSubmit}>
          <h1 className={style.signFormTitle}>{t('signIn.h1')}</h1>
          <p className={style.signFormSubtitle}>{t('signIn.p1')}</p>
          <img
            className={style.signFormImage}
            src="/svg/zamok.svg"
            alt="Decoration"
          />

          <label className={style.signFormField}>
            <input
              name="user"
              className={style.signFormInput}
              type="text"
              placeholder={t('signIn.user')}
              value={fields.user}
              onChange={(e) => updateField("user", e.target.value)}
            />
          </label>
          <label className={style.signFormField}>
            <input
              name="Password"
              className={style.signFormInput}
              type="password"
              placeholder={t('signIn.password')}
              value={fields.password}
              onChange={(e) => updateField("password", e.target.value)}
            />
          </label>

          <button
            type="submit"
            className={`${style.signFormButton} ${
              !isSubmitActive ? style.signFormButtonOff : ""
            }`}
          >
            {t('button.submit_sign')}
          </button>

          <p className={style.signFormFooterText}>
            {t('signIn.p2')}
            <Link to={ROUTES.SIGN} className={style.signFormLink}> {t('signIn.link')}</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
