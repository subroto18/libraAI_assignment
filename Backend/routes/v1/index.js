const express = require("express");
const router = express.Router();
const authRoutes = require("./auth.routes");
const userRoutes = require("./user.routes");
const authMiddleware = require("../../middleware/auth.middleware");
router.use("/auth", authRoutes);
router.use("/user", authMiddleware, userRoutes);
module.exports = router;
