import { Expense } from "../types/expense.types";

interface ExpenseCardProps {
  expense: Expense;
}

const ExpenseCard = ({ expense }: ExpenseCardProps) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-slate-900">{expense.title}</h3>
          <p className="mt-1 text-sm text-slate-500">{expense.category}</p>
        </div>

        <p className="text-lg font-bold text-slate-900">₹{expense.amount}</p>
      </div>

      {expense.description && (
        <p className="mt-3 text-sm text-slate-600">{expense.description}</p>
      )}

      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-slate-500">
          {new Date(expense.expenseDate).toLocaleDateString()}
        </span>

        <div className="flex gap-2">
          <button className="rounded-lg border px-3 py-1.5 text-sm hover:bg-slate-100">
            Edit
          </button>

          <button className="rounded-lg border border-red-200 px-3 py-1.5 text-sm text-red-600 hover:bg-red-50">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpenseCard;
