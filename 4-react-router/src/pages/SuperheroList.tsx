import { SuperHero } from "../components/SuperHero";
import { Navbar } from "../components/Navbar";
import { Link, useLoaderData } from "react-router-dom";
import { Loader } from "../loaders/superheroLoader";

export const SuperheroList = () => {
  const { superHeroes } = useLoaderData() as Loader; // { superHeroes: [{ ... }, { ... }] }

  return (
    <>
      <Navbar></Navbar>

      {superHeroes.map((superhero, index) => (
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
