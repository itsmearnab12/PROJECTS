import { useEffect, useState } from "react";
import axios from "axios"
import "./Transactionpage.css"


export function TransactionPage() {
    const [transactions, setTransactions] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        amount: "",
        type: "expense",
        category: "",
        note: "",
    });

    useEffect(() => {
        axios.get("http://localhost:4000/api/transaction", {
            withCredentials: true,
        }).then((res) => {
            setTransactions(res.data.transaction);
        }).catch((err) => console.log(err));
    }, []);

    const handleAddTransaction = async () => {
        try {
            const res = await axios.post(
                "http://localhost:4000/api/transaction/add",
                formData,
                { withCredentials: true }
            );

            if (res.data.success) {
                setTransactions([res.data.transaction, ...transactions]);

                setFormData({
                    amount: "",
                    type: "expense",
                    category: "",
                    note: "",
                });

                setShowForm(false);
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="transaction-container">
            <h1 className="title">Transactions</h1>
            <p className="title-subheading">Overview of your activities</p>
            <button className="add-btn" onClick={() => setShowForm(true)}>
                + Add New
            </button>
            {showForm && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Adding a new transaction</h3>
                        <p>Please fill the form below</p>
                        <input
                            type="number"
                            placeholder="Amount"
                            value={formData.amount}
                            onChange={(e) =>
                                setFormData({ ...formData, amount: e.target.value })
                            }
                        />
                        <select
                            value={formData.type}
                            onChange={(e) =>
                                setFormData({ ...formData, type: e.target.value })
                            }
                        >
                            <option value="expense">Expense</option>
                            <option value="income">Income</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Category"
                            value={formData.category}
                            onChange={(e) =>
                                setFormData({ ...formData, category: e.target.value })
                            }
                        />
                        <input
                            type="text"
                            placeholder="Add Note"
                            value={formData.note}
                            onChange={(e) =>
                                setFormData({ ...formData, note: e.target.value })
                            }
                        />
                        <div>
                            <button onClick={handleAddTransaction}>Save</button>
                            <button onClick={() => {
                                setShowForm(false);
                                setFormData({
                                    type: "expense",
                                    amount: "",
                                    category: "",
                                    note: "",
                                });
                            }}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
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
                        <tr key={t._id}>
                            <td>{new Date(t.createdAt).toLocaleDateString()}</td>
                            <td className={t.type === "income" ? "income" : "expense"}>
                                ₹ {t.amount}
                            </td>
                            <td>{t.category}</td>
                            <td>{t.type}</td>
                            <td>{t.note}</td>
                            <td>
                                <button className="delete-btn" onClick={async () => {
                                    await axios.delete(
                                        `http://localhost:4000/api/transaction/${t._id}`,
                                        { withCredentials: true }
                                    );

                                    setTransactions(transactions.filter((item) => item._id !== t._id));
                                }}
                                >Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};