const EXPENSE_CONSTANTS = require("../constants/expense");
const MESSAGES = require("../constants/messages");
const expenseService = require("../services/expense.service");
const asyncHandler = require("../utils/asyncHandler");
const sendResponse = require("../utils/responseHandler");

const createExpense = asyncHandler(async (req, res) => {
  const data = await expenseService.createExpense(req.body, req.user.id);
  return sendResponse({
    res,
    statusCode: 201,
    message: MESSAGES.EXPENSE.CREATED,
    data: data,
  });
});

const updateExpense = asyncHandler(async (req, res) => {
  const data = await expenseService.updateExpense(
    req.params.id,
    req.body,
    req.user.id,
  );
  return sendResponse({
    res,
    statusCode: 200,
    message: MESSAGES.EXPENSE.UPDATED,
    data,
  });
});

const deleteExpense = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await expenseService.deleteExpense(id, req.user.id);
  return sendResponse({
    res,
    statusCode: 200,
    message: MESSAGES.EXPENSE.DELETED,
  });
});

const getExpenseHistory = asyncHandler(async (req, res) => {
  const expenses = await expenseService.getExpenseHistory({
    userId: req.user.id,
    search: req.query.search,
    category: req.query.category,
    cursor: req.query.cursor,
    limit: Number(req.query.limit || EXPENSE_CONSTANTS.DEFAULT_PAGE_SIZE),
  });

  return res.status(200).json({
    success: true,
    data: expenses,
  });
});

const getDashboard = asyncHandler(async (req, res) => {
  const data = await expenseService.getDashboard(req.user.id);
  return sendResponse({
    res,
    statusCode: 200,
    message: MESSAGES.EXPENSE.DASHBOARD_FETCHED,
    data,
  });
});

module.exports = {
  createExpense,
  updateExpense,
  deleteExpense,
  getExpenseHistory,
  getDashboard,
};
