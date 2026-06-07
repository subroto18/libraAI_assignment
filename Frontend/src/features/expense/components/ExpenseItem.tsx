import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import Button from "@/components/ui/Button";
import CategoryTag from "@/components/ui/CategoryTag";

import { Expense } from "../types/expense.types";
import {
  formatCurrency,
  formatDate,
  getShortId,
  capitalize,
} from "@/utils/helper";

interface ExpenseItemProps {
  expense: Expense;
  onEdit?: (expense: Expense) => void;
  onDelete?: (expense: Expense) => void;
}

const ExpenseItem = ({ expense, onEdit, onDelete }: ExpenseItemProps) => {
  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-5
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-lg font-semibold text-slate-900">
              {capitalize(expense.title)}
            </h3>

            <CategoryTag category={expense.category} />
          </div>

          {expense.description && (
            <p className="mt-2 text-sm text-slate-500">
              {capitalize(expense.description)}
            </p>
          )}

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span>{formatDate(expense.expenseDate)}</span>

            <span>•</span>

            <span>ID: {getShortId(expense.id)}</span>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:items-end">
          <div className="text-2xl font-bold text-slate-900">
            {formatCurrency(expense.amount)}
          </div>

          <div className="flex gap-2">
            <Button icon={<EditOutlined />} onClick={() => onEdit?.(expense)}>
              Edit
            </Button>

            <Button
              danger
              icon={<DeleteOutlined />}
              onClick={() => onDelete?.(expense)}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
