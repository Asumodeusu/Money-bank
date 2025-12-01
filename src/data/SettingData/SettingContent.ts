import { DataContent } from "../../types/types";
import { ROUTES } from "../../constants/routes";

export const settingContent: DataContent[] = [
  {
    id: "Password",
    icon: "/svg/Icon/38.svg",
    label: "Password",
  },
  {
    id: "ID",
    icon: "/svg/Icon/38.svg",
    label: "Тема",
  },
  {
    id: "Languages",
    icon: "/svg/Icon/38.svg",
    label: "Смена языка",
  },
  {
    id: "App",
    icon: "/svg/Icon/38.svg",
    label: "App информация",
  },
  {
    id: "Выход",
    icon: "/svg/Icon/38.svg",
    label: "Выход",
    path: ROUTES.WELCOME,
  },
];
