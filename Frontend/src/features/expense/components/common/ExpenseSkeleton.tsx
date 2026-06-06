const ExpenseSkeleton = () => {
  return (
    <div className="space-y-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="
                animate-pulse
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-sm
              "
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="h-5 w-40 rounded bg-slate-200" />
              <div className="mt-3 h-4 w-24 rounded bg-slate-100" />
              <div className="mt-4 h-4 w-64 rounded bg-slate-100" />
            </div>
            <div className="h-8 w-20 rounded bg-slate-200" />
          </div>

          <div className="mt-6 flex justify-end gap-2">
            <div className="h-9 w-20 rounded-lg bg-slate-100" />
            <div className="h-9 w-20 rounded-lg bg-slate-100" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpenseSkeleton;
