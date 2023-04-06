<script setup lang="ts">
import { ref, watch } from "vue";
import { ICartItem } from "../models/ICartItem";

interface IShowCartProps {
  cart: ICartItem[];
}

const props = defineProps<IShowCartProps>();

let sum = ref(0);

watch(props.cart, () => {
  console.log("Props: ", props.cart);
  let totalAmountOfProducts = 0;

  props.cart.forEach((cartItem) => {
    totalAmountOfProducts += cartItem.amount;
  });
  sum.value = totalAmountOfProducts;
});
</script>

<template>
  {{ sum }}
</template>

<style scoped></style>
