import { ChangeEvent, FormEvent, useState } from "react";
import { defaultPerson, IPerson } from "../models/IPerson";

export const PersonForm = () => {
  const [person, setPerson] = useState<IPerson>(defaultPerson);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;

    if (e.target.type === "text") {
      setPerson({ ...person, [name]: e.target.value });
    }
    if (e.target.type === "checkbox") {
      setPerson({ ...person, [name]: e.target.checked });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log(person);

    // Tömmer textrutorna efter submit
    setPerson(defaultPerson);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={person.lastname}
        onChange={handleChange}
        name="lastname"
      />
      <input
        type="text"
        value={person.firstname}
        onChange={handleChange}
        name="firstname"
      />
      <input
        type="checkbox"
        checked={person.isMarried}
        onChange={handleChange}
        name="isMarried"
      />
      <p>
        <button>Spara</button>
      </p>

      <p>{JSON.stringify(person)}</p>
    </form>
  );
};
