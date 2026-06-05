const { z } = require("zod");
const createExpenseSchema = z.object({
  title: z.string().min(1),
  amount: z.number().positive(),
  category: z.string(),
  description: z.string().optional(),
  expenseDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .transform((value) => new Date(value)),
});

const updateExpenseSchema = z.object({
  title: z.string().min(1),
  amount: z.number().positive(),
  category: z.string(),
  description: z.string().optional(),
  expenseDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .transform((value) => new Date(value)),
});

module.exports = {
  createExpenseSchema,
  updateExpenseSchema,
};
