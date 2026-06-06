import Button from "@/components/ui/Button";
import { PlusOutlined } from "@ant-design/icons";

interface ExpenseEmptyStateProps {
  onAddExpense?: () => void;
}

const ExpenseEmptyState = ({ onAddExpense }: ExpenseEmptyStateProps) => {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        rounded-3xl
        border
        border-dashed
        border-slate-300
        bg-white
        px-6
        py-16
        text-center
      "
    >
      <div
        className="
          mb-5
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-slate-100
          text-2xl
        "
      >
        💸
      </div>

      <h3 className="text-xl font-semibold text-slate-900">No Expenses Yet</h3>

      <p className="mt-2 max-w-md text-slate-500">
        Start tracking your spending by creating your first expense record.
      </p>

      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={onAddExpense}
        className="mt-6"
      >
        Add Expense
      </Button>
    </div>
  );
};

export default ExpenseEmptyState;
