import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const processChartData = (transactions = []) => {
  if (!Array.isArray(transactions)) return [];

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const current = {};
  const previous = {};

  transactions.forEach((t) => {
    if (!t?.createdAt || t.amount == null) return;

    const d = new Date(t.createdAt);
    if (isNaN(d)) return;

    const day = d.getDate(); // 1–31
    const month = d.getMonth();
    const year = d.getFullYear();

    let value = t.type === "income"
      ? Number(t.amount)
      : -Number(t.amount);

    // current month
    if (month === currentMonth && year === currentYear) {
      current[day] = (current[day] || 0) + value;
    }

    // previous month
    if (month === currentMonth - 1 && year === currentYear) {
      previous[day] = (previous[day] || 0) + value;
    }
  });

  const days = Array.from(
    new Set([...Object.keys(current), ...Object.keys(previous)])
  ).sort((a, b) => a - b);

  return days.map((day) => ({
    date: `Day ${day}`,
    current: current[day] || 0,
    previous: previous[day] || 0,
  }));
};

export function BalanceOverviewChart({ transactions = [] }) {
  const data = processChartData(transactions);

  console.log("RAW transactions:", transactions);
  console.log("PROCESSED data:", data);

  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="date" />
        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="current"
          stroke="#7c5cff"
          strokeWidth={3}
          dot={false}
        />

        <Line
          type="monotone"
          dataKey="previous"
          stroke="#7c5cff"
          strokeDasharray="5 5"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}