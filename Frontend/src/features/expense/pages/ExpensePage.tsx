import { useEffect, useState } from "react";
import { useExpenses } from "../hooks/useExpenses";
import ExpenseHeader from "../components/ExpenseHeader";
import ExpenseFilters from "../components/ExpenseFilters";
import { ExpenseList } from "../components/ExpenseList";
import { Expense } from "../types/expense.types";
import { ExpenseFormModal } from "../modals/ExpenseFormModal";
import { useUpdateExpense } from "../hooks/useUpdateExpense";
import { useCreateExpense } from "../hooks/useCreateExpense";
import DeleteExpenseModal from "../modals/DeleteExpenseModal";
import { useDeleteExpense } from "../hooks/useDeleteExpense";
import { useDebounce } from "@/hooks/useDebounce";

const ExpensePage = () => {
  const { expenses, loading, refetch, fetchExpenses } = useExpenses();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [selectedExpense, setSelectedExpense] = useState<Expense | null>(null);
  const [expenseToDelete, setExpenseToDelete] = useState<Expense | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { createExpense, loading: createLoding } = useCreateExpense();
  const { updateExpense, loading: updateLoading } = useUpdateExpense();
  const { deleteExpense, loading: deleteLoading } = useDeleteExpense();
  const debouncedSearch = useDebounce(search, 500);
  const handleAddExpense = () => {
    setSelectedExpense(null);
    setIsModalOpen(true);
  };

  const handleEditExpense = (expense: Expense) => {
    setSelectedExpense(expense);
    setIsModalOpen(true);
  };

  const handleDeleteExpense = (expense: Expense) => {
    setExpenseToDelete(expense);
  };

  const handleSubmit = async (values: any) => {
    if (selectedExpense) {
      await updateExpense(selectedExpense.id, values);
    } else {
      await createExpense(values);
    }
  };

  const confirmDelete = async () => {
    if (!expenseToDelete) return;
    await deleteExpense(expenseToDelete.id);
    setExpenseToDelete(null);
    refetch();
  };

  useEffect(() => {
    fetchExpenses({
      search: debouncedSearch,
      category,
    });
  }, [debouncedSearch, category]);

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
        <ExpenseList
          expenses={expenses}
          loading={loading}
          onEdit={handleEditExpense}
          onDelete={handleDeleteExpense}
        />
      </div>

      <ExpenseFormModal
        open={isModalOpen}
        loading={createLoding}
        expense={selectedExpense}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        refetch={refetch}
      />

      <DeleteExpenseModal
        open={!!expenseToDelete}
        expense={expenseToDelete}
        loading={deleteLoading}
        onClose={() => setExpenseToDelete(null)}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default ExpensePage;
