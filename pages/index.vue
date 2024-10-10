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
import { onMounted, computed } from "vue";
import { useToast } from "vue-toastification";

const launchStore = useLaunchStore();

onMounted(() => {
  if (!launchStore.launches.length) {
    launchStore.fetchLaunches(); // Fetch launches only if the state is empty
  }
});

const toast = useToast();
const launches = computed(() => launchStore.launches);

// Save the selected launch to MongoDB
const handleSaveLaunch = async (launch: Launch) => {
  try {
    await launchStore.saveLaunch(launch);
    // alert("Launch saved successfully!");
    toast.success("Launch saved successfully!");
  } catch (error) {
    console.error("Error saving launch:", error);
    // alert("Failed to save the launch");
    toast.error("Failed to save the launch");
  }
};
</script>

<style scoped></style>
