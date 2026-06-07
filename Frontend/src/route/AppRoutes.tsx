import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

import AuthSuspense from "@/components/common/AuthSuspense";

const NotFound = lazy(() => import("../pages/NotFound"));
const MainLayout = lazy(() => import("@/layout/MainLayout"));
const AuthLayout = lazy(() => import("@/features/auth/layouts/AuthLayout"));
const LoginPage = lazy(() => import("@/features/auth/pages/LoginPage"));
const RegisterPage = lazy(() => import("@/features/auth/pages/RegisterPage"));
const DashboardPage = lazy(
  () => import("@/features/dashboard/pages/DashboardPage"),
);

const ExpensePage = lazy(() => import("@/features/expense/pages/ExpensePage"));

const AppRoutes = () => {
  return (
    <Router basename="/">
      <Suspense fallback={<AuthSuspense />}>
        <Routes>
          <Route
            path="/auth"
            element={
              <PublicRoute>
                <AuthLayout />
              </PublicRoute>
            }
          >
            <Route path="login" element={<LoginPage />} />

            <Route path="register" element={<RegisterPage />} />
          </Route>

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <MainLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardPage />} />

            <Route path="dashboard" element={<DashboardPage />} />

            <Route path="expenses" element={<ExpensePage />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
