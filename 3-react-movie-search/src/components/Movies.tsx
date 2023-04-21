import axios from "axios";
import { ChangeEvent, useState } from "react";
import { IMovie } from "../models/IMovie";
import { IOmdbResponse } from "../models/IOmdbResponse";

export const Movies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [searchText, setSearchText] = useState("");
  const [showError, setShowError] = useState(false);

  const handleSearch = async () => {
    if (searchText === "") {
      setShowError(true);
      setMovies([]);
    } else {
      setShowError(false);
      const response = await axios.get<IOmdbResponse>(
        `http://omdbapi.com/?apikey=416ed51a&s=${searchText}`
      );

      setMovies(response.data.Search);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const noMoviesHtml = (
    <>
      <span>Inga filmer hittades</span>
    </>
  );

  let moviesHtml: JSX.Element[] = [<></>];

  if (movies.length !== 0) {
    moviesHtml = movies.map((m) => <div key={m.imdbID}>{m.Title}</div>);
  }

  return (
    <>
      <div>
        <input type="text" value={searchText} onChange={handleChange} />
        <button onClick={handleSearch}>Sök</button>
      </div>
      {showError && <div>Skriv något i textrutan innan du söker</div>}
      {movies.length === 0 ? noMoviesHtml : moviesHtml}
    </>
  );
};
