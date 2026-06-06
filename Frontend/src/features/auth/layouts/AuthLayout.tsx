import { Outlet } from "react-router-dom";
import AuthHeader from "../components/AuthHeader";
import { AUTH_TEXT } from "../constants/auth.text";

const AuthLayout = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.18),transparent_35%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.15),transparent_35%)]" />

      <div className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-120px] h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl sm:p-10">
            <AuthHeader />
            <div className="mt-6">
              <Outlet />
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-slate-500">
            {AUTH_TEXT.footer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
