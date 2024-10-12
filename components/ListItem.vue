<!-- ~/components/ListItem.vue -->

<template>
  <NuxtErrorBoundary>
    <!-- Display launch information inside a media component -->
    <article class="media card" role="listitem">
      <div class="media-content">
        <div class="content">
          <div class="level">
            <div class="level-left">
              <p>
                <strong>{{ launchName }}</strong> (Flight Number:
                {{ launchId }}) -
                {{ formattedDate }}
              </p>
            </div>
            <div class="level-right">
              <Button
                class="action-button"
                :label="actionLabel"
                :buttonType="buttonType"
                @click="onActionClick"
                aria-label="Perform action on {{ launchName }}"
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  </NuxtErrorBoundary>
</template>

<script setup lang="ts">
"use strict";
import type { Launch } from "~/interfaces/Launch";
import Button from "~/components/CustomButton.vue";

// Define props
const props = defineProps<{
  launch: Launch;
  actionLabel: string;
  buttonType?: string;
}>();

// Define emits with TypeScript type annotations
const emits = defineEmits<{
  (e: "actionClick", launch: Launch): void;
}>();

// Computed properties for handling launch data
const launchId = computed(() => props.launch.flight_number || "N/A");
const launchName = computed(() => props.launch.name || "Unknown");
const formattedDate = computed(() =>
  props.launch.date_utc
    ? new Date(props.launch.date_utc).toLocaleDateString()
    : "Invalid Date"
);

// Emit the actionClick event when the button is clicked
const onActionClick = () => {
  emits("actionClick", props.launch); // Emit the launch object from props
};
</script>

<style scoped>
.card {
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px 0;
  background-color: var(--background-color);
  transition: box-shadow 0.3s;
}

.card:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4); /* Darker shadow on hover */
}

.action-button {
  padding: 10px 15px;
  margin-bottom: 10px;
}
</style>
