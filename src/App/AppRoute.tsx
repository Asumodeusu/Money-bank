import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "../constants/routes";

import {
  Home,
  Sign,
  Welcome,
  Search,
  Setting,
  Message,
  Map,
  Currency,
} from "../components/Pages";
import { MainLayout } from "../Layouts/MainLayout";

// Ленивая загрузка тяжелых компонентов, чтобы не перегружать устройства и это хорошая практика
// const Search = lazy(() => import('../components/Pages/Search/Search'));

export default function AppRoute() {
  return (
    <BrowserRouter>
      <div className="mobile-screen">
        <Routes>
          <Route element={<MainLayout />}>
            <Route path={ROUTES.WELCOME} element={<Welcome />} />
            <Route path={ROUTES.SIGN} element={<Sign />} />
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.SEARCH} element={<Search />} />
            <Route path={ROUTES.SEARCH_MAP} element={<Map />} />
            <Route path={ROUTES.SEARCH_CURRENCY} element={<Currency />} />
            <Route path={ROUTES.MESSAGE} element={<Message />} />
            <Route path={ROUTES.SETTING} element={<Setting />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
