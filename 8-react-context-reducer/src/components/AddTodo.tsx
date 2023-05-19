import { useState, FormEvent, ChangeEvent, useContext } from "react";
import { TodoDispatchContext } from "../contexts/TodoDispatchContext";
import { ActionType } from "../reducers/TodosReducer";

export const AddTodo = () => {
  const dispatch = useContext(TodoDispatchContext);
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch({ type: ActionType.ADDED, payload: userInput });

    setUserInput("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={userInput} onChange={handleChange} />
      <button>Spara</button>
    </form>
  );
};
