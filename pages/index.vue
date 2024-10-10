<!-- ~/pages/index.vue -->
<template>
  <div>
    <!-- Main section displaying the SpaceX launches -->
    <section class="section">
      <div class="container">
        <h1 class="title is-3 mb-5">SpaceX Launches</h1>
        <!-- Render the ListView component if launches are available, otherwise show a loading message -->
        <div v-if="launchStore.launches.length > 0">
          <ListView
            :launches="launchStore.launches"
            actionLabel="Save Launch"
            buttonType="is-primary"
            @actionClick="handleSaveLaunch"
          />
        </div>
        <p v-else>Loading launches...</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useLaunchStore } from "~/stores/launches";
import { onMounted, ref } from "vue";
import { useToast } from "vue-toastification";

// Get the launch store and toast instance
const launchStore = useLaunchStore();
const toast = useToast();
const isClient = ref(false);

// Server-side fetching using `useFetch` to get the initial data
const { data: serverData, error } = await useFetch("/api/getLaunches", {
  params: { limit: 30 },
});

// Update the Pinia store with server-side fetched data if available
if (serverData.value?.data) {
  launchStore.launches = serverData.value.data;
} else if (error.value) {
  console.error("Failed to fetch initial launches:", error.value);
}

// Client-side fetching using `onMounted` for real-time updates
onMounted(async () => {
  isClient.value = true; // Indicate that we're now on the client
  if (!launchStore.launches.length) {
    // Fetch launches again if no data is available
    await launchStore.fetchLaunches();
  }
});

// Handle saving a launch
const handleSaveLaunch = async (launch: Launch) => {
  try {
    await launchStore.saveLaunch(launch);
    toast.success("Launch saved successfully!");
  } catch (error) {
    console.error("Error saving launch:", error);
    toast.error("Failed to save the launch");
  }
};
</script>

<style scoped></style>
