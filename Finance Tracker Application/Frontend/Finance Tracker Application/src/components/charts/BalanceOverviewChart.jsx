import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// ✅ FIXED: Safe data processing
const processChartData = (transactions = []) => {
  // 🛡️ Safety check
  if (!Array.isArray(transactions)) return [];

  const grouped = {};

  transactions.forEach((t) => {
    if (!t?.date || !t?.amount) return; // 🛡️ skip bad data

    const date = new Date(t.date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
    });

    if (!grouped[date]) {
      grouped[date] = 0;
    }

    if (t.type === "income") {
      grouped[date] += t.amount;
    } else {
      grouped[date] -= t.amount;
    }
  });

  return Object.keys(grouped).map((date) => ({
    date,
    amount: grouped[date],
  }));
};

export function BalanceOverviewChart({ transactions = [] }) {
  const data = processChartData(transactions);

  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="date" />
        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="amount"
          stroke="#7c5cff"
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}