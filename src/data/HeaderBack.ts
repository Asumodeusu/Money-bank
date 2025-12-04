import { DataContent } from "../types/types";
import { ROUTES } from "../constants/routes";

export const backs: DataContent[] = [
  { id: "sign", label: "Регистрация", path: ROUTES.SIGN },
  { id: "signIn", label: "Вход", path: ROUTES.SIGN_IN },
  { id: "search", label: "Финансы", path: ROUTES.SEARCH },
  { id: "serach/map", label: "Геолакация", path: ROUTES.SEARCH_MAP },
  { id: "serach/currency", label: "Валюты", path: ROUTES.SEARCH_CURRENCY },
  { id: "serach/exchange", label: "Обмен валюты", path: ROUTES.SEARCH_EXCHANGE },
  { id: "message", label: "Сообщения", path: ROUTES.MESSAGE },
  { id: "setting", label: "Настройки", path: ROUTES.SETTING },
];
