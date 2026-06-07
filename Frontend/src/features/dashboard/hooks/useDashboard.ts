import { dashboardService } from "@/api/services/dashboard.service";
import { useEffect, useState } from "react";
import { DashboardData } from "../types/dashboard.types";
let dashboardCache: DashboardData | null = null;
export const useDashboard = () => {
  const [dashboard, setDashboard] = useState<DashboardData | null>(
    dashboardCache,
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fetchDashboard = async (force = false) => {
    if (dashboardCache && !force) {
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const response = await dashboardService.getDashboard();
      dashboardCache = response.data;
      setDashboard(response.data);
    } catch (err: any) {
      setError(
        err?.response?.data?.message || "Failed to fetch dashboard data",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  return {
    dashboard,
    loading,
    error,
    refetch: () => fetchDashboard(true),
  };
};
