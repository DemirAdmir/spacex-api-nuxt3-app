// ~/server/plugins/mongodb.ts
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Define the Nitro plugin
export default defineNitroPlugin(async () => {
  const mongoUri =
    useRuntimeConfig().mongoUri ||
    "mongodb://localhost:27017/spacex-launches-task"; // Fallback URI

  if (!mongoUri) {
    throw new Error("MONGODB_URI is not defined in the environment variables");
  }

  // Check if the connection is already established
  if (mongoose.connection.readyState === 0) {
    try {
      await mongoose.connect(mongoUri);
      console.log("MongoDB connected successfully");
    } catch (err) {
      console.error("MongoDB connection error:", err);
    }
  }
});
