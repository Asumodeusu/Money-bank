import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ROUTES } from "../constants/routes";

import { MainLayout } from "../Layouts/MainLayout";
import { Home } from "../components/Pages/Home/Home";
import { Sign } from "../components/Pages/Sign/Sign";
import { Welcome } from "../components/Pages/WelcomeScreen/Welcome";
import { Search } from "../components/Pages/Search/Search";
import { Message } from "../components/Pages/Message/Message";
import { Setting } from "../components/Pages/SettingTab/Setting";

export default function AppRoute() {
  return (
    <BrowserRouter>
      <div className="mobile-screen">
        <Routes>
          <Route path={ROUTES.WELCOME} element={<Welcome />} />
          <Route path={ROUTES.SIGN} element={<Sign />} />
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route
            path={ROUTES.SEARCH}
            element={
              <MainLayout>
                <Search />
              </MainLayout>
            }
          />
          <Route
            path={ROUTES.MESSAGE}
            element={
              <MainLayout>
                <Message />
              </MainLayout>
            }
          />
          <Route
            path={ROUTES.SETTING}
            element={
              <MainLayout>
                <Setting />
              </MainLayout>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
