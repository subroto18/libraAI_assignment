import Button from "@/components/ui/Button";
import { Expense } from "../types/expense.types";
import ExpenseEmptyState from "./common/ExpenseEmptyState";
import ExpenseSkeleton from "./common/ExpenseSkeleton";
import ExpenseItem from "./ExpenseItem";
import React from "react";
interface ExpenseListProps {
  expenses: Expense[];
  loading: boolean;
  loadingMore: boolean;
  onEdit?: (expense: Expense) => void;
  onDelete?: (expense: Expense) => void;
  hasMore?: boolean;
  onLoadMore?: () => void;
}

const ExpenseListComponent = ({
  expenses,
  loading,
  loadingMore,
  onDelete,
  onEdit,
  hasMore,
  onLoadMore,
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

      <>
        {hasMore && (
          <div className="mt-6 flex justify-center">
            <Button loading={loadingMore} onClick={onLoadMore}>
              Load More
            </Button>
          </div>
        )}
      </>
    </div>
  );
};

export const ExpenseList = React.memo(ExpenseListComponent);
