const SkeletonCard = () => {
  return (
    <div
      className="
          animate-pulse
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-6
          shadow-sm
        "
    >
      <div className="h-4 w-28 rounded bg-slate-200" />

      <div className="mt-4 h-10 w-24 rounded bg-slate-300" />

      <div className="mt-6 h-3 w-32 rounded bg-slate-100" />
    </div>
  );
};

export const DashboardSkeleton = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="h-8 w-52 animate-pulse rounded-lg bg-slate-200" />

        <div className="mt-3 h-4 w-80 animate-pulse rounded bg-slate-100" />
      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-3">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>

      {/* Chart */}
      <div
        className="
            animate-pulse
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-6
            shadow-sm
          "
      >
        <div className="h-5 w-40 rounded bg-slate-200" />

        <div className="mt-6 h-64 rounded-2xl bg-slate-100" />
      </div>

      {/* Recent Transactions */}
      <div
        className="
            animate-pulse
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-6
            shadow-sm
          "
      >
        <div className="h-5 w-48 rounded bg-slate-200" />

        <div className="mt-6 space-y-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex items-center justify-between">
              <div>
                <div className="h-4 w-36 rounded bg-slate-200" />

                <div className="mt-2 h-3 w-24 rounded bg-slate-100" />
              </div>

              <div className="h-5 w-20 rounded bg-slate-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
