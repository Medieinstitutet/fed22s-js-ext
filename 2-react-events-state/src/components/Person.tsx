import { useState } from "react";
import { Person } from "../models/Person";

export const ShowPerson = () => {
  const [person, setPerson] = useState<Person>(
    new Person("Sebastian", 43, true)
  );

  const handleClick = () => {
    setPerson({ ...person, name: "Hanna" });
  };

  return <pre onClick={handleClick}>{person.name}</pre>;
};
