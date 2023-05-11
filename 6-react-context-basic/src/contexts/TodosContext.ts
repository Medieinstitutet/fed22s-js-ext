import { createContext } from "react";
import { Todo } from "../models/Todo";

export interface ITodosContext {
  todos: Todo[];
  toggle: (id: number) => void;
  add: (text: string) => void;
}

export const TodosContext = createContext<ITodosContext>({
  todos: [new Todo("Default", false, new Date().getTime())],
  toggle: (id: number) => {
    return;
  },
  add: (text: string) => {
    return;
  },
});
