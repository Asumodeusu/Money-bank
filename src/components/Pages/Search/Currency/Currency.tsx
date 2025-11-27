import style from "./Currency.module.css"

export const Currency = () => {
  return (
    <div className="page-container">
      <main className={style.content}>

        <section className={style.contentTitle}>
          <span>КОД</span>
          <span>Покупка</span>
          <span>Продажа</span>
        </section>

        <section className={style.currency}>

          <button className={style.currencyButton}>
            <span>euro</span>
            <span>12</span>
            <span>15</span>
          </button>

        </section>
      </main>
    </div>
  );
};
