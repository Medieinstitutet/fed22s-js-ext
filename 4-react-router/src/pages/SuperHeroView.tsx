import { useLoaderData, useParams } from "react-router";
import { Loader } from "./SuperheroList";
import { SuperHero } from "../components/SuperHero";

export const SuperheroView = () => {
  const params = useParams();
  const { superHeroes } = useLoaderData() as Loader;

  const current = superHeroes.find((superhero) => superhero.id === params.id);

  if (current === undefined) {
    return <h2>Finns ej</h2>;
  } else {
    return <SuperHero {...current}></SuperHero>;
  }
};
