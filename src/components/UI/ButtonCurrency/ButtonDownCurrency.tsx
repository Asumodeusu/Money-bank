import { useState } from "react";
import style from "./ButtonCurrency.module.css";

export const ButtonDownCurrency = () => {
  const [toCurrency, setToCurrency] = useState("USD");
  const [showToList, setShowToList] = useState(false);

  const currency = ["RUB", "USD", "EUR", "CNY"];

  return (
    <>
      <div className={style.buttonContainer}>
        <button
          className={style.formChangeButton}
          type="button"
          aria-label="Выбрать валюту"
          onClick={() => setShowToList(!showToList)}
        >
          {toCurrency}
          <img
            className={style.formChangeButtonImg}
            src="/svg/Icon/01.svg"
            alt=""
          />
        </button>

        {showToList && (
          <div className={style.dropDown}>
            {currency.map((item) => (
              <button
                key={item}
                className={style.dropDownItem}
                type="button"
                onClick={() => {
                  setToCurrency(item); // Меняем валюту
                  setShowToList(false); // Закрываем список
                }}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
