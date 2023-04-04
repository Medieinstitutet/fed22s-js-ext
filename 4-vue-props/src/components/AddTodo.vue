<script setup lang="ts">
import { ref } from "vue";

const text = ref("");

defineEmits(["addingTheMostAwesomeTodo"]);
</script>

<template>
  <form @submit.prevent="() => $emit('addingTheMostAwesomeTodo', text)">
    <input v-model="text" />
    <button>Spara</button>
  </form>
</template>
