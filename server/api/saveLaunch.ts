// ~/server/api/saveLaunch.ts
import { defineEventHandler, readBody } from "h3";
import Launch from "~/server/models/Launch";
import validator from "validator";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // Validate and sanitize the incoming data
  const flightNumber = body.flightNumber;
  const missionName = body.missionName;
  const launchDate = body.launchDate;

  // Check required fields
  if (!flightNumber || !missionName || !launchDate) {
    return {
      success: false,
      message: "Required fields are missing",
    };
  }

  // Sanitize the inputs
  const sanitizedMissionName = validator.escape(missionName); // Escape HTML characters to prevent XSS
  const sanitizedLaunchDate = validator.toDate(launchDate); // Convert to date

  // Further validation can be done here
  if (!validator.isNumeric(flightNumber.toString())) {
    return {
      success: false,
      message: "Flight number must be a number",
    };
  }

  try {
    // Save the launch to MongoDB
    const newLaunch = new Launch({
      flightNumber: flightNumber,
      missionName: sanitizedMissionName,
      launchDate: sanitizedLaunchDate,
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
