import { useState } from "react";

import { useExpenses } from "../hooks/useExpenses";
import ExpenseHeader from "../components/ExpenseHeader";
import ExpenseFilters from "../components/ExpenseFilters";
import { ExpenseList } from "../components/ExpenseList";
import { Expense } from "../types/expense.types";
import { ExpenseFormModal } from "../modals/ExpenseFormModal";
import { useUpdateExpense } from "../hooks/useUpdateExpense";
import { useCreateExpense } from "../hooks/useCreateExpense";

const ExpensePage = () => {
  const { expenses, loading, refetch } = useExpenses();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const [selectedExpense, setSelectedExpense] = useState<Expense | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { createExpense, loading: createLoding } = useCreateExpense();
  const { updateExpense } = useUpdateExpense();

  const handleAddExpense = () => {
    setSelectedExpense(null);
    setIsModalOpen(true);
  };

  const handleSubmit = async (values: any) => {
    if (selectedExpense) {
      await updateExpense(selectedExpense.id, values);
    } else {
      await createExpense(values);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <ExpenseHeader />
        <ExpenseFilters
          search={search}
          category={category}
          onSearchChange={setSearch}
          onCategoryChange={setCategory}
          onAddExpense={handleAddExpense}
        />
        <ExpenseList expenses={expenses} loading={loading} />
      </div>

      <ExpenseFormModal
        open={isModalOpen}
        loading={createLoding}
        expense={selectedExpense}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        refetch={refetch}
      />
    </div>
  );
};

export default ExpensePage;
