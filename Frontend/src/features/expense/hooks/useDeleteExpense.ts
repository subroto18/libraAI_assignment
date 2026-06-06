import { useState } from "react";
import { toast } from "@/utils/toast";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { expenseService } from "@/api/services/expense.service";

export const useDeleteExpense = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const deleteExpense = async (id: string) => {
    try {
      setLoading(true);
      setError(null);
      const response = await expenseService.deleteExpense(id);
      toast.success(response.message || "Expense deleted successfully");
      return response;
    } catch (err) {
      const message = getErrorMessage(err);
      toast.error(message);
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    deleteExpense,
  };
};
