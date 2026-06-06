const SkeletonCard = () => {
  return <div className="h-32 animate-pulse rounded-2xl border bg-white" />;
};

export const DashboardSkeleton = () => {
  return (
    <div className="space-y-6">
      <div className="h-10 w-64 animate-pulse rounded bg-slate-200" />

      <div className="grid gap-6 md:grid-cols-3">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>

      <div className="h-80 animate-pulse rounded-2xl border bg-white" />

      <div className="h-96 animate-pulse rounded-2xl border bg-white" />
    </div>
  );
};
