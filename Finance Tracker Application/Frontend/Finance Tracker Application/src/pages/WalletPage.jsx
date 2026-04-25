import { useEffect, useState } from "react";
import "./Walletpage.css"
import RecentTransactions from "../components/transactions/RecentTransactions.jsx";
import WalletLineChart from "../components/charts/WalletLineChart.jsx";
import StatisticsChart from "../components/charts/StatisticsChart.jsx";
import axios from "axios";


export function WalletPage() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
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
        <>
            <div>
                <h3>Wallet</h3>
                <h5>Overview of your balance and accounts</h5>
            </div>
            <div className="Walletpage-charts">
                <div className="Walletpage-left">
                    <WalletLineChart transactions={transactions} />
                    <RecentTransactions transactions={transactions} />
                </div>
                <div className="Walletpage-right">
                    <StatisticsChart transactions={transactions} />
                </div>
            </div>
        </>
    );
}