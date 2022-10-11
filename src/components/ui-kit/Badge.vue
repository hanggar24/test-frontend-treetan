<script setup>
defineProps({
  number: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <div class="px-1 flex justify-center items-center h-6 bg-[#FFDBE2] rounded-md">
    <span class="text-danger font-semibold text-xs">{{ number }}</span>
  </div>
</template>
