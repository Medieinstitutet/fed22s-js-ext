import { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieDispatchContext } from "../contexts/MovieDispatchContext";
import { IMovie } from "../models/IMovie";
import { H3 } from "./styled/Headings";
import { Image } from "./styled/Image";
import { StyledP } from "./styled/StyledP";
import { StyledSpan } from "./styled/StyledSpan";
import { ImageWrapper, MovieWrapper } from "./styled/Wrappers";

interface IMovieViewProps {
  movie: IMovie;
}

export const MovieView = ({ movie }: IMovieViewProps) => {
  const dispatch = useContext(MovieDispatchContext);

  const handleClick = (id: number) => {
    dispatch({ type: "selected", payload: id.toString() });
  };

  return (
    <>
      <MovieWrapper selected={movie.selected} key={movie.id}>
        <H3>{movie.name}</H3>
        <ImageWrapper>
          <Image src={movie.imageUrl} alt={movie.name} />
        </ImageWrapper>
        <StyledP>{movie.description}</StyledP>
        <StyledSpan>{movie.price}</StyledSpan>
        <button onClick={() => handleClick(movie.id)}>Markera</button>
        <Link to={"/movie/" + movie.id}>Läs mer</Link>
      </MovieWrapper>
    </>
  );
};
