import { DataContent } from "../types/types";
import { ROUTES } from "../constants/routes";

export const tabs: DataContent[] = [
  { id: "home", 
    icon: "/svg/Icon/45.svg", 
    label: "Главная", 
    path: ROUTES.HOME },
  {
    id: "search",
    icon: "/svg/Icon/44.svg",
    label: "Финансы",
    path: ROUTES.SEARCH,
  },
  {
    id: "message",
    icon: "/svg/Icon/42.svg",
    label: "Сообщения",
    path: ROUTES.MESSAGE,
  },
  {
    id: "setting",
    icon: "/svg/Icon/43.svg",
    label: "Настройки",
    path: ROUTES.SETTING,
  },
];
