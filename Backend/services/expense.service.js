const mongoose = require("mongoose");
const Expense = require("../model/expense.module");
const AppError = require("../utils/AppError");
const {
  RECENT_TRANSACTIONS_LIMIT,
  DEFAULT_PAGE_SIZE,
} = require("../constants/expense");
const createExpense = async (body = {}, userId) => {
  const payload = {
    userId,
    title: body.title,
    amount: body.amount,
    category: body.category,
    description: body.description,
    expenseDate: body.expenseDate,
  };
  const expense = await Expense.create(payload);
  return formatExpense(expense);
};

const updateExpense = async (expenseId, body = {}, userId) => {
  if (!mongoose.Types.ObjectId.isValid(expenseId)) {
    throw new AppError({
      code: "EXPENSE_NOT_FOUND",
      message: "Invalid expense id",
    });
  }
  const expense = await Expense.findOneAndUpdate(
    {
      _id: expenseId,
      userId,
    },
    {
      title: body.title,
      amount: body.amount,
      category: body.category,
      description: body.description,
      expenseDate: body.expenseDate,
    },
    {
      new: true,
      runValidators: true,
    },
  );

  if (!expense) {
    throw new AppError({
      code: "EXPENSE_NOT_FOUND",
    });
  }

  return formatExpense(expense);
};

const deleteExpense = async (expenseId, userId) => {
  if (!mongoose.Types.ObjectId.isValid(expenseId)) {
    throw new AppError({
      code: "EXPENSE_NOT_FOUND",
      message: "Invalid expense id",
    });
  }

  const expense = await Expense.findOneAndDelete({
    _id: expenseId,
    userId,
  });

  if (!expense) {
    throw new AppError({
      code: "EXPENSE_NOT_FOUND",
    });
  }
  return expense;
};

const getExpenseHistory = async ({
  userId,
  search,
  category,
  cursor,
  limit = EXPENSE_CONSTANTS.DEFAULT_PAGE_SIZE,
}) => {
  const query = { userId };

  if (search) {
    query.title = {
      $regex: search,
      $options: "i",
    };
  }

  if (category) {
    query.category = category;
  }

  if (cursor) {
    query._id = {
      $lt: cursor,
    };
  }

  const expenses = await Expense.find(query)
    .sort({ _id: -1 })
    .limit(limit + 1);

  const hasNextPage = expenses.length > limit;

  if (hasNextPage) {
    expenses.pop();
  }

  const nextCursor = hasNextPage ? expenses[expenses.length - 1]._id : null;

  return {
    expenses: expenses.map(formatExpense),
    pagination: {
      nextCursor,
      hasNextPage,
    },
  };
};

const getDashboard = async (userId) => {
  const startOfMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    1,
  );

  const endOfMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    1,
  );

  const [
    totalExpensesResult,
    monthlyExpensesResult,
    transactionCount,
    recentTransactions,
    expenseTrendResult,
    categoryBreakdownResult,
  ] = await Promise.all([
    Expense.aggregate([
      {
        $match: {
          userId: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        $group: {
          _id: null,
          total: {
            $sum: "$amount",
          },
        },
      },
    ]),

    Expense.aggregate([
      {
        $match: {
          userId: new mongoose.Types.ObjectId(userId),
          expenseDate: {
            $gte: startOfMonth,
            $lt: endOfMonth,
          },
        },
      },
      {
        $group: {
          _id: null,
          total: {
            $sum: "$amount",
          },
        },
      },
    ]),

    Expense.countDocuments({
      userId,
    }),

    Expense.find({
      userId,
    })
      .sort({ expenseDate: -1 })
      .limit(RECENT_TRANSACTIONS_LIMIT)
      .lean(),

    Expense.aggregate([
      {
        $match: {
          userId: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        $group: {
          _id: {
            month: {
              $month: "$expenseDate",
            },
          },
          amount: {
            $sum: "$amount",
          },
        },
      },
      {
        $sort: {
          "_id.month": 1,
        },
      },
    ]),

    Expense.aggregate([
      {
        $match: {
          userId: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        $group: {
          _id: "$category",
          amount: {
            $sum: "$amount",
          },
        },
      },
      {
        $sort: {
          amount: -1,
        },
      },
    ]),
  ]);

  const monthNames = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const expenseTrend = expenseTrendResult.map((item) => ({
    month: monthNames[item._id.month],
    amount: item.amount,
  }));

  const categoryBreakdown = categoryBreakdownResult.map((item) => ({
    category: item._id,
    amount: item.amount,
  }));

  return {
    totalExpenses: totalExpensesResult[0]?.total || 0,
    monthlyExpenses: monthlyExpensesResult[0]?.total || 0,
    transactionCount,
    recentTransactions: recentTransactions.map(formatExpense),
    expenseTrend,
    categoryBreakdown,
  };
};

const formatExpense = (expense) => ({
  id: expense._id,
  title: expense.title,
  amount: expense.amount,
  category: expense.category,
  description: expense.description,
  expenseDate: expense.expenseDate,
  createdAt: expense.createdAt,
  updatedAt: expense.updatedAt,
});

module.exports = {
  createExpense,
  updateExpense,
  deleteExpense,
  getExpenseHistory,
  getDashboard,
};
