import { useEffect, useState } from "react";
import axios from "axios";
import "./Transactionpage.css";

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
        axios
            .get("http://localhost:4000/api/transaction", {
                withCredentials: true,
            })
            .then((res) => {
                setTransactions(res.data.transaction || []);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleAddTransaction = async () => {
        try {
            const res = await axios.post(
                "http://localhost:4000/api/transaction/add",
                formData,
                { withCredentials: true }
            );

            if (res.data.success) {
                setTransactions((prev) => [
                    res.data.transaction,
                    ...prev,
                ]);

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
            <p className="title-subheading">
                Overview of your activities
            </p>

            <button
                className="add-btn"
                onClick={() => setShowForm(true)}
            >
                + Add New
            </button>

            {showForm && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Add New Transaction</h3>

                        <div className="form-lineone">
                            <div className="form-group">
                                <label>Type</label>

                                <select
                                    value={formData.type}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            type: e.target.value,
                                        })
                                    }
                                >
                                    <option value="expense">
                                        Expense
                                    </option>

                                    <option value="income">
                                        Income
                                    </option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Amount</label>

                                <input
                                    type="number"
                                    value={formData.amount}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            amount:
                                                e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Category</label>

                            <input
                                type="text"
                                value={formData.category}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        category:
                                            e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div className="form-group">
                            <label>Note</label>

                            <input
                                type="text"
                                value={formData.note}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        note: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div className="form-buttons">
                            <button
                                className="cancel-btn"
                                onClick={() =>
                                    setShowForm(false)
                                }
                            >
                                Cancel
                            </button>

                            <button
                                className="save-btn"
                                onClick={
                                    handleAddTransaction
                                }
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="transaction-card">
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
                                <td>
                                    {new Date(
                                        t.createdAt
                                    ).toLocaleDateString()}
                                </td>

                                <td
                                    className={`amount ${t.type ===
                                        "income"
                                        ? "income-amount"
                                        : "expense-amount"
                                        }`}
                                >
                                    {t.type === "income"
                                        ? "+"
                                        : "-"}
                                    ₹{t.amount}
                                </td>

                                <td>
                                    <span className="category-pill">
                                        {t.category}
                                    </span>
                                </td>

                                <td>
                                    <span
                                        className={`type-badge ${t.type ===
                                            "income"
                                            ? "income-badge"
                                            : "expense-badge"
                                            }`}
                                    >
                                        {t.type}
                                    </span>
                                </td>

                                <td>{t.note}</td>

                                <td>
                                    <button
                                        className="delete-btn"
                                        onClick={async () => {
                                            await axios.delete(
                                                `http://localhost:4000/api/transaction/${t._id}`,
                                                {
                                                    withCredentials:
                                                        true,
                                                }
                                            );

                                            setTransactions(
                                                (prev) =>
                                                    prev.filter(
                                                        (
                                                            item
                                                        ) =>
                                                            item._id !==
                                                            t._id
                                                    )
                                            );
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}