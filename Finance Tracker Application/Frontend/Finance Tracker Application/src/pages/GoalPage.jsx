// import { useEffect, useState } from "react";
// import "./Goalspage.css"
// import { GoalCard } from "../components/GoalCard";
// import axios from "axios";
// export function GoalPage() {

//     const [goals, setGoals] = useState([]);
//     const [showModal, setShowModal] = useState(false)
//     const [formData, setFormData] = useState({
//         title: "",
//         target: "",
//         date: ""
//     });

//     useEffect(() => {
//         axios.get("http://localhost:5000/api/goals", {
//             withCredentials: true
//         })
//             .then((res) => {
//                 setGoals(res.data.goals);
//             })
//             .catch((err) => console.log(err));
//     }, []);

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const res = await axios.post(
//                 "http://localhost:5000/api/goals",
//                 {
//                     title: formData.title,
//                     target: Number(formData.target),
//                     date: formData.date
//                 },
//                 { withCredentials: true }
//             );

//             if (res.data.success) {
//                 setGoals([res.data.goal, ...goals]);

//                 setFormData({
//                     title: "",
//                     target: "",
//                     date: ""
//                 });

//                 setShowModal(false);
//             }

//         } catch (error) {
//             console.log(error);
//         }
//     };

//     return (
//         <div className="goals-page">
//             <div className="goals-header">
//                 <div>
//                     <h1>Goals</h1>
//                     <p>Create financial goals and manage your savings</p>
//                 </div>
//                 <button className="add-goal-btn"
//                     onClick={() => setShowModal(true)}
//                 >
//                     + Add new goal
//                 </button>
//                 {showModal && (
//                     <div className="Goal-model-overlay">
//                         <div className="Goal-model-content">
//                             <h3>Add Your Goal</h3>
//                             <form onSubmit={handleSubmit}>
//                                 <input
//                                     type="text"
//                                     name="title"
//                                     placeholder="Goal Title"
//                                     value={formData.title}
//                                     onChange={(e) =>
//                                         setFormData({ ...formData, title: e.target.value })
//                                     }
//                                 />
//                                 <input
//                                     type="text"
//                                     name="target"
//                                     placeholder="Target Amount"
//                                     value={formData.target}
//                                     onChange={(e) =>
//                                         setFormData({ ...formData, title: e.target.value })
//                                     }
//                                 />
//                                 <input
//                                     type="date"
//                                     name="date"
//                                     value={formData.date}
//                                     onChange={(e) =>
//                                         setFormData({ ...formData, title: e.target.value })
//                                     }
//                                 />
//                                 <div className="form-action">
//                                     <button
//                                         type="button"
//                                         className="cancel-goal-form-btn"
//                                         onClick={() => setShowModal(false)}
//                                     >
//                                         Cancel
//                                     </button>
//                                     <button type="submit" className="add-goal-form-btn">Add Goal</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 )}
//             </div>

//             <div className="goals-grid">
//                 {goals.map((goal) => (
//                     <GoalCard key={goal.id} goal={goal} />
//                 ))}
//             </div>
//         </div>
//     );
// }

import { useEffect, useState } from "react";
import "./Goalspage.css";
import { GoalCard } from "../components/GoalCard";
import axios from "axios";

export function GoalPage() {

    const [goals, setGoals] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const [formData, setFormData] = useState({
        title: "",
        target: "",
        date: ""
    });

    // ✅ FETCH GOALS
    useEffect(() => {
        axios.get("http://localhost:4000/api/goals", {
            withCredentials: true
        })
        .then((res) => {
            if (res.data.success) {
                setGoals(res.data.goals);
            }
        })
        .catch((err) => console.log(err));
    }, []);

    // ✅ HANDLE INPUT CHANGE (clean + reusable)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // ✅ ADD GOAL (POST REQUEST)
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                "http://localhost:4000/api/goals",
                {
                    title: formData.title,
                    target: Number(formData.target),
                    date: formData.date
                },
                { withCredentials: true }
            );

            if (res.data.success) {
                // ✅ update UI instantly
                setGoals((prev) => [res.data.savedGoal, ...prev]);

                // reset form
                setFormData({
                    title: "",
                    target: "",
                    date: ""
                });

                setShowModal(false);
            }

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="goals-page">
            <div className="goals-header">
                <div>
                    <h1>Goals</h1>
                    <p>Create financial goals and manage your savings</p>
                </div>

                <button
                    className="add-goal-btn"
                    onClick={() => setShowModal(true)}
                >
                    + Add new goal
                </button>

                {showModal && (
                    <div className="Goal-model-overlay">
                        <div className="Goal-model-content">
                            <h3>Add Your Goal</h3>

                            <form onSubmit={handleSubmit}>
                                {/* Title */}
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Goal Title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    required
                                />

                                {/* Target */}
                                <input
                                    type="number"
                                    name="target"
                                    placeholder="Target Amount"
                                    value={formData.target}
                                    onChange={handleChange}
                                    required
                                />

                                {/* Date */}
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                />

                                <div className="form-action">
                                    <button
                                        type="button"
                                        className="cancel-goal-form-btn"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        type="submit"
                                        className="add-goal-form-btn"
                                    >
                                        Add Goal
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>

            <div className="goals-grid">
                {goals.map((goal) => (
                    <GoalCard key={goal._id} goal={goal} />
                ))}
            </div>
        </div>
    );
}