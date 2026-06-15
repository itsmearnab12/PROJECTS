import "./MoneyFlowChart.css"
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    Legend,
    ResponsiveContainer
} from "recharts";

const getMonthlyData = (transactions) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

    return months.map((month, index) => {
        const monthlyTransactions = transactions.filter((t) => {
            const date = new Date(t.createdAt);
            return date.getMonth() === index;
        });

        const income = monthlyTransactions
            .filter((t) => t.type === "income")
            .reduce((acc, t) => acc + Number(t.amount), 0);

        const expense = monthlyTransactions
            .filter((t) => t.type === "expense")
            .reduce((acc, t) => acc + Number(t.amount), 0);

        return { month, income, expense };
    });
};

const MoneyFlowChart = ({ transactions }) => {
    const data = getMonthlyData(transactions);

    return (
        <div style={{ width: "100%", height: 270 }}>
            <div className="Moneyflow-header">
                <div>
                    <h3>Money Flow</h3>
                    <p className="moneyflow-subtitle">
                        Monthly income vs expenses
                    </p>
                </div>
            </div>

            <ResponsiveContainer width="100%" height={220}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12 }}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12 }}
                    />
                    <Tooltip
                        contentStyle={{
                            borderRadius: "12px",
                            border: "none",
                            boxShadow: "0 4px 15px rgba(0,0,0,0.08)"
                        }}
                    />
                    <Legend />

                    <Bar dataKey="income" fill="#7C6CFF" radius={[8, 8, 0, 0]}/>
                    <Bar dataKey="expense" fill="#C7C3FF" radius={[8, 8, 0, 0]}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default MoneyFlowChart;