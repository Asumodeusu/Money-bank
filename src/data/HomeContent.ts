import { DataContent, DataBalance } from "../types/types";
import { ROUTES } from "../constants/routes";


export const homeItems: DataContent[] = [
  {
    id: "valute",
    icon: "/svg/icons/mobile.svg",
    label: "home.valute",
    path: ROUTES.SEARCH_EXCHANGE,
  },
  {
    id: "theme",
    icon: "/svg/icons/transfer.svg",
    label: "home.theme",
  },
  {
    id: "reset",
    icon: "/svg/icons/credit-card.svg",
    label: "home.card",
  },
];

// key - доступ к balances.USD
export const homeBalance: DataBalance[] = [
  {
    id: "USD",
    label: "USD",
    key: "USD" as const, 
  },
  {
    id: "EUR",
    label: "EUR",
    key: "EUR" as const,
  },
  {
    id: "CNY",
    label: "CNY",
    key: "CNY" as const,
  },
];
