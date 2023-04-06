<script setup lang="ts">
import { ICartItem } from "../models/ICartItem";
import ShowProduct from "./ShowProduct.vue";

interface IShowCartProps {
  cart: ICartItem[];
}
defineProps<IShowCartProps>();
</script>

<template>
  <ShowProduct
    :product="cartItem.product"
    v-for="cartItem in cart"
    :show-amount="cartItem.amount"
  ></ShowProduct>
</template>
