export interface Transaction {
  id: string;
  title: string;
  amount: number;
  category: string;
  expenseDate: string;
}

export interface DashboardData {
  totalExpenses: number;
  monthlyExpenses: number;
  transactionCount: number;
  recentTransactions: Transaction[];
}
