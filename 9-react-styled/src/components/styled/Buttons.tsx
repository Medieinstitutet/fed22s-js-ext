import styled from "styled-components";
import { rotation } from "./Animations";

interface IButtonProps {
  bgcolor: string;
  color: string;
}

export const Button = styled.button<IButtonProps>`
  background-color: ${(props: IButtonProps) => props.bgcolor || "grey"};
  color: ${(props: IButtonProps) => props.color || "white"};
  padding: 1rem;
  border-radius: 10px;
  margin: 15px;
`;

export const DangerButton = styled(Button)`
  background-color: pink;
  animation: ${rotation} 1s linear infinite;
`;
