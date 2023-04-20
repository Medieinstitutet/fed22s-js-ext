import { ChangeEvent, useState } from "react";

export const State = () => {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");

  return (
    <>
      <h1 onClick={() => setAge(43)}>Ålder: {age}</h1>
      <input
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        value={name}
      />
      <p>{name}</p>
    </>
  );
};
