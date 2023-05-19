import { useReducer } from "react";
import { TodoDispatchContext } from "../contexts/TodoDispatchContext";
import { TodosContext } from "../contexts/TodosContext";
import { TodosReducer } from "../reducers/TodosReducer";
import { AddTodo } from "./AddTodo";
import { Todos } from "./Todos";

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(TodosReducer, []);

  return (
    <>
      <TodosContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={dispatch}>
          <AddTodo></AddTodo>
          <Todos></Todos>
        </TodoDispatchContext.Provider>
      </TodosContext.Provider>
    </>
  );
};
