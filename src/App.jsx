import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Profile from './pages/DailyTracker'
import DashboardContent from './components/DashboardContent'
import Goals from './pages/Goals'
import Quran from './pages/Quran'
import Charity from './pages/Charity'



function App() {

  // const timestamp = Date.now(); // ya API se mila hua
  // const date = new Date(timestamp);
  // console.log(date);

  return (
    <>
      <div >
        {/* <Dashboard /> */}
        <Routes>
        <Route path="/" element={<Dashboard  />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Goals" element={<Goals />} />
        <Route path="/Quran" element={<Quran />} />
        <Route path="/Charity" element={<Charity />} />
      </Routes>
      </div>
    
    </>
  )
}

export default App;

