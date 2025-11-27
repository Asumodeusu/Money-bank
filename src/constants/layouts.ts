// константа для переиспользования UI компонентов для роутов
import { ROUTES } from "./routes";

export const LAYOUT_CONFIG = {
  [ROUTES.WELCOME]: { showHeader: false, showFooter: false },
  [ROUTES.SIGN]: { showHeader: true, showFooter: false },
  [ROUTES.HOME]: { showHeader: false, showFooter: true },
  [ROUTES.SEARCH]: { showHeader: true, showFooter: true },
  [ROUTES.SEARCH_MAP]: { showHeader: true, showFooter: false },
  [ROUTES.SEARCH_CURRENCY]: { showHeader: true, showFooter: false },
  [ROUTES.MESSAGE]: { showHeader: true, showFooter: true },
  [ROUTES.SETTING]: { showHeader: true, showFooter: true },
} as const;

// export type LayoutPath = keyof typeof LAYOUT_CONFIG;