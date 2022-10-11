<script setup>
import { toRefs } from "vue";
import Badge from "./ui-kit/Badge.vue";
const props = defineProps({
  product: {
    type: Object,
    default: () => {},
  },
});
defineEmits(["addToCart"]);

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
      <h2 class="description text-sm font-semibold" :title="product.description">
        {{ product.description }}
      </h2>

      <span class="price font-bold text-gray-600">
        ${{ product.discountPrice }}
      </span>

      <div class="flex items-center gap-2">
        <Badge :number="product.discountPercentage" />
        <span class="price line-through font-thin text-gray-400 text-xs">
          ${{ product.price }}
        </span>
      </div>

      <div class="rating flex gap-1 items-center text-warning text-xs">
        <i class="demo-icon icon-star"></i>
        <span>{{product.rating}}</span>
      </div>

      <button
        class="bg-primary py-2 rounded-md text-white mt-2 hover:text-gray-200"
        @click="$emit('addToCart', product)">
       <i class="icon-basket"></i> Add To Cart
      </button>
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
