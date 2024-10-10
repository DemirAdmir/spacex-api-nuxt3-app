// ~/server/api/deleteLaunch/[id].delete.ts
import { defineEventHandler } from "h3";
import Launch from "~/server/models/Launch"; // Import the Launch model

export default defineEventHandler(async (event) => {
  const launchId = event.context.params?.id; // Get the ID from the route params

  if (!launchId) {
    return {
      success: false,
      message: "Launch ID is required",
    };
  }

  try {
    const deletedLaunch = await Launch.findByIdAndDelete(launchId); // Delete the launch by its ID
    if (!deletedLaunch) {
      return {
        success: false,
        message: "Launch not found",
      };
    }

    return {
      success: true,
      message: "Launch deleted successfully",
    };
  } catch (error) {
    console.error("Failed to delete launch:", error);
    return {
      success: false,
      message: "Failed to delete launch",
    };
  }
});
