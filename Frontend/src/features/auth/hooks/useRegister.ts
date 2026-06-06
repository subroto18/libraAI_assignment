import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "@/api/services/auth.service";
import { ROUTES } from "@/constants/routes";
import { toast } from "@/utils/toast";

type RegisterPayload = {
  name: string;
  email: string;
  password: string;
};

export const useRegister = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const handleRegister = async (payload: RegisterPayload) => {
    try {
      setLoading(true);
      setError(null);
      await authService.register(payload);
      toast.success("Account created successfully");
      navigate(ROUTES.AUTH.LOGIN);
    } catch (err: any) {
      setError(err?.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    handleRegister,
  };
};
