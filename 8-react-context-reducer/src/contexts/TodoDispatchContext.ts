import { createContext, Dispatch } from "react";
import { IAction } from "../reducers/TodosReducer";

export const TodoDispatchContext = createContext<Dispatch<IAction>>(() => {
  return;
});
