interface MenuItem {
  id: string;
  icon?: string;
  label: string;
  path?: string;
  text?: string;
}


export const settingContent: MenuItem[] = [
  {
    id: "Password",
    icon: "/svg/Icon/38.svg",
    label: "Password",
    // path: '/account' ← ДОБАВЬ ПУТИ
  },
    {
    id: "ID",
    icon: "/svg/Icon/38.svg",
    label: "Touch ID",
    // path: '/account' ← ДОБАВЬ ПУТИ
  },
    {
    id: "Languages",
    icon: "/svg/Icon/38.svg",
    label: "Languages",
    // path: '/account' ← ДОБАВЬ ПУТИ
  },
    {
    id: "App",
    icon: "/svg/Icon/38.svg",
    label: "App information",
    // path: '/account' ← ДОБАВЬ ПУТИ
  },
  //   {
  //   id: "Customer",
  //   label: "Customer care",
  //   text: "77777186",
  // },

]