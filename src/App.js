import React, { useEffect, useState } from "react";
import Container from "./components/Container";
import FloatingMenu from "./components/FloatingMenu";
import AddCharacter from "./components/AddCharacter";
import Characters from "./components/Characters";

// media
import HarryPotter from "./assets/Harry_Potter.png";

// styles
import styles from "./styles/styles.module.scss";
import components from "./styles/components.module.scss";

function App() {
  const [addCharacter, setAddCharacter] = useState(false);
  const [charactersType, setCharactersType] = useState("all");

  const handleChangeCharacters = (val) => {

    if (val === charactersType) {
      setCharactersType("all");
    } else {
      setCharactersType(val);
    }
    
  };

  return (
    <Container>
      <FloatingMenu openAdd={() => setAddCharacter(true)} />
      <img src={HarryPotter} />
      <p className={styles.title}>Selecciona tu filtro</p>

      <div className={styles.buttonsMainContainer}>
        <button
          className={`${components.button} ${
            charactersType === "students" ? components.btnActive : ""
          }`}
          onClick={() => {
            handleChangeCharacters("students");
          }}
        >
          Estudiantes
        </button>
        <button
          className={`${components.button} ${
            charactersType === "staff" ? components.btnActive : ""
          }`}
          onClick={() => {
            handleChangeCharacters("staff");
          }}
        >
          Staff
        </button>
      </div>

      <Characters charactersType={charactersType} />

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
