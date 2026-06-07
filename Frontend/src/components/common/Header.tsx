import { NavLink, useNavigate } from "react-router-dom";

import Container from "@/components/common/Container";
import Button from "@/components/ui/Button";
import Avatar from "@/components/ui/Avatar";

import { APP_CONFIG } from "@/config/app.config";
import { ROUTES } from "@/constants/routes";
import { HEADER_TEXT } from "@/constants/header";

import { useAuth } from "@/context/AuthContext";

const Header = () => {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate(ROUTES.AUTH.LOGIN);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur-md">
      <Container maxWidth="98%">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-5 md:gap-10">
            <button
              onClick={() => navigate(ROUTES.DASHBOARD)}
              className="flex items-center gap-3 cursor-pointer"
            >
              <img
                src={APP_CONFIG.branding.logo}
                alt={APP_CONFIG.branding.appName}
                className="h-10 object-contain"
              />

              <span className="hidden text-lg font-bold text-slate-900 sm:block">
                {APP_CONFIG.appName}
              </span>
            </button>

            <nav className="items-center gap-2 md:flex">
              <NavLink
                to={ROUTES.DASHBOARD}
                className={({ isActive }) =>
                  `
                  rounded-xl
                  px-4
                  py-2
                  text-sm
                  font-medium
                  transition-colors
                  ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }
                `
                }
              >
                Dashboard
              </NavLink>

              <NavLink
                to={ROUTES.EXPENSES.ROOT}
                className={({ isActive }) =>
                  `
                  rounded-xl
                  px-4
                  py-2
                  text-sm
                  font-medium
                  transition-colors
                  ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }
                `
                }
              >
                Expenses
              </NavLink>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold text-slate-800">
                {user?.name}
              </p>

              <p className="text-xs text-slate-500">{user?.email}</p>
            </div>

            <Avatar name={user?.name || ""} />

            <Button size="sm" danger onClick={handleLogout}>
              {HEADER_TEXT.logout}
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
