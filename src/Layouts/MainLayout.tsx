import { Footer } from "../components/UI/FooterTab/FooterTab";
import { Header } from "../components/UI/HeaderBack/HeaderBack";
import styles from "./Layout.module.css";

import { ReactNode } from "react";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.mobileLayout}>  {/* ← Наследует размеры */}
      <Header/>
      <main className={styles.layoutContent}>
        {children}
      </main>
      <Footer />
    </div>
  );
};