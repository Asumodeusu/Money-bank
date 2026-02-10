import { ButtonUpCurrency } from "../../../components/UI/ButtonCurrency/ButtonUpCurrency";
import { ButtonDownCurrency } from "../../../components/UI/ButtonCurrency/ButtonDownCurrency";
import { useExchange } from "../../../hooks/useExchange";
import style from "./Exchange.module.css";
import { useTranslation } from "react-i18next";
import { CurrencyCode } from "../../../types/balance";

const Exchange = () => {
  const { t } = useTranslation();

  const {
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
  } = useExchange();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = executeExchange();
    if (success) {
      alert(`Обмен выполнен!`);
      setFromAmount("");
    }
  };

  if (loading) {
    return (
      <div className="page-container">
        <main className={style.content}>Загрузка...</main>
      </div>
    );
  }

  return (
    <div className="page-container">
      <main className={style.content}>
        <img
          className={style.contentImg}
          src="/svg/ilustrate/phone.svg"
          alt="телефон с монетами"
          loading="lazy"
        />

        <div className={style.contentForm}>
          <form className={style.formChange} onSubmit={handleSubmit}>
            <div className={style.formChangeMenu}>
              <label className={style.formChangeCurrency}>
                <input
                  className={style.formChangeInput}
                  type="number"
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                  value={fromAmount}
                  onChange={(e) => setFromAmount(e.target.value)}
                />
              </label>

              <ButtonUpCurrency
                selectedCurrency={fromCurrency}
                onCurrencyChange={(currency) =>
                  setFromCurrency(currency as CurrencyCode)
                }
              />
            </div>

            <span className={style.balanceInfo}>
              Доступно:{" "}
              {balances[fromCurrency as CurrencyCode]?.toFixed(2) || "0.00"}{" "}
              {fromCurrency}
            </span>

            <img
              className={style.formChangeImg}
              src="/svg/icons/Arrow.svg"
              alt=""
            />

            <div className={style.formChangeMenu}>
              <label className={style.formChangeCurrency}>
                <input
                  className={style.formChangeInput}
                  type="text"
                  value={toAmount}
                  readOnly
                />
              </label>

              <ButtonDownCurrency
                selectedCurrency={toCurrency}
                onCurrencyChange={(currency) =>
                  setToCurrency(currency as CurrencyCode)
                }
              />
            </div>

            <span className={style.rateInfo}>
              {currentRate
                ? `1 ${toCurrency} = ${currentRate.toFixed(2)} ${fromCurrency}`
                : "Выберите разные валюты"}
            </span>

            {error && <div className={style.error}>{error}</div>}

            <button
              className={style.formButton}
              type="submit"
              disabled={!fromAmount || parseFloat(fromAmount) <= 0}
            >
              {t("button.submit_ex")}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Exchange;
