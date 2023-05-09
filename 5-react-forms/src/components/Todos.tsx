import { Todo } from "../models/Todo";

interface ITodosProps {
  todos: Todo[];
  toggleTodo: (i: number) => void;
}

export const Todos = ({ todos, toggleTodo }: ITodosProps) => {
  const html = todos.map((todo, i) => (
    <li
      className={todo.done ? "done" : ""}
      onClick={() => {
        toggleTodo(i);
      }}
    >
      {todo.text}
    </li>
  ));

  return (
    <>
      <ul>{html}</ul>
    </>
  );
};
