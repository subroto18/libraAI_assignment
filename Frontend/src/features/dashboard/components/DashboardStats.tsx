import { DashboardCard } from "./DashboardCard";

interface DashboardStatsProps {
  totalExpenses: number;
  monthlyExpenses: number;
  transactionCount: number;
}

export const DashboardStats = ({
  totalExpenses,
  monthlyExpenses,
  transactionCount,
}: DashboardStatsProps) => {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <DashboardCard title="Total Expenses" value={`₹${totalExpenses}`} />

      <DashboardCard title="Monthly Expenses" value={`₹${monthlyExpenses}`} />

      <DashboardCard title="Transactions" value={transactionCount} />
    </div>
  );
};
