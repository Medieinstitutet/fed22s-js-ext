import { ChangeEvent, useState } from "react";
import "./App.css";
import PuppyList from "./component/PuppyList";
import { PuppyProps } from "./component/Puppy";

interface KennelInfo {
  name: string;
  address: string;
  activeLitter: boolean;
}

function App() {
  const [puppyName, setPuppyName] = useState<string>("");
  const [puppyAge, setPuppyAge] = useState<number>(0);
  const [puppies, setPuppies] = useState<PuppyProps[]>([]);
  const [kennelInfo, setKennelInfo] = useState<KennelInfo>({
    name: "Calles kennel",
    address: "Kennelvägen 1",
    activeLitter: false,
  });

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const change = event.target.value;
    setPuppyName(change);
  };

  const handleAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const change = event.target.value;
    setPuppyAge(Number.parseInt(change));
  };

  const handleRegistration = () => {
    const newPuppy = { name: puppyName, age: puppyAge };
    setPuppies([...puppies, newPuppy]);
    setKennelInfo({ ...kennelInfo, activeLitter: true });
  };

  return (
    <>
      <h1>{kennelInfo.name}</h1>
      <h3>{kennelInfo.address}</h3>
      <h4>
        {kennelInfo.activeLitter === true
          ? "Vi har valpar för er!"
          : "Inga valpar till salu"}
      </h4>

      <input placeholder="Valpens namn" onChange={handleNameChange} />
      <input placeholder="Valpens ålder" onChange={handleAgeChange} />
      <button onClick={handleRegistration}>Registrera valp</button>

      <PuppyList puppies={puppies}></PuppyList>
    </>
  );
}

export default App;
