import { createContext } from "react";
import { Todo } from "../models/Todo";

export const TodosContext = createContext<Todo[]>([]);
