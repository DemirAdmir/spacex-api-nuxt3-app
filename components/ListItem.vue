<!-- ~/components/ListItem.vue -->

<template>
  <!-- Display launch information inside a media component -->
  <article class="media" role="listitem">
    <div class="media-content">
      <div class="content">
        <div class="level">
          <div class="level-left">
            <p>
              <strong>{{ launchName }}</strong> (Flight Number: {{ launchId }})
              -
              {{ formattedDate }}
            </p>
          </div>
          <div class="level-right">
            <Button
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
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from "vue";
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

<style scoped></style>
