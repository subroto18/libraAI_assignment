import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import { useAuth } from "@/context/AuthContext";

type Props = {
  children: ReactNode;
};

const PublicRoute = ({ children }: Props) => {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return <Navigate to={ROUTES.DASHBOARD} replace />;
  }
  return <>{children}</>;
};

export default PublicRoute;
