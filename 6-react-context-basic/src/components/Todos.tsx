import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";
import "./../styles/Todos.scss";

export const Todos = () => {
  const { todos, toggle } = useContext(TodosContext);

  const html = todos.map((todo) => (
    <div
      className={todo.done ? "todo done" : "todo"}
      key={todo.id}
      onClick={() => toggle(todo.id)}
    >
      {todo.text}
    </div>
  ));

  return <div className="todos">{html}</div>;
};
