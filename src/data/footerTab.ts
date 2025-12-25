import { DataContent } from "../types/types";
import { ROUTES } from "../constants/routes";
import i18n from 'i18next';

export const tabs: DataContent[] = [
  { id: "home", 
    icon: "/svg/Icon/45.svg", 
    label: i18n.t('footer.home', 'Главная'), 
    path: ROUTES.HOME },
  {
    id: "search",
    icon: "/svg/Icon/44.svg",
    label: i18n.t('footer.search', 'Финансы'), 
    path: ROUTES.SEARCH,
  },
  {
    id: "message",
    icon: "/svg/Icon/42.svg",
    label: i18n.t('footer.message', 'Сообщения'), 
    path: ROUTES.MESSAGE,
  },
  {
    id: "setting",
    icon: "/svg/Icon/43.svg",
    label: i18n.t('footer.setting', 'Настройки'), 
    path: ROUTES.SETTING,
  },
];
