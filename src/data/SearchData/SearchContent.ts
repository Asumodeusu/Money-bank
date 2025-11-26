import { DataContent } from "../../types/types";
import { ROUTES } from "../../constants/routes";

export const menuContent: DataContent[] = [
  {
    id: "account",
    icon: "/svg/pictureSearch/472.svg",
    label: "Геолакация",
    text: "Локация банка",
    path: ROUTES.SEARCH_MAP
  },
  {
    id: "ExchangeRate",
    icon: "/svg/pictureSearch/477.svg",
    label: "Валюта",
    text: "Курс валют",
  },
  {
    id: "Exchange",
    icon: "/svg/pictureSearch/490.svg",
    label: "Обмен валюты",
    text: "Покупка валюты",
  }
];
