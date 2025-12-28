import { useState } from "react";
import style from "./ButtonCurrency.module.css";

export const ButtonUpCurrency = () => {
  const [fromCurrency, setUpCurrency] = useState("RUB");
  const [showUpList, setShowUpList] = useState(false);

  const currency = ["RUB", "USD", "EUR", "CNY"];

  return (
    <>
      <div className={style.buttonContainer}>
        <button
          className={style.formChangeButton}
          type="button"
          aria-label="Выбрать валюту"
          onClick={() => setShowUpList(!showUpList)}
        >
          {fromCurrency}
          <img
            className={style.formChangeButtonImg}
            src="/svg/Icon/01.svg"
            alt=""
          />
        </button>

        {showUpList && (
          <div className={style.dropDown}>
            {currency.map((item) => (
              <button
                key={item}
                className={style.dropDownItem}
                type="button"
                onClick={() => {
                  setUpCurrency(item); // Меняем валюту
                  setShowUpList(false); // Закрываем список
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
