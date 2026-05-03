import { useEffect, useState } from "react";
import { Cards } from "../components/Cards";
import axios from "axios";
import "./Analyticspage.css";
import { BalanceOverviewChart } from "../components/charts/BalanceOverviewChart";
import { BudgetVsExpenseChart } from "../components/charts/BudgetVsExpenseChart";
import { StatisticsChartincomeexpense } from "../components/charts/StatisticsChartincomeexpense";
export function AnalyticsPage() {
    const [summary, setSummary] = useState({
        income: 0,
        expense: 0,
        balance: 0,
    });

    const [transactions, setTransactions] = useState([]);
    const [budgets, setBudgets] = useState([]);
    const [type, setType] = useState("expense");

    useEffect(() => {
        axios.get("http://localhost:4000/api/transaction/summary", {
            withCredentials: true
        })
            .then((res) => {
                if (res.data.success) {
                    setSummary(res.data);
                }
            })
            .catch((error) => console.log(error));

        axios.get("http://localhost:4000/api/transaction", {
            withCredentials: true,
        })
            .then((res) => {
                console.log("TRANSACTION API RESPONSE:", res.data);


                if (res.data.success) {
                    setTransactions(res.data.transaction)
                }
            })
            .catch((error) => console.log(error));

        axios.get("http://localhost:4000/api/budget", {
            withCredentials: true,
        })
            .then((res) => {
                console.log("BUDGET API:", res.data);

                if (res.data.success) {
                    setBudgets(res.data.budgets);
                }
            })
            .catch((err) => console.log(err));
    }, [])
    return (
        <>
            <div className="analytics-cards">
                <Cards
                    title="Total Balance"
                    amount={summary.balance}
                    percentage={0}
                    isPositive={true}
                    subtitle="Compared to last month"
                />

                <Cards
                    title="Income"
                    amount={summary.income}
                    percentage={0}
                    isPositive={true}
                    subtitle="Compared to last month"
                />

                <Cards
                    title="Expense"
                    amount={summary.expense}
                    percentage={0}
                    isPositive={false}
                    subtitle="Compared to last month"
                />
            </div>
            <div className="analytics-main">
                <div className="analytics-left">
                    <div className="chart-box">
                        <h3>Total Balance Overview</h3>
                        <BalanceOverviewChart transactions={transactions} />
                    </div>

                    <div className="chart-box">
                        <h3>Comparing Budget and Expense</h3>
                        <BudgetVsExpenseChart
                            transactions={transactions}
                            budgets={budgets}
                        />
                    </div>
                </div>

                <div className="analytics-right">
                    <div className="chart-box">
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <h3>Statistics</h3>

                            <select value={type} onChange={(e) => setType(e.target.value)}>
                                <option value="expense">Expense</option>
                                <option value="income">Income</option>
                            </select>
                        </div>

                        <StatisticsChartincomeexpense transactions={transactions} type={type} />
                    </div>
                </div>
            </div>
        </>
    );
}