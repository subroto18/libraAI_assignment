import { api } from "@/api/axios";

export const dashboardService = {
  getDashboard: async () => {
    const response = await api.get("/expenses/dashboard");
    return response.data;
  },
};
