<script setup>
import Catalogue from "./Catalogue.vue";
defineProps({
  products: {
    type: Array,
    default: () => [],
  },
});

defineEmits(['addToCart'])
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
    <Catalogue
      v-for="product in products"
      :key="product.id"
      :product="product"
      @add-to-cart="$emit('addToCart', $event)"/>
  </div>
</template>
