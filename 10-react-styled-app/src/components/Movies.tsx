import { useContext } from "react";
import { MoviesContext } from "../contexts/MoviesContext";
import { MovieView } from "./MovieView";
import { Wrapper } from "./styled/Wrappers";

export const Movies = () => {
  const movies = useContext(MoviesContext);

  const html = movies.map((movie) => <MovieView movie={movie} />);

  return <Wrapper>{html}</Wrapper>;
};
