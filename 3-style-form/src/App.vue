<script setup lang="ts">
import { ref } from "vue";
import ShowTodos from "./components/ShowTodos.vue";
import { Person } from "./models/Person";

// const firstname = ref("");
// const age = ref(0);
// const isMarried = ref(false);

const state = ref<Person>({ name: "", age: 0, isMarried: false });
const persons = ref<Person[]>([]);

function handleClick() {
  console.log(state.value);
  persons.value.push(
    new Person(state.value.name, state.value.age, state.value.isMarried)
  );
  state.value = { name: "", age: 0, isMarried: false };
}
</script>

<template>
  <!-- <input type="text" v-model="state.name" />
  <input type="number" v-model="state.age" />
  <input type="checkbox" v-model="state.isMarried" />

  <button @click="handleClick">Spara</button>

  <p>{{ state }}</p>

  <div
    v-for="(person, index) in persons"
    :key="index"
    :class="person.age > 20 ? 'old' : 'young'"
  >
    {{ person.name }} - {{ person.age }}
  </div> -->

  <ShowTodos></ShowTodos>
</template>

<style scoped>
.young {
  background-color: green;
}

.middle {
  background-color: yellow;
}

.old {
  background-color: plum;
}
</style>
