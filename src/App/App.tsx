import { BalanceProvider } from "../context/BalanceProvider";
import AppRoute from "./AppRoute";

export default function App() {
  return (
    <div className="mobile-app">
      <BalanceProvider>
        <AppRoute />
      </BalanceProvider>
    </div>
  );
}
