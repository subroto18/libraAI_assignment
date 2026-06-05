const User = require("../model/user.model");
const getMe = async (userId) => {
  let select = "name email createdAt updatedAt";
  const user = await User.findById(userId).select(select).lean();

  return {
    id: user._id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
};

module.exports = {
  getMe,
};
