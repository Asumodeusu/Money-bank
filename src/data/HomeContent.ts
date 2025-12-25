import { DataContent } from "../types/types";
import { ROUTES } from "../constants/routes";

export const homeItems: DataContent[] = [
  {
    id: "valute",
    icon: "/svg/icons/mobile.svg",
    label: "home.valute",
    path: ROUTES.SEARCH_EXCHANGE,
    type: "navigate",
  },
  {
    id: "theme",
    icon: "/svg/icons/transfer.svg",
    label: "home.theme",
    type: "theme",
  },
  {
    id: "card",
    icon: "/svg/icons/credit-card.svg",
    label: "home.card",
    type: "navigate",
  },
];

export const homeBalance: DataContent[] = [
  {
    id: "USD",
    label: "USD",
    count: 0.0,
  },
  {
    id: "EUR",
    label: "EUR",
    count: 0.0,
  },
  {
    id: "CNY",
    label: "CNY",
    count: 0.0,
  },
];
