import { BalanceState, BalanceAction } from "../types/balance";

// начальное состояние
export const initialState: BalanceState = {
  RUB: 3_000_000,
  USD: 0,
  EUR: 0,
  CNY: 0,
};

// Принимает текущее состояние и команду (action), возвращает новое состояние
export function balanceReducer(
  state: BalanceState,
  action: BalanceAction,
): BalanceState {
  switch (action.type) {
    case "UPDATE_CURRENCY":
      return {
        ...state,
        [action.currency]: action.amount,
      };

    case "EXCHANGE": {
      const { fromCurrency, toCurrency, amount, rate } = action.payload;

      // Проверяем, хватает ли денег
      if (state[fromCurrency] < amount) {
        console.warn(`Недостаточно средств в валюте ${fromCurrency}`);
        return state;
      }

      // 🔥 ИСПРАВЛЕННАЯ ЛОГИКА:
      let receivedAmount: number;

      // Случай 1: RUB → иностранная валюта (покупаем)
      if (fromCurrency === "RUB" && toCurrency !== "RUB") {
        receivedAmount = amount / rate; // ДЕЛИМ
      }
      // Случай 2: иностранная валюта → RUB (продаем)
      else if (fromCurrency !== "RUB" && toCurrency === "RUB") {
        receivedAmount = amount * rate; // УМНОЖАЕМ
      }
      // 🔥 Случай 3: иностранная валюта → другая иностранная
      // rate уже должен быть КОНЕЧНЫМ курсом между валютами
      else {
        receivedAmount = amount * rate; // Используем готовый расчетный курс
      }

      // Округляем
      receivedAmount = parseFloat(receivedAmount.toFixed(2));

      return {
        ...state,
        [fromCurrency]: parseFloat((state[fromCurrency] - amount).toFixed(2)),
        [toCurrency]: parseFloat(
          (state[toCurrency] + receivedAmount).toFixed(2),
        ),
      };
    }

    case "SET_BALANCES":
      return action.balances;

    default:
      return state;
  }
}
