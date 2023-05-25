import { IMovie } from "../models/IMovie";

export interface IAction {
  type: string;
  payload: string;
}

export const MoviesReducer = (movies: IMovie[], action: IAction): IMovie[] => {
  switch (action.type) {
    case "gotmovies": {
      return JSON.parse(action.payload);
    }

    case "selected": {
      return movies.map((movie) => {
        if (movie.id.toString() === action.payload) {
          return { ...movie, selected: !movie.selected };
        } else {
          return movie;
        }
      });
    }
  }

  return movies;
};
