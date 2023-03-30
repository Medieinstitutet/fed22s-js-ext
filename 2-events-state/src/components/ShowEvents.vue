<script setup lang="ts">
const handleClick = (age: number, event: MouseEvent) => {
  console.log("Du klickade på knappen", age, event);
};

const handleSubmit = () => {};
</script>

<template>
  <button @click.once="(event) => handleClick(43, event)">Show age</button>
  <button @click="handleClick(43, $event)">Show age - again</button>

  <button v-on:click="">Test button - does nothing</button>

  <form @submit.prevent="handleSubmit">
    <input type="text" name="firstname" />

    <button>Spara</button>
  </form>
</template>
