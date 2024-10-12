<!-- ~/pages/index.vue -->
<template>
  <NuxtErrorBoundary>
    <div>
      <!-- Main section displaying the SpaceX launches -->
      <section
        class="section"
        :style="{
          backgroundColor: 'var(--background-color)',
          color: 'var(--text-color)',
        }"
        aria-labelledby="spacex-launches-heading"
        aria-live="polite"
      >
        <div class="container">
          <h1 id="spacex-launches-heading" class="title is-3 mb-5">
            SpaceX Launches
          </h1>
          <!-- Show skeleton loader when loading -->
          <SkeletonLoader v-if="loading" />

          <div v-else-if="launchStore.launches.length > 0">
            <ListView
              :launches="launchStore.launches"
              actionLabel="Save Launch"
              buttonType="is-primary"
              @actionClick="handleSaveLaunch"
              aria-label="List of SpaceX launches"
            />
          </div>

          <p v-else aria-live="assertive">No launches found.</p>
        </div>
      </section>
    </div>
  </NuxtErrorBoundary>
</template>

<script setup lang="ts">
import { useLaunchStore } from "~/stores/launches";
import { onMounted, ref } from "vue";
import { useToast } from "vue-toastification";
import SkeletonLoader from "~/components/SkeletonLoader.vue";

// Get the launch store and toast instance
const launchStore = useLaunchStore();
const toast = useToast();
const loading = ref(true); // Set loading to true initially

// Server-side fetching using `useFetch` to get the initial data
const { data: serverData, error } = await useFetch("/api/getLaunches", {
  params: { limit: 30 },
});

// Update the Pinia store with server-side fetched data if available
loading.value = true;
if (serverData.value?.data) {
  launchStore.launches = serverData.value.data;
} else if (error.value) {
  console.error("Failed to fetch initial launches:", error.value);
}
loading.value = false; // Stop loading after fetching
// Client-side fetching using `onMounted` for real-time updates
onMounted(async () => {
  if (!launchStore.launches.length) {
    loading.value = true;
    // Fetch launches again if no data is available
    await launchStore.fetchLaunches();
    loading.value = false;
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

<style scoped>
.skeleton-loader {
  margin-top: 20px;
}
</style>
