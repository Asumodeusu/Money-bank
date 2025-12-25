import { DataContent } from "../types/types";
import { ROUTES } from "../constants/routes";
import i18n from 'i18next';

export const backs: DataContent[] = [
  { id: "sign", label: i18n.t('header.sign', 'Регестрация'), path: ROUTES.SIGN },
  { id: "signIn", label: i18n.t('header.signIn', 'Вход'), path: ROUTES.SIGN_IN },
  { id: "search", label: i18n.t('header.search', 'Регестрация'), path: ROUTES.SEARCH },
  { id: "search_map", label: i18n.t('header.search_map', 'Геолакация'), path: ROUTES.SEARCH_MAP },
  { id: "search_currency", label: i18n.t('header.search_currency', 'Валюты'), path: ROUTES.SEARCH_CURRENCY },
  { id: "search_exchange", label: i18n.t('header.search_exchange', 'Обмен валюты'), path: ROUTES.SEARCH_EXCHANGE },
  { id: "message", label: i18n.t('header.message', 'Сообщения'), path: ROUTES.MESSAGE },
  { id: "setting", label: i18n.t('header.setting', 'Настройки'), path: ROUTES.SETTING },
];
