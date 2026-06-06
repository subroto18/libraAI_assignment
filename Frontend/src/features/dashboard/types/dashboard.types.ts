export interface Transaction {
  id: string;
  title: string;
  amount: number;
  category: string;
  expenseDate: string;
}

export interface ExpenseTrend {
  month: string;
  amount: number;
}

export interface CategoryBreakdown {
  category: string;
  amount: number;
}

export interface DashboardData {
  totalExpenses: number;
  monthlyExpenses: number;
  transactionCount: number;
  recentTransactions: Transaction[];
  expenseTrend: ExpenseTrend[];
  categoryBreakdown: CategoryBreakdown[];
}
