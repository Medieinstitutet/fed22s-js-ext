import "./App.css";
import { Button, DangerButton } from "./components/styled/Buttons";
import { MovieWrapper, Wrapper } from "./components/styled/Wrappers";

function App() {
  return (
    <>
      <Wrapper>
        <MovieWrapper></MovieWrapper>
        <MovieWrapper></MovieWrapper>
      </Wrapper>

      <Button
        onClick={() => {
          console.log("Clicked normal");
        }}
      >
        Normal
      </Button>
      <Button bgcolor="#ac32f1" color="wheat">
        Normal variation
      </Button>
      <DangerButton>Danger</DangerButton>
    </>
  );
}

export default App;
