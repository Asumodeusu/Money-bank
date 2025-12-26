import { useContext } from "react";
import { BalanceContext } from "../context/BalanceContext";

// Упрощает доступ к контексту
export const useBalance = () => {
  // исходное значение контекста
  const context = useContext(BalanceContext);

  if (context === undefined) {
    throw new Error('useBalance должен использоваться внутри BalanceProvider');
  } // защита от андефаинд - ошибки

  // Возвращаем объект с балансами и функциями:
  return context;
};
