<!-- ~/components/ListView.vue -->
<template>
  <!-- Render a list of launches using the ListItem component -->
  <div class="box">
    <ListItem
      v-for="launch in launches"
      :key="launch.flightNumber || launch._id"
      :launch="launch"
    />
  </div>
</template>

<script setup lang="ts">
import type { ListViewProps } from "~/interfaces/ListViewProps";

// Define props for the List component
const props = defineProps<ListViewProps>();
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
