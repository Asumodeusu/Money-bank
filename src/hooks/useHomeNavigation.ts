import { useItemNavigation } from "./useItemNavigation";
import { useTheme } from "./useTheme";
import { useBalance } from "./useBalance";

export const useHomeNavigation = () => {
  const { navigateToItem } = useItemNavigation();
  const { switchTheme } = useTheme();
  const { resetBalances } = useBalance();

  const handleItemClick = (item: any) => {
    if (item.id === "theme") {
      switchTheme();
    } else if (item.id === "reset") {
      resetBalances();
      alert("Балансы сброшены!");
    } else {
      navigateToItem(item);
    }
  };

  return { handleItemClick };
};
