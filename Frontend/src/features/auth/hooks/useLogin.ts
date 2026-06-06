import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "@/api/services/auth.service";
import { useAuth } from "@/context/AuthContext";
import { ROUTES } from "@/constants/routes";
import { toast } from "@/utils/toast";

type LoginPayload = {
  email: string;
  password: string;
};

export const useLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (payload: LoginPayload) => {
    try {
      setLoading(true);
      setError(null);

      const response = await authService.login(payload);

      login({
        token: response.data.token,
        user: response.data.user,
      });
      toast.success("Login successful");
      navigate(ROUTES.DASHBOARD);
    } catch (err: any) {
      setError(err?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    handleLogin,
  };
};
