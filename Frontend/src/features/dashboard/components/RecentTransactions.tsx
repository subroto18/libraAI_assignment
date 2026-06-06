interface Transaction {
  id: string;
  title: string;
  amount: number;
  category: string;
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

      <div className="space-y-2">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between rounded-xl p-4 hover:bg-slate-50"
          >
            <div>
              <p className="font-medium text-slate-900">{transaction.title}</p>

              <p className="text-sm text-slate-500">{transaction.category}</p>
            </div>

            <p className="text-lg font-semibold text-slate-900">
              ₹{transaction.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
