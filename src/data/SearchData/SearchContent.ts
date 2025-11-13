interface SearchItem {
  id: string;
  icon: string;
  label: string;
  path?: string;
  text: string;
}

export const menuContent: SearchItem[] = [
  {
    id: "account",
    icon: "/svg/pictureSearch/472.svg",
    label: "Branch",
    text: "Search for branch",
    // path: '/account' ← ДОБАВЬ ПУТИ
  },
  {
    id: "Interest",
    icon: "/svg/pictureSearch/478.svg",
    label: "Interest rate",
    text: "Search for interest rate",
  },
  {
    id: "ExchangeRate",
    icon: "/svg/pictureSearch/477.svg",
    label: "Exchange rate",
    text: "Search for exchange rate",
  },
  {
    id: "Exchange",
    icon: "/svg/pictureSearch/490.svg",
    label: "Exchange",
    text: "Exchange amount of money",
  }
];
