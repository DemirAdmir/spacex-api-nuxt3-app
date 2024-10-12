<!-- ~/pages/savedLaunches.vue -->
<template>
  <NuxtErrorBoundary>
    <div>
      <section
        class="section"
        :style="{
          backgroundColor: 'var(--background-color)',
          color: 'var(--text-color)',
        }"
        aria-labelledby="saved-launches-heading"
        aria-live="polite"
      >
        <div class="container">
          <h1 id="saved-launches-heading" class="title is-3 mb-5">
            Saved Launches
          </h1>

          <!-- Show loading skeleton when saved launches are being fetched -->
          <SkeletonLoader v-if="loading" />

          <div v-else-if="savedLaunches.length > 0" aria-live="polite">
            <ListView
              :launches="savedLaunches"
              actionLabel="Delete Launch"
              buttonType="is-danger"
              @actionClick="deleteLaunch"
              aria-label="List of saved launches"
            />
          </div>
          <p v-else class="notification is-info" aria-live="assertive">
            No saved launches found.
          </p>
        </div>
      </section>
    </div>
  </NuxtErrorBoundary>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useLaunchStore } from "../stores/launches";
import type { Launch } from "../interfaces/Launch";
import ListView from "~/components/ListView.vue";
import { useToast } from "vue-toastification";
import SkeletonLoader from "~/components/SkeletonLoader.vue";

const launchStore = useLaunchStore();
const loading = ref(true); // Set loading to true initially
const toast = useToast();
const savedLaunches = computed(() => launchStore.savedLaunches);

onMounted(async () => {
  loading.value = true; // Start loading
  try {
    await launchStore.fetchSavedLaunches();
  } catch (error) {
    console.error("Error fetching saved launches:", error);
  } finally {
    loading.value = false; // End loading
  }
});

const deleteLaunch = async (launch: Launch) => {
  const confirmDelete = confirm(
    `Are you sure you want to delete the launch: ${launch.name}?`
  );
  if (!confirmDelete) return;
  loading.value = true; // Start loading during deletion
  try {
    await launchStore.deleteLaunch(launch._id as string);
    toast.success("Launch deleted successfully.");
  } catch (error) {
    console.error("Error deleting launch:", error);
    toast.error("Failed to delete the launch.");
  } finally {
    loading.value = false; // End loading
  }
};
</script>

<style scoped>
.section {
  transition: background-color 0.3s, color 0.3s;
}
</style>
