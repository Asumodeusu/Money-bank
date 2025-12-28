import { ButtonUpCurrency } from "../../../components/UI/ButtonCurrency/ButtonUpCurrency";
import { ButtonDownCurrency } from "../../../components/UI/ButtonCurrency/ButtonDownCurrency";
import style from "./Exchange.module.css";
import { useTranslation } from "react-i18next";

const Exchange = () => {
  const { t } = useTranslation();
  return (
    <div className="page-container">
      <main className={style.content}>
        <img
          className={style.contentImg}
          src="/svg/ilustrate/phone.svg"
          alt="телефон с монетами"
          loading="lazy"
        />
        <div className={style.contentForm}>
          <form className={style.formChange}>

            <div className={style.formChangeMenu}>
              <label className={style.formChangeCurrency}>
                <input
                  className={style.formChangeInput}
                  type="number"
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                />
              </label>
              <ButtonUpCurrency />
            </div>

            <img
              className={style.formChangeImg}
              src="/svg/icons/Arrow.svg"
              alt=""
            />

            <div className={style.formChangeMenu}>
              <label className={style.formChangeCurrency}>
                <input
                  className={style.formChangeInput}
                  type="number"
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                />
              </label>
              <ButtonDownCurrency />
            </div>

            <button className={style.formButton} type="submit">
              {t("button.submit_ex")}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Exchange;
