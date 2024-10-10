// ~/stores/launchStore.ts
import { defineStore } from "pinia";
import axios from "axios";
import type { Launch } from "../interfaces/Launch";

export const useLaunchStore = defineStore("launchStore", {
  state: () => ({
    launches: [] as Launch[], // SpaceX API launches
    savedLaunches: [] as Launch[], // Saved launches in MongoDB
  }),
  actions: {
    // Fetch launches from the SpaceX API
    async fetchLaunches() {
      try {
        // Query the SpaceX API with sorting by date in descending order
        const { data } = await axios.post<{ docs: Launch[] }>(
          "https://api.spacexdata.com/v4/launches/query",
          {
            query: {},
            options: {
              limit: 30, // Limit to the first 30 launches
              sort: {
                date_utc: "desc", // Sort by date from newest to oldest
              },
              select: {
                flight_number: 1,
                name: 1,
                date_utc: 1,
              },
            },
          }
        );

        // Update the state with the fetched and sorted data
        this.launches = data.docs;
      } catch (error) {
        console.error("Failed to fetch launches:", error);
      }
    },

    // Save a launch to MongoDB
    async saveLaunch(launch: Launch) {
      try {
        // Send the data in the format expected by the backend
        const response = await axios.post<{
          success: boolean;
          message?: string;
        }>("/api/saveLaunch", {
          flightNumber: launch.flight_number,
          missionName: launch.name,
          launchDate: launch.date_utc,
        });

        if (response.data.success) {
          // Refresh the list of saved launches if the save operation was successful
          await this.fetchSavedLaunches();
        } else {
          console.error(
            "Failed to save the launch:",
            response.data.message || "Unknown error"
          );
        }
      } catch (error) {
        console.error("Error saving launch:", error);
      }
    },

    // Fetch all saved launches from MongoDB
    async fetchSavedLaunches() {
      try {
        const response = await axios.get("/api/getSavedLaunches");

        if (response.data.success) {
          // Map the retrieved data to match the Launch structure
          this.savedLaunches = response.data.data.map(
            (launch: {
              _id: string;
              flightNumber: number;
              missionName: string;
              launchDate: string;
            }) => ({
              _id: launch._id,
              flight_number: launch.flightNumber,
              name: launch.missionName,
              date_utc: new Date(launch.launchDate).toISOString(),
            })
          );
        } else {
          console.error("Failed to fetch saved launches.");
        }
      } catch (error) {
        console.error("Failed to fetch saved launches:", error);
      }
    },
  },
});
