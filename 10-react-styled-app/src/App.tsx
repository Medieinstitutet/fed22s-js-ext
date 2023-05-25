import { useEffect, useReducer } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { MovieDispatchContext } from "./contexts/MovieDispatchContext";
import { MoviesContext } from "./contexts/MoviesContext";
import { MoviesReducer } from "./reducers/MoviesReducer";
import { router } from "./Router";
import { getMovies } from "./services/MovieService";

function App() {
  const [movies, dispatch] = useReducer(MoviesReducer, []);

  useEffect(() => {
    if (movies.length > 0) return;

    const getData = async () => {
      const moviesFromApi = await getMovies();
      dispatch({ type: "gotmovies", payload: JSON.stringify(moviesFromApi) });
    };

    if (movies.length === 0) {
      getData();
    }
  });

  return (
    <MoviesContext.Provider value={movies}>
      <MovieDispatchContext.Provider value={dispatch}>
        <RouterProvider router={router}></RouterProvider>
      </MovieDispatchContext.Provider>
    </MoviesContext.Provider>
  );
}

export default App;
