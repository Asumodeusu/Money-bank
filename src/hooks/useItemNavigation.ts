import { useNavigate } from "react-router-dom";
import { DataContent } from "../types/types";
import { useTranslation } from "react-i18next";

export const useItemNavigation = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const navigateToItem = (item: DataContent) => {
    if (!item.path) {
      alert(t("hook.alert"));
      return;
    }
    navigate(item.path);
  };

  return { navigateToItem };
};
