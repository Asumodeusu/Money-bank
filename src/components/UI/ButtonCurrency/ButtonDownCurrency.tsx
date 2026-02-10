import { useState } from "react";
import style from "./ButtonCurrency.module.css";

interface ButtonDownCurrencyProps {
  selectedCurrency: string; // Родитель передает текущую валюту
  onCurrencyChange: (currency: string) => void; // Родитель передает функцию
}

export const ButtonDownCurrency = ({
  selectedCurrency,
  onCurrencyChange,
}: ButtonDownCurrencyProps) => {
  const [showToList, setShowToList] = useState(false);
  const currency = ["RUB", "USD", "EUR", "CNY"];

  const handleSelect = (item: string) => {
    onCurrencyChange(item); // Вызываем функцию родителя
    setShowToList(false);
  };

  return (
    <div className={style.buttonContainer}>
      <button
        className={style.formChangeButton}
        type="button"
        aria-label="Выбрать валюту"
        onClick={() => setShowToList(!showToList)}
      >
        {selectedCurrency}
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
