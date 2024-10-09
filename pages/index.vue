<!-- ~/components/LaunchTable.vue -->
<template>
  <table class="table is-striped is-fullwidth" v-if="launches.length">
    <thead>
      <tr>
        <th>Flight Number</th>
        <th>Name</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="launch in launches" :key="launch.flight_number">
        <td>{{ launch.flight_number }}</td>
        <td>{{ launch.name }}</td>
        <td>{{ new Date(launch.date_utc).toLocaleDateString() }}</td>
      </tr>
    </tbody>
  </table>
  <p v-else>Loading launches...</p>
</template>

<script setup lang="ts">
import { useLaunchStore } from "~/stores/launches";
import { onMounted, computed } from "vue";

const launchStore = useLaunchStore();

onMounted(() => {
  if (!launchStore.launches.length) {
    launchStore.fetchLaunches(); // Fetch launches only if the state is empty
  }
});

const launches = computed(() => launchStore.launches);
</script>

<style scoped></style>
