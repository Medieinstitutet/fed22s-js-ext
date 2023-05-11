import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

interface IButtonProps {
  //   text: string;
  handleClick: () => void;
  children: JSX.Element;
}

export const Button = ({ children, handleClick }: IButtonProps) => {
  const currentTheme = useContext(ThemeContext);

  return (
    <button
      style={{
        backgroundColor: currentTheme.backgroundColor,
        color: currentTheme.foregroundColor,
      }}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
