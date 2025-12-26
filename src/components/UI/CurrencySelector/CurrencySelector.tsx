import { useState } from "react";
import style from "./CurrencySelector.module.css";

export interface CurrencyOption {
  code: string; // "USD", "EUR", "CNY", "RUB"
  name: string; // "Доллар США", "Евро", и т.д.
  flag?: string; // опционально: путь к флагу
}

interface CurrencySelectorProps {
  value: string; // Текущее значение
  onChange: (currencyCode: string) => void; // Колбэк при изменении
  currencies: CurrencyOption[]; // Доступные валюты
  label: string; // Лейбл для селектора
  disabled?: boolean; // Заблокирован ли
}

export const CurrencySelector = ({
  value,
  onChange,
  currencies,
  label,
  disabled = false,
}: CurrencySelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Находим выбранную валюту для отображения
  const selectedCurrency = currencies.find((c) => c.code === value);

  const handleSelect = (currencyCode: string) => {
    onChange(currencyCode);
    setIsOpen(false);
  };

  return (
    <div className={style.selectorContainer}>
      <label className={style.selectorLabel}>{label}</label>

      <div className={style.selectorWrapper}>
        {/* Кнопка для открытия списка */}
        <button
          type="button"
          className={`${style.selectorButton} ${
            disabled ? style.disabled : ""
          }`}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          aria-label={`Выбрать валюту: ${selectedCurrency?.name || value}`}
        >
          <div className={style.currencyDisplay}>
            {selectedCurrency?.code || value}
            {selectedCurrency?.name && (
              <span className={style.currencyName}>
                {selectedCurrency.name}
              </span>
            )}
          </div>
          <img
            className={`${style.arrowIcon} ${isOpen ? style.rotated : ""}`}
            src="/svg/Icon/01.svg"
            alt=""
            aria-hidden="true"
          />
        </button>

        {/* Выпадающий список */}
        {isOpen && (
          <div className={style.dropdown}>
            <div className={style.dropdownList}>
              {currencies.map((currency) => (
                <button
                  key={currency.code}
                  type="button"
                  className={`${style.dropdownItem} ${
                    value === currency.code ? style.selected : ""
                  }`}
                  onClick={() => handleSelect(currency.code)}
                >
                  <span className={style.itemCode}>{currency.code}</span>
                  <span className={style.itemName}>{currency.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
