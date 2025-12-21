import { useNavigate } from "react-router-dom";
import { DataContent } from "../types/types";

export const useItemNavigation = () => {
  const navigate = useNavigate();

  const navigateToItem = (item: DataContent) => {
    if (!item.path) {
      alert("В разработке");
      return;
    }
    navigate(item.path);
  };

  return { navigateToItem };
};
