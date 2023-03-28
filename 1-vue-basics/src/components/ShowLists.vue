<script setup lang="ts">
import { Person } from "../models/Person";
import ShowPerson from "./ShowPerson.vue";

let persons: Person[] = [
  new Person("Sebastian", 43, true),
  new Person("Hanna", 42, true),
  new Person("Astrid", 12, false),
  new Person("Alvar", 12, false),
];
</script>
<template>
  <div v-for="person in persons.filter((p) => p.age > 20)" :key="person.name">
    <h3>{{ person.name }}</h3>
    <p>{{ person.age }}</p>
    <input type="checkbox" :checked="person.isMarried" />
  </div>

  <!-- <ShowPerson v-for="person in persons"></ShowPerson> -->
</template>
