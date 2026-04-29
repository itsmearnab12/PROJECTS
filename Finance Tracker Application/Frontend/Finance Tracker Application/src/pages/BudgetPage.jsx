import { useState, useEffect } from "react";
import { PieChart, Pie, Cell } from "recharts";
import axios from "axios";
import "./Budgetpage.css"

export function BudgetPage() {
    const [showModel, setShowModel] = useState(false);
    const [budgets, setBudgets] = useState([]);

    const [formData, setFormData] = useState({
        title: "",
        limit: "",
    });

    //Fetch budgets
    const fetchBudgets = async () => {
        try {
            const res = await axios.get(
                "http://localhost:4000/api/budget",
                {
                    withCredentials: true,
                }
            );

            if (res.data.success) {
                setBudgets(res.data.budgets);
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchBudgets();
    }, []);


    //Handle input
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    //Submit form
    const handleSubmit = async () => {
        try {
            const res = await axios.post(
                "http://localhost:4000/api/budget",
                formData,
                {
                    withCredentials: true,
                }
            );
            console.log("POST RESPONSE:", res.data); // 👈 ADD THIS

            if (res.data.success) {
                fetchBudgets();     // refresh cards
                setShowModel(false);
                setFormData({ title: "", limit: "" });
            }
        } catch (error) {
            console.log(error);
        }
    }

    const totalLimit = budgets.reduce(
        (sum, b) => sum + Number(b.limit || 0),
        0
    );

    const totalSpent = budgets.reduce(
        (sum, b) => sum + Number(b.spent || 0),
        0
    );

    const totalRemaining = totalLimit - totalSpent;

    const percentSpent = totalLimit > 0 ? (totalSpent / totalLimit) * 100 : 0;

    const chartData = [
        { name: "Spent", value: totalSpent },
        { name: "Remaining", value: totalRemaining },
    ]

    return (
        <>
            <div className="budget-container">
                <div className="budget-header">
                    <div>
                        <h2>Budget</h2>
                        <p>Create and Track Your Budget</p>
                    </div>
                    <button
                        className="budget-add-btn"
                        onClick={() => setShowModel(true)}
                    >
                        + Add new Budget
                    </button>
                </div>

                {/* Budget card */}
                <div className="budget-section">
                    <div className="budget-grid">
                        {budgets.map((b) => (
                            <div key={b._id} className="budget-card">
                                <h4>{b.title}</h4>
                                <p>Limit: ₹{b.limit}</p>
                                <p>Spent: ₹{b.spent}</p>
                                <p>Remaning: ₹{b.remaning}</p>
                            </div>
                        ))}
                    </div>

                    <div className="monthly-card">
                        <h3>Monthly Budget</h3>

                        <h2>₹{totalLimit}</h2>
                        <PieChart width={200} height={200}>
                            <Pie
                                data={chartData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                dataKey="value"
                                startAngle={90}
                                endAngle={-270}
                            >
                                <Cell fill="#8470FF" />
                                <Cell fill="#E5E7EB" />
                            </Pie>
                        </PieChart>

                        <p>₹{totalSpent} spent</p>
                        <p>{percentSpent.toFixed(0)}% spent</p>

                        <p className={percentSpent > 80 ? "danger" : "safe"}>
                            {percentSpent > 80 ? "⚠️ Need attention" : "✅ On track"}
                        </p>
                    </div>
                </div>

                {/* Budget form */}
                {showModel && (
                    <div className="Budget-model">
                        <div className="Budget-model-content">
                            <h3>Add New Budget</h3>

                            <input
                                type="text"
                                name="title"
                                placeholder="Category (e.g. Food)"
                                value={formData.title}
                                onChange={handleChange}
                            />

                            <input
                                type="number"
                                name="limit"
                                placeholder="Total Budget"
                                value={formData.limit}
                                onChange={handleChange}
                            />

                            <div className="modal-actions">
                                <button onClick={handleSubmit}>Save</button>
                                <button onClick={() => setShowModel(false)}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </>
    );
}

