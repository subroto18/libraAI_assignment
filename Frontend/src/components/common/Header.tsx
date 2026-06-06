// components/common/Header.tsx

import { useNavigate } from "react-router-dom";
import Container from "@/components/common/Container";
import Button from "@/components/ui/Button";
import { APP_CONFIG } from "@/config/app.config";
import { HEADER_TEXT } from "@/constants/header";
import { ROUTES } from "@/constants/routes";
import { useAuth } from "@/context/AuthContext";
import Avatar from "../ui/Avatar";

const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const handleLogout = () => {
    logout();
    navigate(ROUTES.AUTH.LOGIN);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur-md">
      <Container maxWidth="98%">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-2">
              <img
                src={APP_CONFIG.branding.logo}
                alt={APP_CONFIG.branding.appName}
                className="h-10 object-contain"
              />
            </div>
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
