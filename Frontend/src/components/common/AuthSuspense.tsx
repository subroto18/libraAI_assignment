const AuthSuspense = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-cyan-400 border-t-transparent" />
        <p className="text-sm text-slate-400">Loading...</p>
      </div>
    </div>
  );
};

export default AuthSuspense;
