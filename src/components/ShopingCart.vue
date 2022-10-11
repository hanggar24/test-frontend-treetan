<script setup>
import { toRefs } from "vue";
const props = defineProps({
  carts: {
    type: Array,
    default: () => [],
  },
});
const { carts } = toRefs(props);
</script>

<template>
  <div class="shadow-main rounded-xl p-4 pt-10">
    <h1 class="font-bold text-gray-700">Shoping Cart</h1>

    <table class="table-shoping-cart mt-10">
      <thead>
        <tr>
          <th>Name</th>
          <th>Qty</th>
          <th>Price</th>
          <th>Subtotal</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="cart in carts" :key="cart.id">
          <td>{{ cart.title }}</td>
          <td>{{cart.qty}}</td>
          <td>{{ cart.price }}</td>
          <td>{{ cart.price * cart.qty }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style lang="scss" scoped>
.table-shoping-cart {
  @apply w-full;
  thead {
    th {
      @apply text-[#7A7D85] font-normal px-2 pb-6;
    }
  }
  tbody{
    td{
        @apply text-sm text-gray-400 text-center py-2;
    }
  }
}
</style>
