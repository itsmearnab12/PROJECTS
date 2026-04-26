import "./GoalCard.css"

export const GoalCard = ({ goal }) => {
    const percent = Math.min(
        (GoalCard.current / GoalCard.target) * 100, 100
    );

    const remaining = goal.target - goal.current;

    return (
        <div className="goals-card">
            <h3>{goal.title}</h3>
            <p className="date">Due: {goal.date}</p>

            <h2>
                ₹{goal.current} <span>/ ₹{goal.target}</span>
            </h2>

            <div className="progress-bar">
                <div
                    className="progress-fill"
                    style={{ width: `${percent}%` }}
                ></div>
            </div>
            <p className="percent">{Math.round(percent)}%</p>

            <small>Left: ₹{remaining}</small>
        </div>
    );
};