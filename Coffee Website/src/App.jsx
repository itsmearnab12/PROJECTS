import { Routes, Route } from 'react-router-dom'
import { Homepage } from './pages/Homepage'
import { Menupage } from './pages/Menupage'
import { Storypage } from './pages/Storypage'
import { Locationpage } from './pages/Locationpage'
import { Contactpage } from './pages/Contactpage'
import Header from './components/Header'
import Maintenance from "./pages/Maintenance.jsx";
import './App.css'

const MAINTENANCE_MODE = false;

function App() {
  if (MAINTENANCE_MODE) {
    return <Maintenance />;
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/Menu" element={<Menupage />}></Route>
        <Route path="/Story" element={<Storypage />}></Route>
        <Route path="/Location" element={<Locationpage />}></Route>
        <Route path="/Contact" element={<Contactpage />}></Route>
      </Routes>
    </>
  )
}

export default App
