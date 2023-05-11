import { useState } from "react";
import "./App.scss";
import { TodosApp } from "./components/TodosApp";
import { ITodosContext, TodosContext } from "./contexts/TodosContext";
import { Todo } from "./models/Todo";

function App() {
  return <TodosApp></TodosApp>;
}

export default App;
