import { useState } from "react";
import style from "./ButtonCurrency.module.css";

interface ButtonCurrencyProps {
  currency: string; // Текущая валюта (RUB, USD и т.д.)
  onChange: (newCurrency: string) => void; // Функция при смене валюты
}

export const ButtonCurrency = ({ currency, onChange }: ButtonCurrencyProps) => {
  const [showList, setShowList] = useState(false);
  
  // Все доступные валюты
  const allCurrencies = ["RUB", "USD", "EUR", "CNY"];

  // Обработчик выбора валюты
  const handleSelect = (selectedCurrency: string) => {
    onChange(selectedCurrency); // Сообщаем родителю
    setShowList(false); // Закрываем список
  };

  return (
    <div className={style.buttonContainer}>
      {/* Основная кнопка */}
      <button
        className={style.formChangeButton}
        type="button"
        onClick={() => setShowList(!showList)}
      >
        {currency}
        <img
          className={style.formChangeButtonImg}
          src="/svg/Icon/01.svg"
          alt=""
        />
      </button>

      {/* Выпадающий список */}
      {showList && (
        <div className={style.dropDown}>
          {allCurrencies.map((curr) => (
            <button
              key={curr}
              className={style.dropDownItem}
              type="button"
              onClick={() => handleSelect(curr)}
            >
              {curr}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};