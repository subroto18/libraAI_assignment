import { Expense } from "../types/expense.types";
import ExpenseEmptyState from "./common/ExpenseEmptyState";
import ExpenseSkeleton from "./common/ExpenseSkeleton";
import ExpenseItem from "./ExpenseItem";
interface ExpenseListProps {
  expenses: Expense[];
  loading: boolean;
  onEdit?: (expense: Expense) => void;
  onDelete?: (expense: Expense) => void;
}

export const ExpenseList = ({
  expenses,
  loading,
  onDelete,
  onEdit,
}: ExpenseListProps) => {
  if (loading) {
    return <ExpenseSkeleton />;
  }
  if (!expenses.length) {
    return <ExpenseEmptyState />;
  }
  return (
    <div className="space-y-4">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
