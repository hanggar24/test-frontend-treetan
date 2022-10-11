<script setup>
import { ref } from "vue";
import ListCatalogue from "./components/ListCatalogue.vue";
import ShopingCart from "./components/ShopingCart.vue";

const listProducts = ref([]);
const getDiscountPrice = (price, discountPercentage) => {
  if (discountPercentage < 0) return price;
  const discountPrice = price - price * (discountPercentage / 100);
  return parseFloat(discountPrice);
};


const getDataProduct = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const { products } = await response.json();
    listProducts.value = products.map((item) => {
    return {
      ...item,
      qty: 0,
      discountPrice: getDiscountPrice(item.price, item.discountPercentage)
    };
  });
  } catch (error) {
    console.log(error);
  }
};
getDataProduct();

const carts = ref([]);

// const totalPrice = computed(() => carts.value.reduce((acc, cur) => acc.price + cur.price))
const addToCart = (product) => {
  const index = listProducts.value.findIndex((p) => p.id === product.id);
  listProducts.value[index].qty++
  const selectedShopingCarts = listProducts.value.filter(item => item.qty > 0)
  carts.value = selectedShopingCarts
};

const removeFromCart = (product) => {
  const index = listProducts.value.findIndex((p) => p.id === product.id);
  listProducts.value[index].qty--
  const selectedShopingCarts = listProducts.value.filter(item => item.qty > 0)
  carts.value = selectedShopingCarts
};
</script>
<template>
  <header class="bg-primary p-4">
    <h1 class="text-white font-semibold text-center">Shoping Cart App</h1>
  </header>
  <main class="bg-gray-100">
    <div class="px-2 py-16">
      <div class="flex gap-10">
        <div class="w-4/6">
          <ListCatalogue
            :products="listProducts"
            @add-to-cart="addToCart($event)"
            @remove-from-cart="removeFromCart($event)"/>
        </div>
        <div class="w-2/6">
          <ShopingCart :carts="carts" />
        </div>
      </div>
    </div>
  </main>
</template>
