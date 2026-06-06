import { useDashboard } from "../hooks/useDashboard";
import { DashboardStats } from "../components/DashboardStats";
import { ExpenseChart } from "../components/ExpenseChart";
import { RecentTransactions } from "../components/RecentTransactions";
import { DashboardSkeleton } from "../components/common/DashboardSkeleton";
import { ErrorState } from "../components/common/ErrorState";

const DashboardPage = () => {
  const { dashboard, loading, error, refetch } = useDashboard();
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 p-6">
        <div className="mx-auto max-w-7xl">
          <DashboardSkeleton />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-50 p-6">
        <div className="mx-auto max-w-7xl">
          <ErrorState message={error} onRetry={refetch} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>

          <p className="mt-1 text-slate-500">
            Welcome back. Here's your expense summary.
          </p>
        </div>

        <DashboardStats
          totalExpenses={dashboard?.totalExpenses || 0}
          monthlyExpenses={dashboard?.monthlyExpenses || 0}
          transactionCount={dashboard?.transactionCount || 0}
        />

        <ExpenseChart />

        <RecentTransactions
          transactions={dashboard?.recentTransactions || []}
        />
      </div>
    </div>
  );
};

export default DashboardPage;
