import { useState } from "react";
import { toast } from "@/utils/toast";
import { expenseService } from "@/api/services/expense.service";

export const useUpdateExpense = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateExpense = async (id: string, payload: any) => {
    try {
      setLoading(true);
      setError(null);
      const response = await expenseService.updateExpense(id, payload);
      toast.success(response.message || "Expense updated successfully");
      return response;
    } catch (err: any) {
      const message =
        err?.response?.data?.message || "Failed to update expense";
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    updateExpense,
  };
};
