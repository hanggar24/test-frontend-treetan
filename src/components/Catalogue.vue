<script setup>
import { toRefs } from "vue";
const props = defineProps({
  product: {
    type: Object,
    default: () => {},
  },
});
 defineEmits(['addToCart'])

const { product } = toRefs(props);
</script>
<template>
  <div class="shadow-main rounded-xl overflow-hidden w-full">
    <figure class="h-[130px]">
      <img
        class="object-contain h-full w-full"
        :src="product.thumbnail"
        loading="lazy"
        alt=""/>
    </figure>

    <div class="category pl-4 py-2 bg-primary rounded-br-full">
      <span class="text-white font-light">
        {{ product.category }}
      </span>
    </div>

    <div class="content flex flex-col gap-2 p-4">
      <h1
        class="title text-[#B6B6B6] font-semibold text-ellipsis overflow-hidden whitespace-nowrap"
        :title="product.title">
        {{ product.title }}
      </h1>
      <h2 class="description text-sm" :title="product.description">
        {{ product.description }}
      </h2>

      <span class="price font-bold text-gray-600"> ${{ product.actualPrice }} </span>
      <span class="price line-through font-thin text-gray-400 text-xs"> ${{ product.price }} </span>

      <button class="bg-primary py-2 rounded-md text-white mt-6 hover:text-gray-200" @click="$emit('addToCart', product)">Add To Cart</button>
    </div>
  </div>
</template>

<style>
.description {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
