import style from "./Currency.module.css";
import { useSimpleCurrency } from "../../../hooks/useSimpleCurrency";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";

const Currency = () => {
  const navigate = useNavigate();
  const { rates, loading } = useSimpleCurrency();

  if (loading) {
    return (
      <div className="page-container">
        <main className={style.content}>
          <div>Обновление валют...</div>
        </main>
      </div>
    );
  }

  return (
    <div className="page-container">
      <main className={style.content}>
        <section className={style.contentTitle}>
          <span className={style.codeColumn}>КОД</span>
          <span className={style.buyColumn}>Покупка</span>
          <span className={style.sellColumn}>Продажа</span>
        </section>

        <section className={style.currency}>
          {rates.map((currency) => (
            <button
              key={currency.code}
              className={style.currencyButton}
              onClick={() => navigate(ROUTES.SEARCH_EXCHANGE)} // надо ли?!
            >
              <span className={style.codeColumn}>{currency.code}</span>
              <span className={style.buyColumn}>
                {currency.buy.toFixed(2)} ₽
              </span>
              <span className={style.sellColumn}>
                {currency.sell.toFixed(2)} ₽
              </span>
            </button>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Currency;
