import styled from "styled-components";

interface IMovieWrapperProps {
  selected: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const MovieWrapper = styled.div<IMovieWrapperProps>`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${(props: IMovieWrapperProps) =>
    props.selected ? "red" : "transparent"};
`;

export const ImageWrapper = styled.div`
  width: 100%;
`;
