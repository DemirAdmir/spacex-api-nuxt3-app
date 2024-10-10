<!-- ~/components/ListItem.vue -->
<template>
  <!-- Display launch information inside a media component -->
  <article class="media">
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{ launchName }}</strong> (Flight Number: {{ launchId }}) -
          {{ formattedDate }}
        </p>
      </div>
      <nav class="level is-mobile"></nav>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Launch } from "~/interfaces/Launch";

// Props for the ListItem component
const props = defineProps<{
  launch: Launch;
}>();

// Computed properties for reactive data manipulation
const launchId = computed(() => props.launch.flight_number || "N/A");
const launchName = computed(() => props.launch.name || "Unknown");
const formattedDate = computed(() =>
  props.launch.date_utc
    ? new Date(props.launch.date_utc).toLocaleDateString()
    : "Invalid Date"
);
</script>

<style scoped></style>
