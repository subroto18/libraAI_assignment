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
    message: "Validation failed",
  },
  ROUTE_NOT_FOUND: {
    statusCode: 404,
    message: "Route not found",
  },
};

module.exports = errorMap;
