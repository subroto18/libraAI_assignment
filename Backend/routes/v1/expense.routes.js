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
} = require("../../controllers/expense.controller");
router.post("/", validate(createExpenseSchema), createExpense);
router.get("/history", getExpenseHistory);
// router.get("/:id", expenseController.getExpenseById);
router.put("/:id", validate(updateExpenseSchema), updateExpense);
router.delete("/:id", deleteExpense);
module.exports = router;
