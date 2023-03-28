<script setup lang="ts">
import ShowInterpolation from "./ShowInterpolation.vue";

let show = true;
</script>
<template>
  <ShowInterpolation v-if="show"></ShowInterpolation>
  <div v-if="show">Now you see me!</div>
  <div v-else>Now you don't!</div>
</template>
