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

        return { month, income, expense};
    });
};

const MoneyFlowChart = ({ transactions }) => {
    const data = getMonthlyData(transactions);

    return(
        <div style={{width: "60%", height: 250}}>
            <h3>Money Flow</h3>

            <ResponsiveContainer>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />

                    <Bar dataKey="income" fill="#6C63FF"/>
                    <Bar dataKey="expense" fill="#64C4FF"/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default MoneyFlowChart;