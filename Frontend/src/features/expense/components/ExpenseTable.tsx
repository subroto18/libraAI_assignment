import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import { Expense } from "../types/expense.types";
import Tag from "@/components/ui/Tag";
import Button from "@/components/ui/Button";

interface ExpenseTableProps {
  expenses: Expense[];
  onEdit?: (expense: Expense) => void;
  onDelete?: (expense: Expense) => void;
}

const ExpenseTable = ({ expenses, onEdit, onDelete }: ExpenseTableProps) => {
  return (
    <div className="space-y-4">
      {expenses.map((expense) => (
        <div
          key={expense.id}
          className="
            group
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
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-lg font-semibold text-slate-900">
                  {expense.title}
                </h3>

                <Tag>{expense.category}</Tag>
              </div>

              {expense.description && (
                <p className="mt-2 text-sm text-slate-500">
                  {expense.description}
                </p>
              )}

              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500">
                <span>
                  {new Date(expense.expenseDate).toLocaleDateString()}
                </span>

                <span>Expense ID: {expense.id.slice(-6)}</span>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 md:items-end">
              <div className="text-2xl font-bold text-slate-900">
                ₹{expense.amount}
              </div>

              <div className="flex gap-2">
                <Button
                  icon={<EditOutlined />}
                  onClick={() => onEdit?.(expense)}
                >
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
      ))}
    </div>
  );
};

export default ExpenseTable;
