const express = require("express");
const { createUser, userLogin } = require("../../controllers/auth.controller");
const validate = require("../../middleware/validate.middleware");
const {
  registerSchema,
  loginSchema,
} = require("../../validations/auth.validation");
const router = express.Router();
router.post("/register", validate(registerSchema), createUser);
router.post("/login", validate(loginSchema), userLogin);
module.exports = router;
