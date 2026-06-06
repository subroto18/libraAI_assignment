import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

interface TrendData {
  month: string;
  amount: number;
}

interface Props {
  data: TrendData[];
}

export default function ExpenseTrendChart({ data }: Props) {
  if (!data?.length) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900">
          Monthly Expense Trend
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          Track your spending over time
        </p>

        <div className="mt-6 flex h-80 items-center justify-center rounded-xl border border-dashed border-slate-300">
          <div className="text-center">
            <p className="font-medium text-slate-700">
              No trend data available
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
          Monthly Expense Trend
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          Track your spending over time
        </p>
      </div>

      <div className="mt-6 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="4 4"
              vertical={false}
              stroke="#e2e8f0"
            />

            <XAxis dataKey="month" axisLine={false} tickLine={false} />

            <YAxis axisLine={false} tickLine={false} />

            <Tooltip
              formatter={(value) => [
                `₹${value ? Number(value).toLocaleString() : 0}`,
                "Expense",
              ]}
            />

            <Line
              type="monotone"
              dataKey="amount"
              stroke="#2563eb"
              strokeWidth={4}
              dot={{
                r: 5,
                fill: "#2563eb",
              }}
              activeDot={{
                r: 8,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
