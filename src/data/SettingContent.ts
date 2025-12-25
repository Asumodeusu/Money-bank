import { DataContent } from "../types/types";
import { ROUTES } from "../constants/routes";

export const settingContent: DataContent[] = [
  // {
  //   id: "Password",
  //   icon: "/svg/Icon/38.svg",
  //   label: "Password",
  // },
  {
    id: "languages",
    icon: "/svg/Icon/38.svg",
    label: "setting.languages",
  },
  // {
  //   id: "App",
  //   icon: "/svg/Icon/38.svg",
  //   label: "App информация",
  // },
  {
    id: "exit",
    icon: "/svg/Icon/38.svg",
    label: "setting.exit",
    path: ROUTES.WELCOME,
  },
];
