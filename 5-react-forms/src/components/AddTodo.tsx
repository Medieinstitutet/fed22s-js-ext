import { ChangeEvent, FormEvent, useState } from "react";

interface IAddTodoProps {
  //createTodo(text: string): void;
  createTodo: (text: string) => void;
}

export const AddTodo = ({ createTodo }: IAddTodoProps) => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    createTodo(userInput);

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
