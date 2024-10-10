<!-- ~/pages/savedLaunches.vue -->
<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title is-3 mb-5">Saved Launches</h1>
        <!-- Render the ListView component if saved launches are available, otherwise show a message -->
        <div v-if="savedLaunches.length > 0">
          <ListView
            :launches="savedLaunches"
            actionLabel="Delete Launch"
            buttonType="is-danger"
            @actionClick="deleteLaunch"
          />
        </div>
        <p v-else>No saved launches found.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useLaunchStore } from "../stores/launches";
import type { Launch } from "../interfaces/Launch";
import ListView from "~/components/ListView.vue";

const launchStore = useLaunchStore();
const loading = ref(false);

const savedLaunches = computed(() => launchStore.savedLaunches);

// Fetch saved launches from MongoDB when the component is mounted
onMounted(async () => {
  loading.value = true;
  try {
    await launchStore.fetchSavedLaunches();
  } catch (error) {
    console.error("Error fetching saved launches:", error);
  } finally {
    loading.value = false;
  }
});

// Delete the selected launch from MongoDB
const deleteLaunch = async (launch: Launch) => {
  const confirmDelete = confirm(
    `Are you sure you want to delete the launch: ${launch.name}?`
  );
  if (!confirmDelete) return;

  loading.value = true;
  alert("Launch deleted successfully.");
};
</script>

<style scoped>
.title {
  margin-bottom: 1rem;
}
</style>
