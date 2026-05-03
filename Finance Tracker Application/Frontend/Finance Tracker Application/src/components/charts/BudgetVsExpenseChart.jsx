import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
} from "recharts";

const processBudgetExpenseData = (transactions = [], budgets = []) => {
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  const result = {};

  months.forEach((m) => {
    result[m] = { month: m, budget: 0, expense: 0 };
  });

  budgets.forEach((b) => {
    if (!b?.createdAt) return;

    const d = new Date(b.createdAt);
    const month = months[d.getMonth()];

    result[month].budget += Number(b.limit || 0);
  });

  transactions.forEach((t) => {
    if (t.type !== "expense" || !t?.createdAt) return;

    const d = new Date(t.createdAt);
    const month = months[d.getMonth()];

    result[month].expense += Number(t.amount);
  });

  return Object.values(result);
};

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || payload.length === 0) return null;

  const expense = payload.find(p => p.dataKey === "expense")?.value || 0;
  const budget = payload.find(p => p.dataKey === "budget")?.value || 0;

  const exceeded = expense - budget;

  return (
    <div style={{
      background: "#fff",
      padding: "10px",
      borderRadius: "8px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
    }}>
      <p><strong>{label}</strong></p>
      <p>Budget: ${budget}</p>
      <p>Expense: ${expense}</p>

      {exceeded > 0 && (
        <p style={{ color: "red" }}>
          Exceeded by ${exceeded}
        </p>
      )}
    </div>
  );
};

export function BudgetVsExpenseChart({ transactions = [], budgets = [] }) {
  const data = processBudgetExpenseData(transactions, budgets);

  console.log("CHART DATA:", data);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} barGap={10}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="month" />
        <YAxis />

        <Tooltip content={<CustomTooltip />} />

        <Bar dataKey="expense" minPointSize={3} radius={[6, 6, 0, 0]}>
          {data.map((entry, index) => (
            <Cell
              key={index}
              fill={
                entry.expense > entry.budget
                  ? "#FF6B6B"   
                  : "#6C63FF"   
              }
            />
          ))}
        </Bar>

        <Bar
          dataKey="budget"
          fill="#C7C3FF"
          minPointSize={3}
          radius={[6, 6, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}