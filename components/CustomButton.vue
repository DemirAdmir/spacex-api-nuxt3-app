<!-- ~/components/CustomButton.vue -->
<template>
  <button :class="['button', buttonType, buttonClass]" @click="handleClick">
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

// Define props
const props = defineProps<{
  label: string;
  buttonType?: string;
  buttonClass?: string;
}>();

const emits = defineEmits<{
  (e: "click"): void;
}>();

// Emit the click event
const handleClick = () => {
  emits("click");
};
</script>

<style scoped></style>
