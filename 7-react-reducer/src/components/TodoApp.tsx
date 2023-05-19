import { ChangeEvent, FormEvent, useReducer, useState } from "react";
import { ActionType, TodosReducer, IAction } from "../reducers/TodosReducer";

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(TodosReducer, []);
  const [userInput, setUserInput] = useState("");

  const addTodo = (text: string) => {
    const action: IAction<string> = {
      type: ActionType.ADDED,
      payload: text,
    };
    dispatch(action);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    addTodo(userInput);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={userInput} onChange={handleChange} />
        <button>Spara</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            onClick={() => {
              const action: IAction<number> = {
                type: ActionType.TOGGLED,
                payload: todo.id,
              };
              dispatch(action);
            }}
            className={todo.done ? "done" : ""}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </>
  );
};
