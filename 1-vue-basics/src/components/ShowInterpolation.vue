<script setup lang="ts">
import { Person } from "../models/Person";

const age = 43;
const name = "Sebastian";
const person: Person = new Person("Astrid", 12, false);
</script>
<template>
  <div>I'm awesome - {{ age }} - {{ name }}</div>
  <div>{{ person.name }} - {{ person.age }}</div>
</template>
<style scoped></style>
