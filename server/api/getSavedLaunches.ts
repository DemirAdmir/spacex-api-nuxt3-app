// ~/server/api/getSavedLaunches.ts
import { defineEventHandler } from "h3";

export default defineEventHandler(() => {
  // Return a test message
  return {
    success: true,
    message: "This is a test message from getSavedLaunches",
  };
});
