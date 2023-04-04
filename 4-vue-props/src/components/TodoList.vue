<script setup lang="ts">
import { ref } from "vue";
import { Todo } from "../models/Todo";
import AddTodo from "./AddTodo.vue";
import ShowTodo from "./ShowTodo.vue";

const todos = ref<Todo[]>(JSON.parse(localStorage.getItem("todos") || "[]"));

const handleToggle = (i: number) => {
  console.log("ToggleTodo from parent!!", i);
  todos.value[i].done = !todos.value[i].done;
  saveToLs(todos.value);
};

const addTodo = (text: string) => {
  todos.value.push(new Todo(text, false));
  saveToLs(todos.value);
};

function saveToLs(todos: Todo[]) {
  localStorage.setItem("todos", JSON.stringify(todos));
}
</script>

<template>
  <AddTodo @adding-the-most-awesome-todo="addTodo"></AddTodo>
  <ShowTodo
    :todo="todo"
    v-for="(todo, index) in todos"
    @toggle-todo="() => handleToggle(index)"
    :key="index"
  ></ShowTodo>
</template>

<style scoped></style>
