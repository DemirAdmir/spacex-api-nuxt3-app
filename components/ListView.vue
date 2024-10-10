<!-- ~/components/ListView.vue -->
<template>
  <!-- Render a list of launches using the ListItem component -->
  <div class="box">
    <ListItem
      v-for="launch in launches"
      :key="launch.flight_number || launch._id"
      :launch="launch"
      :actionLabel="'Save Launch'"
      :buttonType="buttonType"
      @actionClick="onActionClick"
    />
  </div>
</template>

<script setup lang="ts">
import type { ListViewProps } from "~/interfaces/ListViewProps";
import { defineProps } from "vue";

// Define props
const props = defineProps<ListViewProps>();

// Handler for the actionClick event emitted by ListItem
const onActionClick = (launch: Launch) => {
  console.log("Launch clicked:", launch);
  alert("Launch clicked: " + JSON.stringify(launch));
};
</script>

<style scoped></style>
