const mongoose = require("mongoose");
const DB_MESSAGES = require("../constants/dbMessages");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(DB_MESSAGES.CONNECTED(conn.connection.host));
  } catch (error) {
    console.log(DB_MESSAGES.CONNECTION_ERROR(error.message));
    process.exit(1);
  }
};

module.exports = connectDB;
