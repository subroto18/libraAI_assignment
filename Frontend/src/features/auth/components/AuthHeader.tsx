import { AUTH_CONFIG } from "../config/auth.config";

const AuthHeader = () => {
  const { branding } = AUTH_CONFIG;

  return (
    <>
      <div className="mb-6 flex justify-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-white/10 bg-white/5 shadow-lg">
          <img
            src={branding.logo}
            alt={branding.appName}
            className="h-16 w-16 object-contain"
          />
        </div>
      </div>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          {branding.title}
        </h1>

        <p className="mt-3 text-sm leading-6 text-slate-400">
          {branding.subtitle}

          <span className="ml-1 font-medium text-cyan-400">
            {branding.appName}
          </span>
        </p>
      </div>
    </>
  );
};

export default AuthHeader;
