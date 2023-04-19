import { Person } from "../../models/Person";
import "./ListRendering.scss";

export const ListRendering = () => {
  const numbers: number[] = [1, 1, 2, 3, 5, 8];
  const persons: Person[] = [
    new Person("Sebastian", 43, true),
    new Person("Alvar", 12, false),
  ];

  const lis = numbers.map((n, i) => <li key={i}>{n}</li>);
  const personsHtml = persons.map((p) => (
    <div key={p.name}>
      <div>
        <h3>{p.name}</h3>
        <p>{p.age}</p>
      </div>
      <div>
        <input type="checkbox" checked={p.isMarried} />
      </div>
    </div>
  ));

  return (
    <>
      {personsHtml}
      <ul>{lis}</ul>
    </>
  );
};
