// состояния баланса
export interface BalanceState {
  RUB: number;
  USD: number;
  EUR: number;
  CNY: number;
}

// допустимые валюты
export type CurrencyCode = "RUB" | "USD" | "EUR" | "CNY";

// для оперпций обмена валют
export interface ExchangePayload {
  fromCurrency: CurrencyCode; // из какой валюты переводить
  toCurrency: CurrencyCode; // в какую
  amount: number; // количество обмена
  rate: number; // курс обмена
}

// ПРОВЕРИТЬ объеденение типов (объектов), чтобы проще было их вытаскивать для useReduser!!!!!!!!!! 
export type BalanceAction =
  | { type: "UPDATE_CURRENCY"; currency: CurrencyCode; amount: number } // обновление
  | { type: "EXCHANGE"; payload: ExchangePayload } // обмен валюты
  | { type: "SET_BALANCES"; balances: BalanceState }; // установка балансов
