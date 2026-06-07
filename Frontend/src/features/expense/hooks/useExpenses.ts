import { EXPENSE_CONSTANTS } from "./../../../constants/expense";
import { useEffect, useState } from "react";
import { Expense } from "../types/expense.types";
import { expenseService } from "@/api/services/expense.service";
import { getErrorMessage } from "@/utils/getErrorMessage";
let expenseCache: Expense[] = [];
export const useExpenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>(expenseCache);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchExpenses = async (params?: {
    search?: string;
    category?: string;
    limit?: string;
    force?: boolean;
  }) => {
    const hasFilters = !!params?.search || !!params?.category;
    if (expenseCache.length && !hasFilters) {
      setExpenses(expenseCache);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const queryParams: Record<string, any> = {
        limit: EXPENSE_CONSTANTS.DEFAULT_PAGE_SIZE,
      };
      if (params?.search) {
        queryParams.search = params.search;
      }
      if (params?.category) {
        queryParams.category = params.category;
      }
      const response = await expenseService.getExpenses(queryParams);
      const expenses = response.data.expenses || [];
      if (!hasFilters) {
        expenseCache = expenses;
      }
      setExpenses(expenses);
      setNextCursor(response.data.pagination?.nextCursor || null);
      setHasNextPage(response.data.pagination?.hasNextPage || false);
    } catch (err: any) {
      const message = getErrorMessage(err);
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async (params?: { search?: string; category?: string }) => {
    if (!nextCursor) return;
    try {
      setLoading(true);
      const queryParams: Record<string, string | number> = {
        cursor: nextCursor,
        limit: EXPENSE_CONSTANTS.DEFAULT_PAGE_SIZE,
      };

      if (params?.search) {
        queryParams.search = params.search;
      }

      if (params?.category) {
        queryParams.category = params.category;
      }
      const response = await expenseService.getExpenses(queryParams);

      const updatedExpenses = [...expenses, ...response.data.expenses];

      if (!params?.search && !params?.category) {
        expenseCache = updatedExpenses;
      }
      setExpenses(updatedExpenses);
      setNextCursor(response.data.pagination?.nextCursor || null);
      setHasNextPage(response.data.pagination?.hasNextPage || false);
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
    fetchExpenses,
    refetch: () =>
      fetchExpenses({
        force: true,
      }),
    loadMore,
    hasNextPage,
  };
};
