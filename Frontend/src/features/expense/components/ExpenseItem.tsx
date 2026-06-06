import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";

import { Expense } from "../types/expense.types";

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
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-semibold text-slate-900">
              {expense.title}
            </h3>

            <Tag>{expense.category}</Tag>
          </div>

          {expense.description && (
            <p className="mt-2 text-sm text-slate-500">{expense.description}</p>
          )}

          <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-500">
            <span>{new Date(expense.expenseDate).toLocaleDateString()}</span>

            <span>ID: {expense.id.slice(-6)}</span>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:items-end">
          <div className="text-2xl font-bold text-slate-900">
            ₹{expense.amount}
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
