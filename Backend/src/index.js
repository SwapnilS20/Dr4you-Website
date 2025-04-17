import app from "./app.js";
import db from "./db/index.js";
import dotenv from 'dotenv';
dotenv.config();

try {
  const connection = await db.getConnection();
  console.log("Connected to the database!");
  connection.release();

  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
} catch (err) {
  console.error("Failed to connect to the database:", err);
  process.exit(1); // Exit the process if DB connection fails
}