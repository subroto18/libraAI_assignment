import { Expense } from "../types/expense.types";
import ExpenseEmptyState from "./common/ExpenseEmptyState";
import ExpenseSkeleton from "./common/ExpenseSkeleton";
import ExpenseCard from "./ExpenseCard";
import ExpenseTable from "./ExpenseTable";

interface ExpenseListProps {
  expenses: Expense[];
  loading: boolean;
}

export const ExpenseList = ({ expenses, loading }: ExpenseListProps) => {
  if (loading) {
    return <ExpenseSkeleton />;
  }

  if (!expenses.length) {
    return <ExpenseEmptyState />;
  }

  return (
    <>
      <div className="hidden md:block">
        <ExpenseTable expenses={expenses} />
      </div>

      <div className="grid gap-4 md:hidden">
        {expenses.map((expense) => (
          <ExpenseCard key={expense.id} expense={expense} />
        ))}
      </div>
    </>
  );
};
