import styles from "./Layout.module.css";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom"; // для добавления пейджев
import { Footer } from "../components/UI/FooterTab/FooterTab";
import { Header } from "../components/UI/HeaderBack/HeaderBack";
import { LAYOUT_CONFIG } from "../constants/layouts";

export const MainLayout = () => {
  const location = useLocation();
  const config = LAYOUT_CONFIG[
    location.pathname as keyof typeof LAYOUT_CONFIG
  ] || {
    showHeader: true, // Дефолтные значения
    showFooter: true,
  }; // дает возможность переиспользовать UI компоненты при отресовке для разных состояний пейдж

  return (
    <div className={styles.mobileLayout}>
      {" "}
      {/* ← Наследует размеры */}
      {config?.showHeader && <Header />}
      <main className={styles.layoutContent}>
        <Outlet />
      </main>
      {config?.showFooter && <Footer />}
    </div>
  );
};
