import { useState, useEffect } from "react";

export interface CurrencyRate {
  code: string;
  name: string;
  buy: number;
  sell: number;
}

export const useSimpleCurrency = () => {
  const [rates, setRates] = useState<CurrencyRate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        //  Берем реальные данные с ЦБ РФ
        const response = await fetch(
          "https://www.cbr-xml-daily.ru/daily_json.js"
        );
        const data = await response.json();

        // Добавляем маржу к реальным курсам
        const usdRate = data.Valute.USD.Value;
        const eurRate = data.Valute.EUR.Value;
        const cnyRate = data.Valute.CNY.Value;

        const currencyRates: CurrencyRate[] = [
          {
            code: "USD",
            name: "Доллар США",
            buy: parseFloat((usdRate * 1.02).toFixed(2)), // -2%
            sell: parseFloat((usdRate * 0.98).toFixed(2)), // +2%
          },
          {
            code: "EUR",
            name: "Евро",
            buy: parseFloat((eurRate * 1.02).toFixed(2)),
            sell: parseFloat((eurRate * 0.98).toFixed(2)),
          },
          {
            code: "CNY",
            name: "Китайский юань",
            buy: parseFloat((cnyRate * 1.02).toFixed(2)), // -3%
            sell: parseFloat((cnyRate * 0.95).toFixed(2)), // +3%
          },
        ];

        setRates(currencyRates);
      } catch (error) {
        console.error("Ошибка загрузки курсов:", error);
        // Запасные данные на случай ошибки
        setRates([
          { code: "USD", name: "Доллар США", buy: 90.5, sell: 92.0 },
          { code: "EUR", name: "Евро", buy: 98.0, sell: 100.5 },
          { code: "CNY", name: "Китайский юань", buy: 12.5, sell: 12.8 },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  return { rates, loading };
};
