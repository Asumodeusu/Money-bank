import style from "./Exchange.module.css";

const Exchange = () => {
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
              <button
                className={style.formChangeButton}
                type="button"
                aria-label="Выбрать валюту"
              >
                RUB
                <img
                  className={style.formChangeButtonImg}
                  src="/svg/icon/01.svg"
                  alt=""
                />
              </button>
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
              <button
                className={style.formChangeButton}
                type="button"
                aria-label="Выбрать валюту"
              >
                USD
                <img
                  className={style.formChangeButtonImg}
                  src="/svg/icon/01.svg"
                  alt=""
                />
              </button>
            </div>

            <button className={style.formButton} type="submit">
              Перевод
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Exchange;
