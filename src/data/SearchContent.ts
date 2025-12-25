import { DataContent } from "../types/types";
import { ROUTES } from "../constants/routes";

export const menuContent: DataContent[] = [
  {
    id: "account",
    icon: "/svg/pictureSearch/472.svg",
    label: "search.label_account",
    text: "search.text_account",
    path: ROUTES.SEARCH_MAP,
  },
  {
    id: "ExchangeRate",
    icon: "/svg/pictureSearch/477.svg",
    label: "search.label_exchangeRate",
    text: "search.text_exchangeRate",
    path: ROUTES.SEARCH_CURRENCY,
  },
  {
    id: "Exchange",
    icon: "/svg/pictureSearch/490.svg",
    label: "search.label_exchange",
    text: "search.text_exchange",
    path: ROUTES.SEARCH_EXCHANGE,
  },
];
