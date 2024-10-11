<!-- ~/pages/savedLaunches.vue -->
<!-- ~/pages/savedLaunches.vue -->
<template>
  <div>
    <section
      class="section"
      :style="{
        backgroundColor: 'var(--background-color)',
        color: 'var(--text-color)',
      }"
    >
      <div class="container">
        <h1 class="title is-3 mb-5">Saved Launches</h1>
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
import { useToast } from "vue-toastification";

const launchStore = useLaunchStore();
const loading = ref(false);
const toast = useToast();
const savedLaunches = computed(() => launchStore.savedLaunches);

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

const deleteLaunch = async (launch: Launch) => {
  const confirmDelete = confirm(
    `Are you sure you want to delete the launch: ${launch.name}?`
  );
  if (!confirmDelete) return;

  loading.value = true;
  try {
    await launchStore.deleteLaunch(launch._id as string);
    toast.success("Launch deleted successfully.");
  } catch (error) {
    console.error("Error deleting launch:", error);
    toast.error("Failed to delete the launch.");
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.section {
  transition: background-color 0.3s, color 0.3s;
}
</style>
