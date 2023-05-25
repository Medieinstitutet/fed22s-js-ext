import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MoviesContext } from "../contexts/MoviesContext";
import { IMovie } from "../models/IMovie";
import { MovieView } from "./MovieView";
import { Wrapper } from "./styled/Wrappers";

export const Movie = () => {
  const { id } = useParams();
  const movies = useContext(MoviesContext);
  const [movie, setMovie] = useState<IMovie>();

  useEffect(() => {
    if (movie) return;

    const filteredMovies = movies.filter((movie) => movie.id.toString() === id);
    if (filteredMovies.length === 1) {
      setMovie(filteredMovies[0]);
    }
  }, [id, movies, movie]);

  return <Wrapper>{movie && <MovieView movie={movie}></MovieView>}</Wrapper>;
};
