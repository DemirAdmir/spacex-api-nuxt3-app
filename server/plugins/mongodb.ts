// ~/server/plugins/mongodb.ts
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export default defineNitroPlugin(() => {
  const mongoUri = useRuntimeConfig().mongoUri; // Get MongoDB URI from runtime configuration

  if (!mongoUri) {
    throw new Error("MONGODB_URI is not defined in the environment variables");
  }

  // Check if the connection is already established to avoid multiple connections
  if (mongoose.connection.readyState === 0) {
    mongoose
      .connect(mongoUri)
      .then(() => console.log("MongoDB connected successfully"))
      .catch((err) => console.error("MongoDB connection error:", err));
  }
});
