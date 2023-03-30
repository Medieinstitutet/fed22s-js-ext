<script setup lang="ts">
import { reactive, ref } from "vue";
import { Person } from "../models/Person";

// let age = 43;
const state = reactive({ age: 43, name: "Sebastian", isMarried: true });
const state2 = ref<Person[]>([{ name: "Sebastian", age: 43, isMarried: true }]);

const handleClick = () => {
  //   if (state2.value.age < 49) state2.value.age++;
  //   console.log(state2.value);

  state2.value.push(new Person("Alvar", 12, false));
};

const removePerson = (i: number) => {
  state2.value.splice(i, 1);
};
</script>

<template>
  <p v-for="(person, index) in state2" :key="index">
    {{ person.name }} - {{ person.age }}
    <button @click="removePerson(index)">Ta bort</button>
  </p>

  <button @click="handleClick">Lägg till person</button>
</template>
