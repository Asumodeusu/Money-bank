interface MenuItem {
  id: string;
  icon: string;
  label: string;
  path?: string;
  text?: string;
  count: number;
}


export const massageContent: MenuItem[] = [
  {
    id: "bank",
    icon: "/svg/message/5.svg",
    label: "Bank of America",
    text: "Bank of America : 256486 is the au...",
    count: 0,
    // path: '/account' ← ДОБАВЬ ПУТИ
  },
    {
    id: "account",
    icon: "/svg/message/1.svg",
    label: "Account",
    count: 0,
    // path: '/account' ← ДОБАВЬ ПУТИ
  },
    {
    id: "alert",
    icon: "/svg/message/2.svg",
    label: "Alert",
    count: 0,
    // path: '/account' ← ДОБАВЬ ПУТИ
  },
    {
    id: "pay",
    icon: "/svg/message/3.svg",
    label: "Paypal",
    count: 5,
    // path: '/account' ← ДОБАВЬ ПУТИ
  },
    {
    id: "withdraw",
    icon: "/svg/message/4.svg",
    label: "Withdraw",
    count: 0,
    // path: '/account' ← ДОБАВЬ ПУТИ
  },

]