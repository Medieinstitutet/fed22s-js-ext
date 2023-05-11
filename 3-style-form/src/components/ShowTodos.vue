<script setup lang="ts">
import { ref } from "vue";
import { Todo } from "../models/Todo";

const todos = ref<Todo[]>([]);

const userInput = ref("");

const toggleTodo = (i: number) => {
  todos.value[i].done = !todos.value[i].done;
};

const handleSubmit = () => {
  todos.value.push(new Todo(userInput.value, false));
  userInput.value = "";
};

const removeTodo = (i: number) => {
  todos.value.splice(i, 1);
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="userInput" />
  </form>

  <ul>
    <li
      v-for="(todo, index) in todos"
      :key="index"
      class="todo"
      :class="todo.done ? 'done' : ''"
    >
      {{ todo.text }}
      <button @click="toggleTodo(index)">Toggle</button>
      <button @click="removeTodo(index)">Remove</button>
    </li>
  </ul>
</template>

<style scoped lang="scss">
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .todo {
    &.done {
      text-decoration: line-through;
    }
  }
}
</style>
