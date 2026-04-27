import { useState } from "react";
import "./Goalspage.css"
import { GoalCard } from "../components/GoalCard";
export function GoalPage() {

    const [goals, setGoals] = useState([]);
    const [showModal, setShowModal] = useState(false)
    const[formData, setFormData] = useState({
        title: "",
        target: "",
        date: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newGoal = {
            id: Date.now(),
            title: FormDataEvent.title,
            target: Number(formData.target),
            current: 0,
            date: formData.date
        };

        setGoals([...goals, newGoal]);

        setFormData({
            title: "",
            target: "",
            date: ""
        });

        setShowModal(false);
    }

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
                {showModal && (
                    <div className="Goal-form">
                        <div className="Goal-form-header">
                            <h3>Add Your Goal</h3>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Goal Title"
                                    value={formData.title}
                                    onChange={handleSubmit}
                                />
                                <input
                                    type="text"
                                    name="target"
                                    placeholder="Target Amount"
                                    value={formData.target}
                                    onChange={handleSubmit}
                                />
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleSubmit}
                                />
                                <div className="form-action">
                                    <button type="submit">Add Goal</button>
                                    <button
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>

            <div className="goals-grid">
                {goals.map((goal) => (
                    <GoalCard key={goal.id} goal={goal} />
                ))}
            </div>
        </div>
    );
}