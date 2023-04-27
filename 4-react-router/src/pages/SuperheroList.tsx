import { SuperheroEntity, randSuperhero } from "@ngneat/falso";
import { SuperHero } from "../components/SuperHero";
import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";

const allSuperheroes: SuperheroEntity[] = [];

for (let index = 0; index < 10; index++) {
  allSuperheroes.push(randSuperhero());
}

export interface Loader {
  superHeroes: SuperheroEntity[];
}

export const superheroLoader = () => {
  const data: Loader = { superHeroes: [] };
  data.superHeroes = allSuperheroes;

  return data;
};

export const SuperheroList = () => {
  return (
    <>
      <Navbar></Navbar>

      {allSuperheroes.map((superhero, index) => (
        <Link key={index} to={superhero.id}>
          <SuperHero {...superhero}></SuperHero>
        </Link>

        // <SuperHero
        //   id={superhero.id}
        //   alterEgo={superhero.alterEgo}
        //   company={superhero.company}
        //   realName={superhero.realName}
        // ></SuperHero>
      ))}
    </>
  );
};
