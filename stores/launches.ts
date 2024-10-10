// ~/stores/launchStore.ts
import { defineStore } from "pinia";
import axios from "axios";
import type { Launch } from "~/interfaces/Launch";

interface LaunchState {
  launches: Launch[];
}

export const useLaunchStore = defineStore("launchStore", {
  state: (): LaunchState => ({
    launches: [] as Launch[],
  }),
  actions: {
    // Fetch launches from the SpaceX API
    async fetchLaunches(): Promise<void> {
      try {
        // Query the SpaceX API to get the first 30 launches sorted by date
        const response = await axios.post<{ docs: Launch[] }>(
          "https://api.spacexdata.com/v4/launches/query",
          {
            query: {},
            options: {
              limit: 30, // Limit to the first 30 launches
              sort: { date_utc: "desc" }, // Sort by date from newest to oldest
              select: ["flight_number", "name", "date_utc"], // Only request these fields
            },
          }
        );

        this.launches = response.data.docs;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error("Failed to fetch launches:", error.message);
        } else {
          console.error("An unexpected error occurred:", error);
        }
      }
    },
    // Save a launch to MongoDB
    // ~/stores/launchStore.ts
    async saveLaunch(launch: Launch) {
      try {
        const response = await axios.post<{
          success: boolean;
          message?: string;
        }>("/api/saveLaunch", {
          flightNumber: launch.flight_number,
          missionName: launch.name,
          launchDate: launch.date_utc,
        });

        if (!response.data.success) {
          throw new Error(response.data.message || "Failed to save launch");
        }

        console.log("Backend response:", response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error("Axios error saving launch:", error.message);
        } else {
          console.error("Unexpected error saving launch:", error);
        }
        throw error;
      }
    },
  },
});
