import "./StatisticsChart.css"
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip
} from "recharts";

const COLORS = ["#7B61FF", "#A78BFA", "#C4B5FD", "#E9D5FF", "#DDD6FE"]

const StatisticsChart = ({ transactions }) => {
    const categoryMap = {};

    transactions.forEach((t) => {
        if (t.type === "income") {
            if (!categoryMap[t.category]) {
                categoryMap[t.category] = 0;
            }
            categoryMap[t.category] += t.amount;
        }
    });

    const data = Object.keys(categoryMap).map((key) => ({
        name: key,
        value: categoryMap[key],
    }))

    const total = data.reduce((acc, curr) => acc + curr.value, 0);

    return (
        <div className="stats-container">
            <h3>Statistics</h3>
            <div className="chart-wrapper">
                <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                        <Pie
                            data={data}
                            innerRadius={data}
                            innerRadius={70}
                            outerRadius={90}
                            paddingAngle={3}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={index} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>

                <div className="center-text">
                    <p>Total Income</p>
                    <h2>₹ {total}</h2>
                </div>
            </div>

            <div className="stats-list">
                {data.map((item, index) => {
                    const percent = ((item.value / total) * 100).toFixed(0);

                    return (
                        <div className="stats-item" key={index}>
                            <span className="dot" style={{ background: COLORS[index] }}></span>
                            <span>{item.name}</span>
                            <span>{percent}%</span>
                            <span>₹ {item.value}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default StatisticsChart;