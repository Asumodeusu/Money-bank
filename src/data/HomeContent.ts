import { DataContent } from "../types/types";
import { ROUTES } from "../constants/routes";

export const homeItems: DataContent[] = [
  {
    id: "mobile",
    icon: "/svg/icons/mobile.svg",
    label: "Обменник",
    path: ROUTES.SEARCH_EXCHANGE,
    type: "navigate"
  },
  {
    id: "transfer",
    icon: "/svg/icons/transfer.svg",
    label: "Смена темы",
    type: "theme"
  },
  {
    id: "credit-card",
    icon: "/svg/icons/credit-card.svg",
    label: "Card",
    type: "navigate"
  },
];

export const homeBalance: DataContent[] = [
  {
    id: "USD",
    label: "USD",
    count: 0.00
  },
  {
    id: "EUR",
    label: "EUR",
    count: 0.00
  },
  {
    id: "CNY",
    label: "CNY",
    count: 0.00
  },
];
