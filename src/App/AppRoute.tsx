import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "../Layouts/MainLayout";
import { ROUTES } from "../constants/routes";
import { Home, Sign, Welcome, SignIn } from "../Pages";

// Ленивая загрузка тяжелых компонентов, чтобы не перегружать устройства
import { lazy, Suspense } from "react";
import { LAZY } from "../constants/lazyApp";
const Search = lazy(() => import("../Pages/Search/Search"));
const Map = lazy(() => import("../Pages/Search/Map/Map"));
const Currency = lazy(() => import("../Pages/Search/Currency/Currency"));
const Exchange = lazy(() => import("../Pages/Search/Exchange/Exchange"));
const Message = lazy(() => import("../Pages/Message/Message"));
const Setting = lazy(() => import("../Pages/SettingTab/Setting"));

export default function AppRoute() {
  return (
    <BrowserRouter>
      <div className="mobile-screen">
        <Routes>
          <Route element={<MainLayout />}>
            <Route path={ROUTES.WELCOME} element={<Welcome />} />
            <Route path={ROUTES.SIGN} element={<Sign />} />
            <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
            <Route path={ROUTES.HOME} element={<Home />} />

            <Route
              path={ROUTES.SEARCH}
              element={
                <Suspense fallback={<div>{LAZY.SEARCH}</div>}>
                  <Search />
                </Suspense>
              }
            />
            <Route
              path={ROUTES.SEARCH_MAP}
              element={
                <Suspense fallback={<div>{LAZY.MAP}</div>}>
                  <Map />
                </Suspense>
              }
            />
            <Route
              path={ROUTES.SEARCH_CURRENCY}
              element={
                <Suspense fallback={<div>{LAZY.CURRENCY}</div>}>
                  <Currency />
                </Suspense>
              }
            />
            <Route
              path={ROUTES.SEARCH_EXCHANGE}
              element={
                <Suspense fallback={<div>{LAZY.EXCHANGE}</div>}>
                  <Exchange />
                </Suspense>
              }
            />
            <Route
              path={ROUTES.MESSAGE}
              element={
                <Suspense fallback={<div>{LAZY.MESSAGE}</div>}>
                  <Message />
                </Suspense>
              }
            />
            <Route
              path={ROUTES.SETTING}
              element={
                <Suspense fallback={<div>{LAZY.SETTING}</div>}>
                  <Setting />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
