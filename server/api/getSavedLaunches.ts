// ~/server/api/getSavedLaunches.ts
import { defineEventHandler } from "h3";
import Launch from "~/server/models/Launch"; // Make sure you have a Mongoose model for Launch

export default defineEventHandler(async () => {
  try {
    const launches = await Launch.find(); // Fetch all saved launches from MongoDB
    return {
      success: true,
      data: launches,
    };
  } catch (error) {
    console.error("Failed to fetch saved launches:", error);
    return {
      success: false,
      message: "Failed to fetch saved launches",
    };
  }
});
