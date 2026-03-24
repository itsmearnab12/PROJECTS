import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { BudgetPage } from './pages/BudgetPage';
import { DashboardPage } from './pages/DashboardPage';
import { GoalPage } from './pages/GoalPage';
import { TransactionPage } from './pages/TransactionPage';
import { WalletPage } from './pages/WalletPage';
import LoginPage from './pages/LoginPage';
import './App.css'


function App() {

  return (
    <>
      <div className='flex'>
        <div>
          <Navbar />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<DashboardPage />}></Route>
            <Route path="/Login" element={<LoginPage />}></Route>
            <Route path="/Transaction" element={<TransactionPage />}></Route>
            <Route path="/Wallet" element={<WalletPage />}></Route>
            <Route path="/Goals" element={<GoalPage />}></Route>
            <Route path="/Budget" element={<BudgetPage />}></Route>
            <Route path="/Analytics" element={<AnalyticsPage />}></Route>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
