import { useState } from "react";

import { toast } from "@/utils/toast";
import { expenseService } from "@/api/services/expense.service";
import { getErrorMessage } from "@/utils/getErrorMessage";

export const useCreateExpense = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createExpense = async (payload: any) => {
    console.log(payload);
    try {
      setLoading(true);
      setError(null);
      const response = await expenseService.createExpense(payload);
      toast.success(response.message || "Expense created successfully");
      return response;
    } catch (err: any) {
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
    createExpense,
  };
};
