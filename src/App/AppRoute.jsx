import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../component/home/Home'; //home
import { MobileLayout } from '../component/Layout/MobileLayout';

const Cards = () => <div>Карты (скоро)</div>
const Transfers = () => <div>Переводы (скоро)</div> 
const Profile = () => <div>Профиль (скоро)</div>

export default function AppRoute() {

  return (
    <BrowserRouter>
      <MobileLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/transfers" element={<Transfers />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </MobileLayout>
    </BrowserRouter>
  );
}