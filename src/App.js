import React, { useState } from "react";
import Character from "./components/Character";
import Container from "./components/Container";
import FloatingMenu from "./components/FloatingMenu";
import AddCharacter from "./components/AddCharacter";

// media
import HarryPotter from "./assets/Harry_Potter.png";

// styles
import styles from "./styles/styles.module.scss";
import components from "./styles/components.module.scss";

function App() {
  const [addCharacter, setAddCharacter] = useState(false);

  return (
    <Container>
      <FloatingMenu openAdd={() => setAddCharacter(true)} />
      <img src={HarryPotter} />
      <p className={styles.title}>Selecciona tu filtro</p>
      <div className={styles.buttonsMainContainer}>
        <button className={components.button}>Estudiantes</button>
        <button className={components.button}>Staff</button>
      </div>
      <div className={styles.charactersContainer}>
        <Character />
        <Character />
      </div>
      <AddCharacter
        isOpen={addCharacter}
        close={() => {
          setAddCharacter(false);
        }}
      />
    </Container>
  );
}

export default App;
