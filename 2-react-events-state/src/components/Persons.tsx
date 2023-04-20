import { useState } from "react";
import { Person } from "../models/Person";

export const Persons = () => {
  const [persons, setPersons] = useState<Person[]>(
    JSON.parse(
      localStorage.getItem("persons") ||
        JSON.stringify([
          new Person("Sebastian", 43, true),
          new Person("Hanna", 43, true),
          new Person("Alvar", 12, false),
          new Person("Astrid", 12, false),
        ])
    )
  );

  const addPerson = () => {
    setPersons([...persons, new Person("Majsan", 12, false)]);
    localStorage.setItem(
      "persons",
      JSON.stringify([...persons, new Person("Majsan", 12, false)])
    );
  };

  const removePerson = (person: Person) => {
    console.log(person);
    const filteredList = persons.filter((p) => p.name !== person.name);
    setPersons(filteredList);
    localStorage.setItem("persons", JSON.stringify(filteredList));
  };

  const html = persons.map((p) => (
    <div key={p.name}>
      <h6>{p.name}</h6>
      <pre>{p.age}</pre>
      <button
        onClick={() => {
          removePerson(p);
        }}
      >
        Ta bort
      </button>
    </div>
  ));

  return (
    <>
      <div>
        <button onClick={addPerson}>Lägg till</button>
      </div>
      {html}
    </>
  );
};
