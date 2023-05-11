import { useState } from "react";
import "./App.scss";
import { Button } from "./components/Button";
import { TodosApp } from "./components/TodosApp";
import { ITheme, ThemeContext, themes } from "./contexts/ThemeContext";

function App() {
  const [theme, setTheme] = useState<ITheme>(themes.night);

  theme.toggleTheme = () => {
    theme === themes.night ? setTheme(themes.day) : setTheme(themes.night);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <Button handleClick={theme.toggleTheme}>
        {theme === themes.day ? (
          <>Byt till {themes.night.name}</>
        ) : (
          <>Byt till {themes.day.name}</>
        )}
      </Button>
      <TodosApp></TodosApp>
    </ThemeContext.Provider>
  );
}

export default App;
