import "./WalletLineChart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const WalletLineChart = ({ transactions }) => {

  // 🔷 Step 1: Group by date
  const grouped = {};

  transactions.forEach((t) => {
    const date = new Date(t.createdAt).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
    });

    if (!grouped[date]) {
      grouped[date] = { date, income: 0, expense: 0 };
    }

    if (t.type === "income") {
      grouped[date].income += t.amount;
    } else {
      grouped[date].expense += t.amount;
    }
  });

  const data = Object.values(grouped);

  return (
    <div className="wallet-chart">
      <div className="chart-header">
        <h3>Transactions Overview</h3>

        <div className="legend">
          <span className="dot income"></span> Income
          <span className="dot expense"></span> Expenses
        </div>
      </div>

      <ResponsiveContainer width="100%" height={160}>
        <LineChart data={data}>

          {/* Grid */}
          <CartesianGrid strokeDasharray="4 4" stroke="#eee" />

          {/* Axes */}
          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />

          {/* Tooltip */}
          <Tooltip
            contentStyle={{
              borderRadius: "10px",
              border: "none",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          />

          {/* Income Line */}
          <Line
            type="monotone"
            dataKey="income"
            stroke="#7B61FF"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 6 }}
          />

          {/* Expense Line */}
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#C4B5FD"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 6 }}
          />

        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WalletLineChart;