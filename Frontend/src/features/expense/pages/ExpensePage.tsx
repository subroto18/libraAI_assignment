import { useCallback, useEffect, useState } from "react";
import { useExpenses } from "../hooks/useExpenses";
import ExpenseHeader from "../components/ExpenseHeader";
import ExpenseFilters from "../components/ExpenseFilters";
import { ExpenseList } from "../components/ExpenseList";
import { Expense, ExpenseFormValues } from "../types/expense.types";
import { ExpenseFormModal } from "../modals/ExpenseFormModal";
import { useUpdateExpense } from "../hooks/useUpdateExpense";
import { useCreateExpense } from "../hooks/useCreateExpense";
import DeleteExpenseModal from "../modals/DeleteExpenseModal";
import { useDeleteExpense } from "../hooks/useDeleteExpense";
import { useDebounce } from "@/hooks/useDebounce";

const ExpensePage = () => {
  const { expenses, loading, refetch, fetchExpenses, hasNextPage, loadMore } =
    useExpenses();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [selectedExpense, setSelectedExpense] = useState<Expense | null>(null);
  const [expenseToDelete, setExpenseToDelete] = useState<Expense | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { createExpense, loading: createLoading } = useCreateExpense();
  const { updateExpense, loading: updateLoading } = useUpdateExpense();
  const { deleteExpense, loading: deleteLoading } = useDeleteExpense();
  const debouncedSearch = useDebounce(search, 500);

  const handleAddExpense = useCallback(() => {
    setSelectedExpense(null);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedExpense(null);
    setIsModalOpen(false);
  }, []);

  const handleCloseDeleteModal = useCallback(() => {
    setExpenseToDelete(null);
  }, []);

  const handleEditExpense = useCallback((expense: Expense) => {
    setSelectedExpense(expense);
    setIsModalOpen(true);
  }, []);

  const handleDeleteExpense = useCallback((expense: Expense) => {
    setExpenseToDelete(expense);
  }, []);

  const handleSubmit = useCallback(
    async (values: ExpenseFormValues) => {
      if (selectedExpense) {
        await updateExpense(selectedExpense.id, values);
      } else {
        await createExpense(values);
      }
    },
    [selectedExpense, updateExpense, createExpense],
  );

  const confirmDelete = useCallback(async () => {
    if (!expenseToDelete) return;

    await deleteExpense(expenseToDelete.id);
    setExpenseToDelete(null);
    refetch();
  }, [expenseToDelete, deleteExpense, refetch]);

  useEffect(() => {
    fetchExpenses({
      search: debouncedSearch,
      category,
    });
  }, [debouncedSearch, category]);

  const formLoading = createLoading || updateLoading;

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
          hasMore={hasNextPage}
          onLoadMore={loadMore}
        />
      </div>

      <ExpenseFormModal
        open={isModalOpen}
        loading={formLoading}
        expense={selectedExpense}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        refetch={refetch}
      />

      <DeleteExpenseModal
        open={!!expenseToDelete}
        expense={expenseToDelete}
        loading={deleteLoading}
        onClose={handleCloseDeleteModal}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default ExpensePage;
