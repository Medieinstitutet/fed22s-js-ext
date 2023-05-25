import { IMovie } from "./../models/IMovie";
import { createContext } from "react";

export const MoviesContext = createContext<IMovie[]>([]);
