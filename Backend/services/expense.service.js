const mongoose = require("mongoose");
const Expense = require("../model/expense.module");
const AppError = require("../utils/AppError");
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
  limit,
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
  ] = await Promise.all([
    Expense.aggregate([
      {
        $match: {
          userId,
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
          userId,
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
      .limit(5)
      .lean(),
  ]);

  return {
    totalExpenses: totalExpensesResult[0]?.total || 0,
    monthlyExpenses: monthlyExpensesResult[0]?.total || 0,
    transactionCount,
    recentTransactions,
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
