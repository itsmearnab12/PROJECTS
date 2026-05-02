import "./Cards.css"
export function Cards({ title, amount, percentage, isPositive, subtitle }) {
    return (
        <>
            <div className="card">
                <h4 className="card-title">{title}</h4>
                <h2 className="card-amount">₹{amount}</h2>

                {percentage !== undefined && (
                    <div className={`card-change ${isPositive ? "positive" : "negative"}`}>
                        <span className="arrow">{isPositive ? "▲" : "▼"}</span>
                        <span>{percentage}%</span>
                    </div>
                )}

                {subtitle && <p className="card-subtitle">{subtitle}</p>}
            </div>
        </>
    );
}