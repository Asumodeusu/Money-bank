import { DataContent } from "../../types/types";


export const massageContent: DataContent[] = [
  {
    id: "bank",
    icon: "/svg/message/5.svg",
    label: "Банк СНГ",
    text: "Bank of America : 256486 is the au...",
    count: 1,
    // path: '/account' ← ДОБАВЬ ПУТИ
  },
    {
    id: "account",
    icon: "/svg/message/1.svg",
    label: "Аккаунт",
    count: 0,
    // path: '/account' ← ДОБАВЬ ПУТИ
  },
    {
    id: "alert",
    icon: "/svg/message/2.svg",
    label: "Поступления",
    count: 0,
    // path: '/account' ← ДОБАВЬ ПУТИ
  },
    {
    id: "pay",
    icon: "/svg/message/3.svg",
    label: "Платежи",
    count: 0,
    // path: '/account' ← ДОБАВЬ ПУТИ
  },
    {
    id: "withdraw",
    icon: "/svg/message/4.svg",
    label: "Чеки",
    count: 0,
    // path: '/account' ← ДОБАВЬ ПУТИ
  },

]