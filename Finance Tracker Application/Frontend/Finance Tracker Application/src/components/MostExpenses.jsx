import { useEffect, useMemo, useState } from "react";
import "./MostExpenses.css"
import axios from "axios";

export function MostExpenses() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetchTransactions();
    }, []);

    const fetchTransactions = async () => {
        try {
            const res = await axios.get("http://localhost:4000/api/transaction", {
                withCredentials: true,
            });

            console.log("API RESPONSE:", res.data);

            if (res.data.success) {
                setTransactions(res.data.transaction);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const mostExpenses = useMemo(() => {
    console.log("1️⃣ Raw Transactions:", transactions);

    if (!transactions || transactions.length === 0) return [];

    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;

    // ✅ Filter only expenses (safe check)
    const expenses = transactions.filter(
        (t) => t.type && t.type.toLowerCase() === "expense"
    );

    console.log("2️⃣ Expenses Only:", expenses);

    // ✅ Helper to safely extract date
    const getDate = (t) => {
        if (t.createdAt) return new Date(t.createdAt);
        if (t.date) return new Date(t.date);
        return null;
    };

    // ✅ Current Month
    const currentMonthExpenses = expenses

    console.log("3️⃣ After Month Filter:", currentMonthExpenses);

    // ✅ Previous Month
    const prevMonthExpenses = expenses.filter((t) => {
        const d = getDate(t);
        if (!d) return false;
        return d.getMonth() === prevMonth && d.getFullYear() === prevYear;
    });

    // ✅ Group by category
    const groupByCategory = (data) => {
        return data.reduce((acc, curr) => {
            if (!curr.category) return acc;

            if (!acc[curr.category]) {
                acc[curr.category] = 0;
            }
            acc[curr.category] += Number(curr.amount) || 0;

            return acc;
        }, {});
    };

    const currentTotals = groupByCategory(currentMonthExpenses);
    const prevTotals = groupByCategory(prevMonthExpenses);

    console.log("4️⃣ Grouped Totals:", currentTotals);

    // ✅ Final transformation
    const sorted = Object.entries(currentTotals)
        .map(([category, amount]) => {
            const prev = prevTotals[category] || 0;

            let change = 0;
            if (prev > 0) {
                change = ((amount - prev) / prev) * 100;
            }

            return {
                category,
                amount,
                change: Number(change.toFixed(1)),
            };
        })
        .sort((a, b) => b.amount - a.amount)
        .slice(0, 6);

    console.log("5️⃣ Final Output:", sorted);

    return sorted;
}, [transactions]);

    return (
        <>
            <div className="most-expenses-card">
                <div className="header">
                    <h3>Most expenses</h3>
                    <select>
                        <option>This Month</option>
                    </select>
                </div>

                <div className="expense-list">
                    {mostExpenses.map((item, index) => (
                        <div key={index} className="expense-item">
                            <div className="left">
                                <div className="icon"></div>
                                <div>
                                    <p className="category">{item.category}</p>
                                    <p className="amount">₹{item.amount}</p>
                                </div>
                            </div>

                            <div
                                className={`change ${item.change >= 0 ? "positive" : "negative"
                                    }`}
                            >
                                {item.change >= 0 ? "↑" : "↓"} {Math.abs(item.change)}%
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}