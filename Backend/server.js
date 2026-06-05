const express = require("express");
const cors = require("cors");
require("dotenv").config();
const healthRoutes = require("./routes/healthRoutes");
const errorHandler = require("./middleware/error.middleware");
const app = express();
app.use(cors());
app.use(express.json());
// Health route
app.use("/api/health", healthRoutes);

// Catch Invalid routes
app.use((req, res, next) => {
  next(
    new AppError({
      code: "ROUTE_NOT_FOUND",
      message: `Route ${req.originalUrl} not found`,
    }),
  );
});
//  Global error handler
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running PORT: ${PORT}`);
});
