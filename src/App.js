import React from "react";
import Button from "./components/Button";
import Container from "./components/Container";

// media
import HarryPotter from "./media/Harry_Potter.png";

// styles

function App() {
  return (
    <Container>
      <img src={HarryPotter} />
      <div>
        <Button>Estudiantes</Button>
      </div>
    </Container>
  );
}

export default App;
