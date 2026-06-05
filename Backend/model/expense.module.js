const mongoose = require("mongoose");
const CATEGORIES = require("../constants/categories");
const USER = "User";
const expenseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
    description: {
      type: String,
      trim: true,
      default: "",
      maxlength: 500,
    },
    expenseDate: {
      type: Date,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: USER,
      required: true,
    },
    category: {
      type: String,
      enum: CATEGORIES,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
