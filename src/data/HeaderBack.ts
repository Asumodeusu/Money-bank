import { DataContent } from "../types/types";
import { ROUTES } from "../constants/routes";

export const backs: DataContent[] = [
  { id: "sign", label: "header.sign", path: ROUTES.SIGN },
  { id: "signIn", label: "header.signIn", path: ROUTES.SIGN_IN },
  { id: "search", label: "header.search", path: ROUTES.SEARCH },
  { id: "search_map", label: "header.search_map", path: ROUTES.SEARCH_MAP },
  { id: "search_currency", label: "header.search_currency", path: ROUTES.SEARCH_CURRENCY },
  { id: "search_exchange", label: "header.search_exchange", path: ROUTES.SEARCH_EXCHANGE },
  { id: "message", label: "header.message", path: ROUTES.MESSAGE },
  { id: "setting", label: "header.setting", path: ROUTES.SETTING },
];
