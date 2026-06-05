const errorMap = require("../constants/errorMap");

class AppError extends Error {
  constructor({ code = "INTERNAL_ERROR", message, errors = null }) {
    const err = errorMap[code];
    super(message || err?.message || "Internal Server Error");
    this.statusCode = err?.statusCode || 500;
    this.code = code;
    this.errors = errors;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
