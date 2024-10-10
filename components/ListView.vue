<template>
  <div class="box">
    <ListItem
      v-for="launch in launches"
      :key="launch.flightNumber || launch._id"
      :launch="launch"
      :actionLabel="actionLabel"
      :buttonType="buttonType"
      @actionClick="onActionClick"
    />
  </div>
</template>

<script setup lang="ts">
import type { ListViewProps } from "../interfaces/ListViewProps";

const props = defineProps<ListViewProps>();
</script>

<style scoped>
/* Add any specific styling if necessary, or customize the default Bulma classes */
</style>

<!-- <script setup lang="ts">
import { PropType, defineProps, defineEmits } from "vue";
import ListItem from "./ListItem.vue";

const props = defineProps({
  launches: {
    type: Array as PropType<Array<any>>, // Replace with proper type
    required: true,
  },
  actionLabel: {
    type: String,
    required: true,
  },
  buttonType: {
    type: String,
    default: "is-primary", // Default to primary button type
  },
  onActionClick: {
    type: Function,
    required: true,
  },
});
</script> -->
