export const ROUTES = {
  WELCOME: "/",
  SIGN: "/Sign",
  SIGN_IN: "/SignIn",
  HOME: "/Home",
  SEARCH: "/Search",
  SEARCH_MAP: "/Search/map",
  SEARCH_CURRENCY: "/Search/currency",
  MESSAGE: "/Message",
  SETTING: "/Setting",
} as const; // константа с сылками юрл - для автоматизации

// export type RouteType = (typeof ROUTES)[keyof typeof ROUTES]; тайп для дополнительной проверки, где нужны типы
