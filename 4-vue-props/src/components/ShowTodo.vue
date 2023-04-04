<script setup lang="ts">
import { Todo } from "../models/Todo";

interface IShowTodoProps {
  todo: Todo;
}

defineProps<IShowTodoProps>();
defineEmits(["toggleTodo"]);
</script>

<template>
  <div @click="() => $emit('toggleTodo')">{{ todo }}</div>
</template>

<style scoped></style>
