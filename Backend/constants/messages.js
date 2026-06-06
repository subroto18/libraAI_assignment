const MESSAGES = {
  AUTH: {
    USER_REGISTERED: "User registered successfully",
    USER_LOGEDIN: "Login successful",
    INVALID_CREDENTIALS: "Invalid email or password",
    USER_ALREADY_EXISTS: "User already exists",
  },

  GENERAL: {
    INTERNAL_ERROR: "Internal Server Error",
    ROUTE_NOT_FOUND: "Route not found",
  },
  EXPENSE: {
    CREATED: "Expense created successfully",
    UPDATED: "Expense updated successfully",
    DELETED: "Expense deleted successfully",
    FETCHED: "Expenses fetched successfully",
    DETAILS_FETCHED: "Expense details fetched successfully",
    DASHBOARD_FETCHED: "Dashboard data fetched successfully",
    NOT_FOUND: "Expense not found",
  },

  CATEGORY: {
    CREATED: "Category created successfully",
    FETCHED: "Categories fetched successfully",
    UPDATED: "Category updated successfully",
    DELETED: "Category deleted successfully",
    NOT_FOUND: "Category not found",
    ALREADY_EXISTS: "Category already exists",
  },

  SERVER: {
    RUNNING: "Task Management API is running successfully",
  },
};

module.exports = MESSAGES;
