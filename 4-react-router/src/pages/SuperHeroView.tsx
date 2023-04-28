import { useLoaderData, useParams } from "react-router";
import { SuperHero } from "../components/SuperHero";
import { Navbar } from "../components/Navbar";
import { Loader } from "../loaders/superheroLoader";

export const SuperheroView = () => {
  const params = useParams(); // { id: 123 }
  const { superHeroes } = useLoaderData() as Loader;

  const current = superHeroes.find((superhero) => superhero.id === params.id);

  if (current === undefined) {
    return <h2>Välj en superhjälte</h2>;
  } else {
    return (
      <>
        <Navbar></Navbar>
        <SuperHero {...current} fullDescription={true}></SuperHero>
      </>
    );
  }

  // {
  //   current === undefined ? (
  //     <h2>Välj en superhjälte</h2>
  //   ) : (
  //     <>
  //       <p>Du har valt:</p>
  //       <SuperHero {...current}></SuperHero>
  //     </>
  //   );
  // }

  // {
  //   current && (
  //     <>
  //       <p>Du har valt:</p>
  //       <SuperHero {...current}></SuperHero>
  //     </>
  //   );
  // }
};
