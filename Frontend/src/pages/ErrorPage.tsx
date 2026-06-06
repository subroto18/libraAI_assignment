import Button from "@/components/ui/Button";

interface Props {
  error?: Error;
  resetError?: () => void;
}

const ErrorPage = ({ error, resetError }: Props) => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-red-500/20 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-120px] h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-lg rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-2xl backdrop-blur-2xl">
        <div className="mb-5 text-6xl">⚠️</div>

        <h1 className="text-3xl font-bold text-white">Something went wrong</h1>

        <p className="mt-3 text-slate-400">
          An unexpected error occurred. Please try again.
        </p>

        {import.meta.env.DEV && error && (
          <div className="mt-6 overflow-auto rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-left text-sm text-red-300">
            <pre>{error.message}</pre>
          </div>
        )}

        <div className="mt-8 flex justify-center gap-3">
          <Button
            size="lg"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Go to Home
          </Button>
          <Button size="lg" onClick={() => window.location.reload()}>
            Reload Page
          </Button>

          {resetError && (
            <Button size="lg" type="default" onClick={resetError}>
              Try Again
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
