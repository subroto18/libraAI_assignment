const User = require("../model/user.model");
const AppError = require("../utils/AppError");
const { generateAccessToken } = require("../utils/generateToken");

const register = async (payload) => {
  const { name, email, password } = payload || {};
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new AppError({
      code: "USER_ALREADY_EXISTS",
    });
  }
  const user = await User.create({
    name,
    email,
    password,
  });

  return {
    id: user._id,
    name: user.name,
    email: user.email,
  };
};

const login = async (payload) => {
  const { email, password } = payload || {};

  const user = await User.findOne({ email });
  console.log(user, "user");
  if (!user) {
    throw new AppError({
      code: "INVALID_CREDENTIALS",
    });
  }

  const isPasswordValid = await user.comparePassword(password);

  if (!isPasswordValid) {
    throw new AppError({
      code: "INVALID_CREDENTIALS",
    });
  }

  const token = generateAccessToken(user);

  return {
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  };
};

module.exports = {
  register,
  login,
};
