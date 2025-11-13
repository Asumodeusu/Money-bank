import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import { Home } from "../components/Home/Home"; //home
import { MobileLayout } from "../components/Layout/MobileLayout";
import { Sign } from "../components/Sign/Sign";
import { Welcome } from "../components/WelcomeScreen/Welcome";
import { Search } from "../components/Search/Search";
import './App.css'

const Message = () => <div>Переводы (скоро)</div>;
const Seting = () => <div>Профиль (скоро)</div>;

export default function AppRoute() {
  return (
    <BrowserRouter>
      <MobileLayout>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/Sign" element={<Sign />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Maseage" element={<Message />} />
          <Route path="/Seting" element={<Seting />} />
        </Routes>
      </MobileLayout>
    </BrowserRouter>
  );
}
