import { useEffect, useState } from "react";
import axios from "axios"
import "./Transactionpage.css"


export function TransactionPage() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/api/transaction", {
            withCredentials: true,
        }).then((res) => {
            setTransactions(res.data.transaction);
        }).catch((err) => console.log(err));
    }, []);

    return (
        <div className="transaction-container">
            <h1 className="title">Transaction</h1>
            <table className="transaction-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Type</th>
                        <th>Note</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((t) => (
                        <tr>
                            <td>{new Date(t.createdAt).toLocaleDateString()}</td>
                            <td className={t.type === "income" ? "income" : "expense"}>
                                ₹ {t.amount}
                            </td>
                            <td>{t.category}</td>
                            <td>{t.type}</td>
                            <td>{t.note}</td>
                            <td>
                                <button className="delete-btn">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};