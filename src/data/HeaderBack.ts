import { DataContent } from "../types/types";
import { ROUTES } from "../constants/routes";

export const backs: DataContent[] = [
  { id: "search", label: "Регистрация", path: ROUTES.SIGN },
  { id: "search", label: "Поиск", path: ROUTES.SEARCH },
  { id: "serach/map", label: "Геолакация", path: ROUTES.SEARCH_MAP },
  { id: "serach/currency", label: "Валюты", path: ROUTES.SEARCH_CURRENCY },
  { id: "message", label: "Сообщения", path: ROUTES.MESSAGE },
  { id: "setting", label: "Настройки", path: ROUTES.SETTING },
];
