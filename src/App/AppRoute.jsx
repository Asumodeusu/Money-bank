import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import { Home } from "../components/Home/Home"; //home
import { MobileLayout } from "../components/Layout/MobileLayout";
import { Sign } from "../components/Sign/Sign";
import { Welcome } from "../components/WelcomeScreen/Welcome";
import { Search } from "../components/Search/Search";
import { Message } from "../components/Message/Message";
import { Setting } from "../components/SettingTab/Setting";
import './App.css'

export default function AppRoute() {
  return (
    <BrowserRouter>
      <MobileLayout>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/Sign" element={<Sign />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Message" element={<Message />} />
          <Route path="/Setting" element={<Setting />} />
        </Routes>
      </MobileLayout>
    </BrowserRouter>
  );
}
