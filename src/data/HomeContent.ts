import { DataContent } from "../types/types";
import { ROUTES } from "../constants/routes";
import i18n from 'i18next';

export const homeItems: DataContent[] = [
  {
    id: "valute",
    icon: "/svg/icons/mobile.svg",
    label: i18n.t('home.valute'),
    path: ROUTES.SEARCH_EXCHANGE,
    type: "navigate"
  },
  {
    id: "theme",
    icon: "/svg/icons/transfer.svg",
    label: i18n.t('home.theme'),
    type: "theme"
  },
  {
    id: "card",
    icon: "/svg/icons/credit-card.svg",
    label: i18n.t('home.card'),
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
