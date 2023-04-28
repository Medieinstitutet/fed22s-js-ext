import { SuperheroEntity, randSuperhero } from "@ngneat/falso";

const allSuperheroes: SuperheroEntity[] = [];

for (let index = 0; index < 10; index++) {
  allSuperheroes.push(randSuperhero());
}

export interface Loader {
  superHeroes: SuperheroEntity[];
}

export const superheroLoader = () => {
  const data: Loader = { superHeroes: allSuperheroes };
  // data.superHeroes = allSuperheroes;

  return data;
};
