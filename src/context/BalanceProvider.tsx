import {
  useReducer,
  useEffect,
  useCallback,
  useMemo,
  PropsWithChildren,
} from "react";

import { BalanceContext } from "./BalanceContext";
import { balanceReducer, initialState } from "./balanceReducer";
import { CurrencyCode, ExchangePayload } from "../types/balance";

// Управляение состоянием балансов
export const BalanceProvider = ({ children }: PropsWithChildren) => {
  // - balanceReducer: функция, которая решает как обновлять состояние
  // - initialState: начальные значения балансов
  // - localStorage - хранит только строки
  const [balances, dispatch] = useReducer(balanceReducer, initialState, () => {
    try {
      const saved = localStorage.getItem("balances");
      return saved ? JSON.parse(saved) : initialState; // сохраняем из строки в объект
    } catch {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem("balances", JSON.stringify(balances)); // объект в строку
  }, [balances]);

  // рендер только после изменения зависимостей
  const updateBalance = useCallback(
    (currency: CurrencyCode, amount: number) => {
      dispatch({ type: "UPDATE_CURRENCY", currency, amount });
    },
    []
  );

  const exchangeCurrency = useCallback((payload: ExchangePayload) => {
    dispatch({ type: "EXCHANGE", payload });
  }, []);

  const resetBalances = useCallback(() => {
    dispatch({ type: "SET_BALANCES", balances: initialState });
  }, []);

  // Объект не будет пересоздаваться, если зависимости не изменились
  const value = useMemo(
    () => ({
      balances,
      updateBalance,
      exchangeCurrency,
      resetBalances,
    }),
    [balances, updateBalance, exchangeCurrency, resetBalances]
  );

  return (
    <BalanceContext.Provider value={value}>{children}</BalanceContext.Provider>
  );
};
