import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "./RecentTransactions.css"
const RecentTransactions = ({ transactions = [], limit = 3 }) => {
    const displayedTransactions = transactions.slice(0, limit);

    return (
        <div className="recent-container">
            <div className="recent-header">
                <h2 className="recent-title">Recent transactions</h2>
                <a href="/Transaction">See all<MdOutlineKeyboardArrowRight /></a>
            </div>
            <table className="recent-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {displayedTransactions.map((t) => (
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
    )
}

export default RecentTransactions;