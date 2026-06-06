interface DashboardCardProps {
  title: string;
  value: string | number;
}

export const DashboardCard = ({ title, value }: DashboardCardProps) => {
  return (
    <div
      className="
          rounded-2xl
          border
          border-slate-200
          bg-white
          p-6
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-lg
        "
    >
      <p className="text-sm font-medium text-slate-500">{title}</p>

      <h3 className="mt-3 text-3xl font-bold text-slate-900">{value}</h3>

      <p className="mt-2 text-xs text-slate-400">Updated recently</p>
    </div>
  );
};
