const express = require("express");
const sendResponse = require("../utils/responseHandler");
const MESSAGES = require("../constants/messages");
const router = express.Router();
router.get("/", (req, res) => {
  return sendResponse({
    res,
    statusCode: 200,
    message: MESSAGES.SERVER.RUNNING,
    data: {
      status: "UP",
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    },
  });
});

module.exports = router;
