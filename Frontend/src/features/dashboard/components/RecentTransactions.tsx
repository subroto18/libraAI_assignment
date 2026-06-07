import CategoryTag from "@/components/ui/CategoryTag";
import { capitalize, formatCurrency, formatDate } from "@/utils/helper";
interface Transaction {
  id: string;
  title: string;
  amount: number;
  category: string;
  expenseDate: string;
}

interface RecentTransactionsProps {
  transactions: Transaction[];
}

export const RecentTransactions = ({
  transactions,
}: RecentTransactionsProps) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold text-slate-900">
        Recent Transactions
      </h2>

      <div className="space-y-3">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="
              flex
              items-center
              justify-between
              rounded-xl
              border
              border-slate-100
              p-4
              transition-colors
              hover:bg-slate-50
            "
          >
            <div>
              <p className="font-medium text-slate-900">
                {capitalize(transaction.title)}
              </p>

              <div className="mt-2 flex items-center gap-3">
                <CategoryTag category={capitalize(transaction.category)} />

                <span className="text-sm text-slate-500">
                  {formatDate(transaction.expenseDate)}
                </span>
              </div>
            </div>

            <p className="text-lg font-semibold text-slate-900">
              {formatCurrency(transaction.amount)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
