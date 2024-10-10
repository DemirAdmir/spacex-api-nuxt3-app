// ~/server/api/getLaunches.ts
import { defineEventHandler, getQuery } from "h3";
import axios from "axios";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const limit = query.limit ? parseInt(query.limit as string, 10) : 30; // Default to 30 launches

  try {
    const response = await axios.post(
      "https://api.spacexdata.com/v4/launches/query",
      {
        query: {},
        options: {
          limit,
          sort: { date_utc: "desc" },
          select: {
            flight_number: 1,
            name: 1,
            date_utc: 1,
          },
        },
      }
    );

    return {
      success: true,
      data: response.data.docs,
    };
  } catch (error) {
    console.error("Failed to fetch SpaceX launches:", error);
    return {
      success: false,
      message: "Failed to fetch launches",
    };
  }
});
