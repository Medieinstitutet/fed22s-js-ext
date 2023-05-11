import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { TodosContext } from "../contexts/TodosContext";
import { Button } from "./Button";

export const AddTodo = () => {
  const { add } = useContext(TodosContext);

  const [userInput, setUserInput] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    add(userInput);

    setUserInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={userInput} onChange={handleChange} />
      <Button
        handleClick={() => {
          return;
        }}
      >
        <>Spara</>
      </Button>
    </form>
  );
};
