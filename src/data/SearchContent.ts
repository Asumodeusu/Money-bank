import { DataContent } from "../types/types";
import { ROUTES } from "../constants/routes";
import i18n from 'i18next';

export const menuContent: DataContent[] = [
  {
    id: "account",
    icon: "/svg/pictureSearch/472.svg",
    label: i18n.t('search.label_account'),
    text: i18n.t('search.text_account'),
    path: ROUTES.SEARCH_MAP
  },
  {
    id: "ExchangeRate",
    icon: "/svg/pictureSearch/477.svg",
    label: i18n.t('search.label_exchangeRate'),
    text: i18n.t('search.text_exchangeRate'),
    path: ROUTES.SEARCH_CURRENCY
  },
  {
    id: "Exchange",
    icon: "/svg/pictureSearch/490.svg",
    label: i18n.t('search.label_exchange'),
    text: i18n.t('search.text_exchange'),
    path: ROUTES.SEARCH_EXCHANGE
  }
];
