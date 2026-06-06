interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export const ErrorState = ({
  message = "Something went wrong",
  onRetry,
}: ErrorStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border bg-white p-10 text-center">
      <h2 className="text-xl font-semibold text-red-600">Oops!</h2>
      <p className="mt-2 text-slate-500">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 rounded-lg bg-slate-900 px-4 py-2 text-white"
        >
          Try Again
        </button>
      )}
    </div>
  );
};
