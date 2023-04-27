import React from "react";
import "./App.css";
import { SuperHero } from "./components/SuperHero";
import { SuperheroEntity, randSuperhero } from "@ngneat/falso";

const superHeroes: SuperheroEntity[] = [];

for (let index = 0; index < 10; index++) {
  superHeroes.push(randSuperhero());
}

function App() {
  return <></>;
}

export default App;
