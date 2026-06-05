const asyncHandler = require("../utils/asyncHandler");
const userService = require("../services/user.service");
const sendResponse = require("../utils/responseHandler");
const getMe = asyncHandler(async (req, res) => {
  const user = await userService.getMe(req.user._id);
  return sendResponse({
    res,
    statusCode: 200,
    message: "User fetched successfully",
    data: user,
  });
});

module.exports = {
  getMe,
};
