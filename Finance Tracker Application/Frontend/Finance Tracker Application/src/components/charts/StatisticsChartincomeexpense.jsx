import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#6C63FF",
  "#A29BFE",
  "#D1D5DB",
  "#4B5563",
  "#9CA3AF",
  "#E5E7EB",
];

const processCategoryData = (transactions = [], type = "expense") => {
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const categoryMap = {};

  transactions.forEach((t) => {
    if (t.type !== type || !t?.createdAt) return;

    const d = new Date(t.createdAt);

    if (
      d.getMonth() !== currentMonth ||
      d.getFullYear() !== currentYear
    ) return;

    const category = t.category || "Others";

    if (!categoryMap[category]) {
      categoryMap[category] = 0;
    }

    categoryMap[category] += Number(t.amount);
  });

  return Object.keys(categoryMap).map((key) => ({
    name: key,
    value: categoryMap[key],
  }));
};

export function StatisticsChartincomeexpense({ transactions = [], type = "expense" }) {
  const data = processCategoryData(transactions, type);

  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            innerRadius={80}
            outerRadius={110}
            paddingAngle={4}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Center */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
      }}>
        <p style={{ margin: 0, color: "#888" }}>
          This month {type}
        </p>
        <h2 style={{ margin: 0 }}>
          ${total.toLocaleString()}
        </h2>
      </div>
    </div>
  );
}