<script setup lang="ts">
import { onMounted, ref } from "vue";
import axios from "axios";
import { IProduct } from "../models/IProduct";
import ShowProduct from "./ShowProduct.vue";
import { IWebshopState } from "../models/IWebshopState";
import ShowCart from "./ShowCart.vue";
import Cart from "./Cart.vue";

const state = ref<IWebshopState>({
  products: [],
  cart: [],
  showCheckout: false,
});

onMounted(() => {
  axios
    .get<IProduct[]>(
      "https://medieinstitutet-wie-products.azurewebsites.net/api/products"
    )
    .then((response) => {
      state.value.products = response.data;
    });
});

const addToCart = (clickedProduct: IProduct) => {
  console.log("Add to cart:", clickedProduct);
  const positionInListForProduct = state.value.cart.findIndex(
    (cartItem) => cartItem.product.id === clickedProduct.id
  );
  if (positionInListForProduct > -1) {
    state.value.cart[positionInListForProduct].amount++;
  } else {
    state.value.cart.push({ product: clickedProduct, amount: 1 });
  }
};
</script>

<template>
  <button
    @click="
      () => {
        state.showCheckout = !state.showCheckout;
      }
    "
  >
    Växla vy
  </button>
  <div v-if="!state.showCheckout">
    <ShowCart :cart="state.cart"></ShowCart>
    <div class="products">
      <!--                var                   prop   =  var -->
      <ShowProduct
        v-for="product in state.products"
        :product="product"
        @add-to-cart="addToCart"
        :key="product.id"
        :show-amount="0"
      />
    </div>
  </div>
  <div v-else>
    <Cart :cart="state.cart"></Cart>
  </div>
</template>

<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}
</style>
