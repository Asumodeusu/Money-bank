import { useState, useEffect, useMemo } from "react";
import { useBalance } from "./useBalance";
import { useSimpleCurrency } from "./useSimpleCurrency";
import { CurrencyCode } from "../types/balance";

export const useExchange = () => {
  const { balances, exchangeCurrency } = useBalance();
  const { rates, loading } = useSimpleCurrency();

  const [fromCurrency, setFromCurrency] = useState<CurrencyCode>("RUB");
  const [toCurrency, setToCurrency] = useState<CurrencyCode>("USD");
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("0.00");
  const [error, setError] = useState("");

  const calculateCrossRate = (
    from: CurrencyCode,
    to: CurrencyCode,
  ): number | null => {
    if (!rates || rates.length === 0) return null;

    const fromRate = rates.find((rate) => rate.code === from);
    const toRate = rates.find((rate) => rate.code === to);

    if (!fromRate || !toRate) return null;

    return fromRate.sell / toRate.buy;
  };

  const currentRate = useMemo(() => {
    if (!rates || rates.length === 0) return null;

    if (fromCurrency === "RUB" && toCurrency !== "RUB") {
      const rateInfo = rates.find((rate) => rate.code === toCurrency);
      return rateInfo?.buy || null;
    } else if (fromCurrency !== "RUB" && toCurrency === "RUB") {
      const rateInfo = rates.find((rate) => rate.code === fromCurrency);
      return rateInfo?.sell || null;
    } else {
      return calculateCrossRate(fromCurrency, toCurrency);
    }
  }, [rates, fromCurrency, toCurrency]);

  useEffect(() => {
    if (fromAmount && currentRate) {
      const amount = parseFloat(fromAmount);
      if (amount > 0) {
        let result = 0;

        if (fromCurrency === "RUB" && toCurrency !== "RUB") {
          result = amount / currentRate;
        } else if (fromCurrency !== "RUB" && toCurrency === "RUB") {
          result = amount * currentRate;
        } else {
          result = amount * currentRate;
        }

        setToAmount(result.toFixed(2));
        setError("");
      } else {
        setToAmount("0.00");
      }
    } else {
      setToAmount("0.00");
    }
  }, [fromAmount, fromCurrency, toCurrency, currentRate]);

  // ПРОВЕРКА
  const validate = () => {
    const amount = parseFloat(fromAmount);

    if (!fromAmount || amount <= 0) {
      setError("Введите сумму для обмена");
      return false;
    }

    if (fromCurrency === toCurrency) {
      setError("Нельзя обменять валюту на саму себя");
      return false;
    }

    if (amount > balances[fromCurrency]) {
      setError(
        `Недостаточно ${fromCurrency}. Доступно: ${balances[fromCurrency].toFixed(2)}`,
      );
      return false;
    }

    return true;
  };

  const executeExchange = () => {
    if (!validate() || !currentRate) return false;

    const amount = parseFloat(fromAmount);

    exchangeCurrency({
      fromCurrency,
      toCurrency,
      amount,
      rate: currentRate,
    });

    return true;
  };

  const allCurrencies: CurrencyCode[] = ["RUB", "USD", "EUR", "CNY"];

  // Валюты для выбора в поле "из" (исключаем текущую целевую)
  const availableFromCurrencies = allCurrencies.filter(
    (curr) => curr !== toCurrency,
  );

  // Валюты для выбора в поле "в" (исключаем текущую исходную)
  const availableToCurrencies = allCurrencies.filter(
    (curr) => curr !== fromCurrency,
  );

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
    availableFromCurrencies,
    availableToCurrencies,

    // Методы
    executeExchange,
  };
};
