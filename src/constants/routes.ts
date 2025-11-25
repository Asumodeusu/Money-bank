export const ROUTES = {
  WELCOME: "/",
  SIGN: "/Sign",
  HOME: "/Home",
  SEARCH: "/Search",
  MESSAGE: "/Message",
  SETTING: "/Setting",
} as const; // объект со значениями конкретными - для автоматизации

export type RouteType = (typeof ROUTES)[keyof typeof ROUTES]; // тайп для дополнительной проверки, где нужны типы
