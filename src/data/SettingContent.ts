import { DataContent } from "../types/types";
import { ROUTES } from "../constants/routes";
import i18n from "../i18n/i18n";

export const settingContent: DataContent[] = [
  // {
  //   id: "Password",
  //   icon: "/svg/Icon/38.svg",
  //   label: "Password",
  // },
  {
    id: "languages",
    icon: "/svg/Icon/38.svg",
    label: i18n.t("setting.languages"),
  },
  // {
  //   id: "App",
  //   icon: "/svg/Icon/38.svg",
  //   label: "App информация",
  // },
  {
    id: "exit",
    icon: "/svg/Icon/38.svg",
    label: i18n.t("setting.exit"),
    path: ROUTES.WELCOME,
  },
];
