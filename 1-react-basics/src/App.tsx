import "./App.scss";
import { ConditionalRendering } from "./components/ConditionalRendering/ConditionalRendering";
import { HelloWorld } from "./components/HelloWorld/HelloWorld";
import { ListRendering } from "./components/ListRendering/ListRendering";

function App() {
  return (
    <div className="App">
      <ListRendering></ListRendering>
      <ConditionalRendering></ConditionalRendering>
      <HelloWorld></HelloWorld>
    </div>
  );
}

export default App;
