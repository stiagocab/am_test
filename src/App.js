import React from "react";
import Button from "./components/Button";
import Character from "./components/Character";
import Container from "./components/Container";
import Text from "./components/Text";

// media
import HarryPotter from "./media/Harry_Potter.png";

// styles
import styles from "./styles/styles.module.scss";

function App() {
  return (
    <Container>
      <img src={HarryPotter} />
      <Text>Selecciona tu filtro</Text>
      <div className={styles.buttonsMainContainer}>
        <Button>Estudiantes</Button>
        <Button>Staff</Button>
      </div>
      <div className={styles.charactersContainer}>
        <Character />
      </div>
    </Container>
  );
}

export default App;
