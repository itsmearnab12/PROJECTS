import { useState, useEffect } from "react";
import { PieChart, Pie, Cell } from "recharts";
import axios from "axios";
import { MostExpenses } from "../components/MostExpenses";
import { MdOutlineCancel } from "react-icons/md";
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
            console.log("POST RESPONSE:", res.data);

            if (res.data.success) {
                fetchBudgets();
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
                        {budgets.map((b) => {
                            const spent = Number(b.spent || 0);
                            const limit = Number(b.limit || 0);
                            const remaining = limit - spent;

                            const percentSpent = limit > 0 ? Math.min((spent / limit) * 100, 100) : 0;

                            const cardChartData = [
                                { name: "Spent", value: spent },
                                { name: "Remaining", value: remaining > 0 ? remaining : 0 },
                            ];

                            return (
                                <div key={b._id} className="budget-card">
                                    <div className="budget-card-top">
                                        <h4>{b.title}</h4>
                                        <button
                                        className="budgetcard-delbtn"
                                            onClick={async () => {
                                                try {
                                                    const res = await axios.delete(
                                                        `http://localhost:4000/api/budget/${b._id}`,
                                                        { withCredentials: true }
                                                    );

                                                    if (res.data.success) {
                                                        fetchBudgets();
                                                    }
                                                } catch (error) {
                                                    console.log(error);
                                                }
                                            }}
                                        >
                                            <MdOutlineCancel />
                                        </button>
                                    </div>

                                    <div className="budget-card-content">
                                        <div className="mini-chart-wrapper">
                                            <PieChart width={110} height={110}>
                                                <Pie
                                                    data={cardChartData}
                                                    cx="50%"
                                                    cy="50%"
                                                    innerRadius={38}
                                                    outerRadius={48}
                                                    dataKey="value"
                                                >
                                                    <Cell fill="#8470FF" />
                                                    <Cell fill="#ECE9FF" />
                                                </Pie>
                                            </PieChart>

                                            <div className="mini-chart-center">
                                                <p>{Math.round(percentSpent)}%</p>
                                                <span>spent</span>
                                            </div>
                                        </div>

                                        <div className="budget-details">
                                            <p className="remaining-label">Left</p>
                                            <h3>₹{remaining}</h3>
                                            <p className="limit-text">/₹{limit}</p>

                                            <p className={percentSpent > 80 ? "danger" : "safe"}>
                                                {percentSpent > 80
                                                    ? "⚠ Need attention"
                                                    : "✅ On track"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="Budget-section-two">
                        <div className="monthly-card">
                            <div className="chart-wrapper">
                                <h3>Monthly Budget</h3>

                                <h2>₹{totalLimit}</h2>
                                <PieChart width={300} height={180}>
                                    <Pie
                                        data={chartData}
                                        cx="50%"
                                        cy="60%"
                                        startAngle={180}
                                        endAngle={0}
                                        innerRadius={70}
                                        outerRadius={90}
                                        dataKey="value"
                                    >
                                        <Cell fill="#8470FF" />
                                        <Cell fill="#E5E7EB" />
                                    </Pie>
                                </PieChart>

                                <p>₹{totalSpent} spent</p>

                                <p className={percentSpent > 80 ? "danger" : "safe"}>
                                    {percentSpent > 80 ? "⚠️ Need attention" : "✅ On track"}
                                </p>

                                <div className="chart-center">
                                    <h3>₹{totalRemaining}</h3>
                                    <p>Remaining</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <MostExpenses />
                        </div>
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

