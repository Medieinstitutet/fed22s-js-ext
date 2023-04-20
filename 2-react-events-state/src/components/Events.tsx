import { ChangeEvent } from "react";

export const Events = () => {
  let name = "";

  const handleClick = () => {
    console.log("Du klickade via funktion");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("Någonting hände i textrutan", e.target.value);
    name = e.target.value;
    console.log(name);
  };

  return (
    <>
      <button onClick={handleClick}>Klicka här</button>
      <input type="text" onChange={handleChange} />
      <p>{name}</p>
    </>
  );
};
