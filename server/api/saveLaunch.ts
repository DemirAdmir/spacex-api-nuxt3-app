// ~/server/api/saveLaunch.ts
import { defineEventHandler, readBody } from "h3";
import Launch from "~/server/models/Launch"; // Import the Launch model

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // Validate the incoming data
  if (!body.flightNumber || !body.missionName || !body.launchDate) {
    return {
      success: false,
      message: "Required fields are missing",
    };
  }

  try {
    // Save the launch to MongoDB
    const newLaunch = new Launch({
      flightNumber: body.flightNumber,
      missionName: body.missionName,
      launchDate: body.launchDate,
    });

    await newLaunch.save();

    console.log("Launch saved successfully");

    return {
      success: true,
      message: "Launch saved successfully",
    };
  } catch (error) {
    console.error("Error saving launch:", error);
    return {
      success: false,
      message: "Failed to save launch",
    };
  }
});
