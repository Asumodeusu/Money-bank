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
  action: BalanceAction
): BalanceState {
  switch (action.type) {
    // Обновить баланс одной валюты
    case "UPDATE_CURRENCY":
      return {
        ...state, // Копируем начальные значения
        [action.currency]: action.amount, // Меняем указанную валюту
      };

    // покупка/продажа
    case "EXCHANGE": {
      const { fromCurrency, toCurrency, amount, rate } = action.payload;

      // Проверяем, хватает ли денег для обмена
      if (state[fromCurrency] < amount) {
        console.warn(`Недостаточно средств в валюте ${fromCurrency}`);

        // так сделать ! setError(`Недостаточно средств в валюте ${fromCurrency}`);

        return state; // Если не хватает — возвращаем старое состояние без изменений
      }

      // Рассчет обмена
      const receivedAmount = amount * rate;

      // обновление баланса
      return {
        ...state,
        [fromCurrency]: state[fromCurrency] - amount, // Уменьшаем исходную валюту
        [toCurrency]: state[toCurrency] + receivedAmount, // Увеличиваем выбранную валюту
      };
    }

    // заменяет на новый баланс
    case "SET_BALANCES":
      return action.balances;

    // возвращает к исходному балансу
    default:
      return state;
  }
}
