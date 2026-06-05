const jwt = require("jsonwebtoken");

const User = require("../model/user.model");
const asyncHandler = require("../utils/asyncHandler");
const AppError = require("../utils/AppError");
const AUTH_CONFIG = require("../config/auth.config");

const authMiddleware = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new AppError({
      code: "UNAUTHORIZED",
    });
  }
  const token = authHeader.split(" ")[1];
  let decoded;
  try {
    decoded = jwt.verify(token, AUTH_CONFIG.JWT_SECRET);
  } catch (error) {
    throw new AppError({
      code: "UNAUTHORIZED",
    });
  }

  if (!decoded?.userId) {
    throw new AppError({
      code: "UNAUTHORIZED",
    });
  }

  const user = await User.findById(decoded.userId).select("-password");

  if (!user) {
    throw new AppError({
      code: "UNAUTHORIZED",
    });
  }

  req.user = user;

  next();
});

module.exports = authMiddleware;
