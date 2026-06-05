const errorMap = {
  INVALID_CREDENTIALS: {
    statusCode: 401,
    message: "Invalid email or password",
  },

  USER_ALREADY_EXISTS: {
    statusCode: 409,
    message: "User already exists",
  },

  UNAUTHORIZED: {
    statusCode: 401,
    message: "Unauthorized access",
  },

  VALIDATION_ERROR: {
    statusCode: 400,
    message: "Request body is required",
  },

  ROUTE_NOT_FOUND: {
    statusCode: 404,
    message: "Route not found",
  },

  CATEGORY_NOT_FOUND: {
    statusCode: 404,
    message: "Category not found",
  },

  CATEGORY_ALREADY_EXISTS: {
    statusCode: 409,
    message: "Category already exists",
  },

  EXPENSE_NOT_FOUND: {
    statusCode: 404,
    message: "Expense not found",
  },

  FORBIDDEN: {
    statusCode: 403,
    message: "You do not have permission to perform this action",
  },
};

module.exports = errorMap;
