import { createContext } from "react";

export interface ITheme {
  backgroundColor: string;
  foregroundColor: string;
  name: string;
  toggleTheme: () => void;
}

export interface IThemes {
  night: ITheme;
  day: ITheme;
}

export const themes: IThemes = {
  night: {
    name: "Night",
    backgroundColor: "black",
    foregroundColor: "white",
    toggleTheme: () => {
      return;
    },
  },
  day: {
    name: "Day",
    backgroundColor: "ivory",
    foregroundColor: "maroon",
    toggleTheme: () => {
      return;
    },
  },
};

export const ThemeContext = createContext<ITheme>(themes.day);
