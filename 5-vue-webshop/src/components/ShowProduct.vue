<script setup lang="ts">
import { IProduct } from "../models/IProduct";

interface IShowProductProps {
  product: IProduct;
  showAmount: number;
}

const props = defineProps<IShowProductProps>();
const emit = defineEmits(["addToCart"]);

const handleClick = () => {
  emit("addToCart", props.product);
};
</script>

<template>
  <div class="product">
    <h3>{{ product.name }}</h3>
    <div class="img-container">
      <img :src="product.imageUrl" :alt="product.name" />
    </div>
    <div>
      <span>{{ product.price }} kr</span>
      <button @click="handleClick" v-if="showAmount === 0">Köp</button>
      <span v-else>{{ showAmount }}</span>
    </div>
  </div>
</template>

<style scoped>
.product {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 30%;
}

.product .img-container {
  width: 100%;
}

.product .img-container img {
  width: 100%;
}
</style>
