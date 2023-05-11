import { useState } from "react";
import { ITodosContext, TodosContext } from "../contexts/TodosContext";
import { Todo } from "../models/Todo";
import { AddTodo } from "./AddTodo";
import { Todos } from "./Todos";

export const TodosApp = () => {
  const [state, setState] = useState<ITodosContext>({
    todos: [new Todo("Start", false, new Date().getTime())],
    toggle: (id: number) => {
      return;
    },
    add: (text: string) => {
      return;
    },
  });

  state.toggle = (id: number) => {
    setState({
      ...state,
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        } else {
          return todo;
        }
      }),
    });
  };

  state.add = (text: string) => {
    setState({
      ...state,
      todos: [...state.todos, new Todo(text, false, new Date().getTime())],
    });
  };

  return (
    <TodosContext.Provider value={state}>
      <AddTodo></AddTodo>
      <Todos></Todos>
    </TodosContext.Provider>
  );
};
