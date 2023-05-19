import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";
import { TodoView } from "./TodoView";

export const Todos = () => {
  const todos = useContext(TodosContext);

  return (
    <div>
      {todos.map((todo) => (
        <TodoView todo={todo}></TodoView>
      ))}
    </div>
  );
};
