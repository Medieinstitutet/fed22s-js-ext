import { useState } from "react";
import { Todo } from "../models/Todo";
import { AddTodo } from "./AddTodo";
import { Todos } from "./Todos";

export const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo("React is great!", true),
  ]);

  const addTodo = (text: string) => {
    setTodos([...todos, new Todo(text, false)]);
  };

  const toggleTodo = (indexClicked: number) => {
    const updatedList = todos.map((todo, i) => {
      if (i === indexClicked) {
        return { ...todo, done: !todo.done };
      } else {
        return { ...todo };
      }
    });

    setTodos(updatedList);
  };

  return (
    <>
      <AddTodo createTodo={addTodo}></AddTodo>
      <Todos todos={todos} toggleTodo={toggleTodo}></Todos>
    </>
  );
};
