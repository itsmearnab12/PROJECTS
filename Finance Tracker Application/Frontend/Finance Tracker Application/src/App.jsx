import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { BudgetPage } from './pages/BudgetPage';
import { DashboardPage } from './pages/DashboardPage';
import { GoalPage } from './pages/GoalPage';
import { TransactionPage } from './pages/TransactionPage';
import { WalletPage } from './pages/WalletPage';
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<DashboardPage />}></Route>
        <Route path="/Transaction" element={<TransactionPage />}></Route>
        <Route path="/Wallet" element={<WalletPage />}></Route>
        <Route path="/Goals" element={<GoalPage />}></Route>
        <Route path="/Budget" element={<BudgetPage />}></Route>
        <Route path="/Analytics" element={<AnalyticsPage />}></Route>
      </Routes>
    </>
  )
}

export default App
