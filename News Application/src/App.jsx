import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import BusinessPage from './pages/BusinessPage'
import PoliticsPage from './pages/PoliticsPage'
import SportsPage from './pages/SportsPage'
import TechnologyPage from './pages/TechnologyPage'
import Header from './components/Header'

function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path='/Business' element={<BusinessPage />}></Route>
        <Route path='/Politics' element={<PoliticsPage />}></Route>
        <Route path='/Technology' element={<TechnologyPage />}></Route>
        <Route path='/Sports' element={<SportsPage />}></Route>
      </Routes>
    </>
  )
}

export default App
