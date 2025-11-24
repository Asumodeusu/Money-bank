import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../components/Pages/Home/Home";

import { MainLayout } from "../Layouts/MainLayout";

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
          <Route path="/" element={<Welcome />} />
          <Route path="/Sign" element={<Sign />} />
          <Route path="/Home" element={<Home />} />
          <Route
            path="/Search"
            element={
              <MainLayout>
                <Search />
              </MainLayout>
            }
          />
          <Route
            path="/Message"
            element={
              <MainLayout>
                <Message />
              </MainLayout>
            }
          />
          <Route
            path="/Setting"
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
