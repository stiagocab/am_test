import React from "react";
import Character from "./components/Character";
import Container from "./components/Container";
import FloatingMenu from "./components/FloatingMenu";

// media
import HarryPotter from "./assets/Harry_Potter.png";

// styles
import styles from "./styles/styles.module.scss";
import components from "./styles/components.module.scss";

function App() {
  return (
    <Container>
      <FloatingMenu />
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
    </Container>
  );
}

export default App;
