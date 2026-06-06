import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface CategoryData {
  category: string;
  amount: number;
}

interface Props {
  data: CategoryData[];
}

const COLORS = [
  "#2563eb",
  "#7c3aed",
  "#14b8a6",
  "#f59e0b",
  "#ef4444",
  "#64748b",
];

export default function ExpenseCategoryChart({ data }: Props) {
  const totalExpense = data.reduce((sum, item) => sum + item.amount, 0);

  if (!data?.length) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900">
          Category Breakdown
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          Distribution of expenses by category
        </p>

        <div className="mt-6 flex h-80 items-center justify-center rounded-xl border border-dashed border-slate-300">
          <div className="text-center">
            <p className="font-medium text-slate-700">
              No category data available
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Add expenses to generate insights
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div>
        <h3 className="text-lg font-semibold text-slate-900">
          Category Breakdown
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          Distribution of expenses by category
        </p>
      </div>

      <div className="relative mt-6 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="amount"
              nameKey="category"
              innerRadius={65}
              outerRadius={100}
              paddingAngle={4}
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <Tooltip
              formatter={(value) => [
                `₹${value ? Number(value).toLocaleString() : 0}`,
                "Expense",
              ]}
            />

            <Legend />
          </PieChart>
        </ResponsiveContainer>

        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-slate-900">
            ₹{totalExpense.toLocaleString()}
          </span>

          <span className="text-sm text-slate-500">Total</span>
        </div>
      </div>
    </div>
  );
}
