import { useEffect, useState } from "react";
import { Expense } from "../types/expense.types";
import { expenseService } from "@/api/services/expense.service";

export const useExpenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchExpenses = async (params?: {
    search?: string;
    category?: string;
  }) => {
    try {
      setLoading(true);
      setError(null);

      const response = await expenseService.getExpenses(params);

      setExpenses(response.data.expenses || []);
    } catch (err: any) {
      setError(err?.response?.data?.message || "Failed to fetch expenses");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return {
    expenses,
    loading,
    error,
    refetch: fetchExpenses,
  };
};
