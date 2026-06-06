const express = require("express");
const router = express.Router();
const {
  createExpenseSchema,
  updateExpenseSchema,
} = require("../../validations/expense.validation");
const validate = require("../../middleware/validate.middleware");
const {
  createExpense,
  updateExpense,
  deleteExpense,
  getExpenseHistory,
  getDashboard,
} = require("../../controllers/expense.controller");
router.post("/", validate(createExpenseSchema), createExpense);
router.get("/history", getExpenseHistory);
router.put("/:id", validate(updateExpenseSchema), updateExpense);
router.delete("/:id", deleteExpense);
router.get("/dashboard", getDashboard);
module.exports = router;
