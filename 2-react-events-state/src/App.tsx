import "./App.css";
import { Events } from "./components/Events";
import { ShowPerson } from "./components/Person";
import { Persons } from "./components/Persons";
import { State } from "./components/State";

function App() {
  return (
    <div className="App">
      <Persons></Persons>
      <ShowPerson></ShowPerson>
      <State></State>
      <Events></Events>
    </div>
  );
}

export default App;
