export interface Expense {
  id: string;
  title: string;
  amount: number;
  category: string;
  description?: string;
  expenseDate: string;
}

export interface ExpenseResponse {
  expenses: Expense[];
  nextCursor: string | null;
}
