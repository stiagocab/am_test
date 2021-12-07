import React, { useEffect, useState } from "react";
import Character from "./Character";

// data
import CharactersData   from "../data/hp-characters.json";

// styles
import styles from "../styles/styles.module.scss";

export default function Characters({ charactersType }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    console.log("sadsa", charactersType);
    if (charactersType === "students") {
      setCharacters(CharactersData.filter(c => c.hogwartsStudent));
    } else if (charactersType === "staff") {
      setCharacters(CharactersData.filter(c => c.hogwartsStaff));
    } else {
      setCharacters(CharactersData);
    }
  }, [charactersType]);

  return (
    <div className={styles.charactersContainer}>
      {characters.map((item, i) => (
        <Character character={item} key={i} />
      ))}
    </div>
  );
}
