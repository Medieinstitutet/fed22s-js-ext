import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { SuperHero } from "./components/SuperHero";
import { Enemy } from "./Enemy";
import { SuperheroEntity, randSuperhero } from "@ngneat/falso";

const superHeroes: SuperheroEntity[] = [];

for (let index = 0; index < 10; index++) {
  superHeroes.push(randSuperhero());
}

function App() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setClicked(!clicked)}>{`${clicked}`}</button>
      {superHeroes.map((hero) => (
        <SuperHero
          id={hero.id}
          realName={hero.realName}
          alterEgo={hero.alterEgo}
          company={hero.company}
        ></SuperHero>
      ))}
    </div>
  );
}

export default App;
