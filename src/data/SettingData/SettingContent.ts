import { DataContent } from "../../types/types";
import { ROUTES } from "../../constants/routes";

export const settingContent: DataContent[] = [
  {
    id: "Password",
    icon: "/svg/Icon/38.svg",
    label: "Password",
    // path: '/account' ← ДОБАВЬ ПУТИ
  },
  {
    id: "ID",
    icon: "/svg/Icon/38.svg",
    label: "Тема",
    // path: '/account' ← ДОБАВЬ ПУТИ
  },
  {
    id: "Languages",
    icon: "/svg/Icon/38.svg",
    label: "Смена языка",
    // path: '/account' ← ДОБАВЬ ПУТИ
  },
  {
    id: "App",
    icon: "/svg/Icon/38.svg",
    label: "App информация",
    // path: '/account' ← ДОБАВЬ ПУТИ
  },
    {
    id: "Выход",
    icon: "/svg/Icon/38.svg",
    label: "Выход",
    path: ROUTES.WELCOME
  }
];
