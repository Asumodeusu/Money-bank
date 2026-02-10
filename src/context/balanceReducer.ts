import { BalanceState, BalanceAction } from "../types/balance";

// начальное состояние
export const initialState: BalanceState = {
  RUB: 3_000_000,
  USD: 0,
  EUR: 0,
  CNY: 0,
};

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

      if (state[fromCurrency] < amount) {
        console.warn(`Недостаточно средств в валюте ${fromCurrency}`);
        return state;
      }

      let receivedAmount: number;

      if (fromCurrency === "RUB" && toCurrency !== "RUB") {
        receivedAmount = amount / rate;
      } else if (fromCurrency !== "RUB" && toCurrency === "RUB") {
        receivedAmount = amount * rate;
      } else {
        receivedAmount = amount * rate;
      }

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
