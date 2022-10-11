<script setup>
import { ref } from "vue";
import ListCatalogue from "./components/ListCatalogue.vue";
import ShopingCart from "./components/ShopingCart.vue";

const listProducts = ref([]);
const getActualPrice = (price, discountPercentage) => {
  if (discountPercentage < 0) return price;
  const discountPrice = price - price * (discountPercentage / 100);
  return parseFloat(discountPrice);
};

const modifyListProducts = (products) => {
  listProducts.value = products.map((item) => {
    return {
      ...item,
      qty: 0,
      actualPrice: getActualPrice(item.price, item.discountPercentage),
    };
  });
};
const getDataProduct = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const { products } = await response.json();
    modifyListProducts(products);
  } catch (error) {
    console.log(error);
  }
};
getDataProduct();

const carts = ref([]);
const addToCart = (product) => {
  carts.value.push(product);
};
</script>
<template>
  <header class="bg-primary p-4">
    <h1 class="text-white font-semibold text-center">Shoping Cart App</h1>
  </header>
  <main class="bg-gray-100">
    <div class="container py-16">
      <div class="flex gap-10">
        <div class="w-4/6">
          <ListCatalogue
            :products="listProducts"
            @add-to-cart="addToCart($event)"/>
        </div>
        <div class="w-2/6">
          <ShopingCart :carts="carts" />
        </div>
      </div>
    </div>
  </main>
</template>
