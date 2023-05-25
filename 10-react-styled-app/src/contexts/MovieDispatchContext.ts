import { createContext, Dispatch } from "react";
import { IAction } from "../reducers/MoviesReducer";

export const MovieDispatchContext = createContext<Dispatch<IAction>>(() => {
  return;
});
