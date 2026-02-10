import { useState } from "react";
import style from "./ButtonCurrency.module.css";

interface ButtonUpCurrencyProps {
  selectedCurrency: string; // Родитель передает текущую валюту
  onCurrencyChange: (currency: string) => void; // Родитель передает функцию
}

export const ButtonUpCurrency = ({
  selectedCurrency,
  onCurrencyChange,
}: ButtonUpCurrencyProps) => {
  const [showUpList, setShowUpList] = useState(false);
  const currency = ["RUB"];

  const handleSelect = (item: string) => {
    onCurrencyChange(item); // Вызываем функцию родителя
    setShowUpList(false);
  };

  return (
    <div className={style.buttonContainer}>
      <button
        className={style.formChangeButton}
        type="button"
        aria-label="Выбрать валюту"
        onClick={() => setShowUpList(!showUpList)}
      >
        {selectedCurrency}
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
              onClick={() => handleSelect(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
