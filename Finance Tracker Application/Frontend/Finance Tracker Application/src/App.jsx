import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AnalyticsPage } from './pages/AnalyticsPage';
// import { BudgetPage } from './pages/BudgetPage';
import { DashboardPage } from './pages/DashboardPage';
import { GoalPage } from './pages/GoalPage';
import { TransactionPage } from './pages/TransactionPage';
import { WalletPage } from './pages/WalletPage';
import NotesPage from './pages/NotesPage';
import LoginPage from './pages/LoginPage';
import MaintenancePage from './pages/MaintenancePage';
// import ProtectedRoute from './components/ProtectedRoute';
import './App.css';


function App() {
  const isMaintenanceMode = false;

  if (isMaintenanceMode) {
    return <MaintenancePage />
  }

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/*"
        element={
          // <ProtectedRoute>
            <div className="flex min-h-screen">
              <Navbar />
              <div className="flex-1 p-6">
                <Routes>
                  <Route path="/" element={<DashboardPage />} />
                  <Route path="/Transaction" element={<TransactionPage />} />
                  <Route path="/Wallet" element={<WalletPage />} />
                  <Route path="/Goals" element={<GoalPage />} />
                  {/* <Route path="/Notes" element={<BudgetPage />} /> */}
                   <Route path="/Notes" element={<NotesPage />} />
                  <Route path="/Analytics" element={<AnalyticsPage />} />
                </Routes>
              </div>
            </div>
          // </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;