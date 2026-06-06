import { api } from "@/api/axios";

export const expenseService = {
  getExpenses: async (params?: { search?: string; category?: string }) => {
    const response = await api.get("/expenses/history", {
      params,
    });
    return response.data;
  },

  createExpense: async (payload: any) => {
    const response = await api.post("/expenses", payload);
    return response.data;
  },

  updateExpense: async (id: string, payload: any) => {
    const response = await api.put(`/expenses/${id}`, payload);
    return response.data;
  },

  deleteExpense: async (id: string) => {
    const response = await api.delete(`/expenses/${id}`);
    return response.data;
  },
};
