import { useState, useEffect, useMemo } from "react";
import { useBalance } from "./useBalance";
import { useSimpleCurrency } from "./useSimpleCurrency";
import { CurrencyCode } from "../types/balance";

export const useExchange = () => {
  const { balances, exchangeCurrency } = useBalance();
  const { rates, loading } = useSimpleCurrency();

  // УКАЗЫВАЕМ ТИП CurrencyCode!
  const [fromCurrency, setFromCurrency] = useState<CurrencyCode>("RUB");
  const [toCurrency, setToCurrency] = useState<CurrencyCode>("USD");
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("0.00");
  const [error, setError] = useState("");

  // Расчет курса
  const currentRate = useMemo(() => {
    if (!rates?.length) return null;
    const rateInfo = rates.find((rate) => rate.code === toCurrency);
    if (!rateInfo) return null;

    if (fromCurrency === "RUB" && toCurrency !== "RUB") {
      return rateInfo.buy;
    } else if (fromCurrency !== "RUB" && toCurrency === "RUB") {
      return rateInfo.sell;
    }
    return null;
  }, [rates, fromCurrency, toCurrency]);

  // Авторасчет суммы
  useEffect(() => {
    if (fromAmount && currentRate) {
      const amount = parseFloat(fromAmount);
      if (amount > 0) {
        let result =
          fromCurrency === "RUB" ? amount / currentRate : amount * currentRate;
        setToAmount(result.toFixed(2));
        setError("");
      } else {
        setToAmount("0.00");
      }
    } else {
      setToAmount("0.00");
    }
  }, [fromAmount, fromCurrency, toCurrency, currentRate]);

  // Проверка
  const validate = () => {
    const amount = parseFloat(fromAmount);

    if (!fromAmount || amount <= 0) {
      setError("Введите сумму для обмена");
      return false;
    }

    if (!currentRate) {
      setError("Курс недоступен");
      return false;
    }

    // ПРИВОДИМ К CurrencyCode для TypeScript!
    if (amount > balances[fromCurrency as CurrencyCode]) {
      setError(`Недостаточно ${fromCurrency}`);
      return false;
    }

    return true;
  };

  // Обмен
  const executeExchange = () => {
    if (!validate() || !currentRate) return false;

    const amount = parseFloat(fromAmount);

    // СОЗДАЕМ ОБЪЕКТ С ПРАВИЛЬНЫМИ ТИПАМИ
    exchangeCurrency({
      fromCurrency: fromCurrency as CurrencyCode, // Приводим тип
      toCurrency: toCurrency as CurrencyCode, // Приводим тип
      amount,
      rate: currentRate,
    });

    return true;
  };

  return {
    // Состояние
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    fromAmount,
    setFromAmount,
    toAmount,
    error,

    // Данные
    balances,
    currentRate,
    loading,

    // Методы
    executeExchange,
  };
};
