import { createContext } from "react";
import { BalanceState, CurrencyCode, ExchangePayload } from "../types/balance";

// хранилища баланса
interface BalanceContextType {
  balances: BalanceState; // Текущий баланс
  updateBalance: (currency: CurrencyCode, amount: number) => void; // Обновить баланс
  exchangeCurrency: (payload: ExchangePayload) => void; // обмен валют
  resetBalances: () => void; // Сброс
}

// createContext с типизацией
export const BalanceContext = createContext<BalanceContextType | undefined>(
  undefined
);
