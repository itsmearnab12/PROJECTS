import { Cards } from "../components/Cards";
import MoneyFlowChart from "../components/charts/MoneyFlowChart.jsx";
import RecentTransactions from "../components/transactions/RecentTransactions.jsx";
import "./Dashboardpage.css"
import { useEffect, useState } from "react";
import axios from "axios";

export function DashboardPage() {
    const [user, setUser] = useState(null);
    const [summary, setSummary] = useState({
        income: 0,
        expense: 0,
        balance: 0,
    })
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/api/auth/me", {
            withCredentials: true
        })
            .then((res) => {
                console.log(res.data);
                if (res.data.success) {
                    setUser(res.data.user);
                }
            })
            .catch((err) => console.log(err));

        axios.get("http://localhost:4000/api/transaction/summary", {
            withCredentials: true
        })
            .then((res) => {
                if (res.data.success) {
                    setSummary(res.data);
                }
            })
            .catch((err) => console.log(err));

        axios.get("http://localhost:4000/api/transaction", {
            withCredentials: true
        })
            .then((res) => {
                if (res.data.success) {
                    setTransactions(res.data.transaction);
                }
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="dashboard-header">
            <h1>Welcome {user ? user.name : "User"} to Fintech</h1>
            <p>It is the best time to manage your finance</p>
            <div className="Cards-block">
                <Cards
                    title="Total balance"
                    amount={summary.balance}
                    percentage={0}
                    isPositive={true}
                />
                <Cards
                    title="Income"
                    amount={summary.income}
                    percentage={0}
                    isPositive={true}
                />
                <Cards
                    title="Expense"
                    amount={summary.expense}
                    percentage={0}
                    isPositive={false}
                />
                <Cards
                    title="Total savings"
                    amount={summary.balance}
                    percentage={0}
                    isPositive={true}
                />
            </div>
            <div className="chart-section">
                <MoneyFlowChart transactions={transactions} />
            </div>
            <div className="recettransaction">
                <RecentTransactions transactions={transactions} />
            </div>
        </div>
    );
}