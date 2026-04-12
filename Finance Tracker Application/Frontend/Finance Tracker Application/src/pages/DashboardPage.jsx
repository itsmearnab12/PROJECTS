import { Cards } from "../components/Cards";
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
    const [recentTransactions, setRecentTransactions] = useState([]);

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
                    setRecentTransactions(res.data.transaction.slice(0, 5));
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
                    amount={summary.income}
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
            <div>
                <h2>Recent Transaction</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Category</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentTransactions.map((t) => (
                            <tr key={t._id}>
                                <td>{new Date(t.createdAt).toLocaleDateString()}</td>
                                <td className={t.type === "income" ? "income-text" : "expense-text"}>
                                    ₹ {t.amount}
                                </td>
                                <td>{t.category}</td>
                                <td>{t.type}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}