import { DataContent } from "../types/types";
import { ROUTES } from "../constants/routes";

export const backs: DataContent[] = [
  { id: "search", label: "Регистрация", path: ROUTES.SIGN },
  { id: "search", label: "Поиск", path: ROUTES.SEARCH },
  { id: "message", label: "СМС", path: ROUTES.MESSAGE },
  { id: "setting", label: "Настройки", path: ROUTES.SETTING },
];
