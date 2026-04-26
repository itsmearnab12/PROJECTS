import { useState } from "react";
import "./Goalspage.css"
import { GoalCard } from "../components/GoalCard";
export function GoalPage() {

    const [goals, setGoals] = useState([
        {
            id: 1,
            title: "MacBook Pro",
            target: 50000,
            current: 15000,
            date: "2026-12-31"
        },
        {
            id: 2,
            title: "New Bike",
            target: 80000,
            current: 20000,
            date: "2026-10-10"
        }
    ]);
    const [showModal, setShowModal] = useState(false)

    return (
        <div className="goals-page">
            <div className="goals-header">
                <div>
                    <h1>Goals</h1>
                    <p>Create financial goals and manage your savings</p>
                </div>
                <button className="add-goal-btn"
                    onClick={() => setShowModal(true)}
                >
                    + Add new goal
                </button>
            </div>

            <div className="goals-grid">
                {goals.map((goal) => (
                    <GoalCard key={goal.id} goal={goal} />
                ))}
            </div>
        </div>
    );
}