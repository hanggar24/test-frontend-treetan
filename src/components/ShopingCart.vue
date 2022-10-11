<script setup>
import { toRefs, computed } from "vue";
const props = defineProps({
  carts: {
    type: Array,
    default: () => [],
  },
});
const { carts } = toRefs(props);

const subtotal = computed(() =>
  carts.value.map((item) => {
    return { ...item, subtotal: item.qty * item.discountPrice };
  })
);
const totalPrice = computed(() =>
subtotal.value.reduce((acc, cur) => {
    return acc + cur.subtotal;
  }, 0)
);
</script>

<template>
  <div class="shadow-main rounded-xl p-4 pt-10">
    <h1 class="font-bold text-gray-700">Shoping Cart</h1>
    {{totalPrice}}
    <table class="table-shoping-cart mt-10">
      <thead>
        <tr>
          <th>Name</th>
          <th>Qty</th>
          <th>Price</th>
          <th>Subtotal</th>
        </tr>
      </thead>

      <tbody class="min-h-[400px]">
        <tr v-if="!carts.length">
          <td colspan="4">
            <i class="icon-basket text-9xl text-gray-200"></i>
          </td>
        </tr>
        <tr v-for="cart in carts" :key="cart.id">
          <td>{{ cart.title }}</td>
          <td>{{ cart.qty }}</td>
          <td>{{ cart.price }}</td>
          <td>{{ cart.discountPrice * cart.qty }}</td>
        </tr>
        <td colspan="4" class="!py-4">
          <hr />
        </td>

        <tr>
          <td class="!text-center"><b>Total</b></td>
          <td></td>
          <td></td>
          <td> <b> {{totalPrice}} </b></td>
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
      &:first-child {
        @apply w-1/3;
      }
    }
  }
  tbody {
    td {
      @apply text-sm text-gray-400 text-center py-2;
    }
  }
}
.table-amount {
  @apply w-full;
}
</style>
