import React, { useEffect, useState } from "react";
import Character from "./Character";

// data
import Staff from "../data/hp-characters.json";
import Students from "../data/hp-students.json";
import All from "../data/hp-characters.json";

// styles
import styles from "../styles/styles.module.scss";

export default function Characters({ charactersType }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    console.log("sadsa", charactersType);
    if (charactersType === "students") {
      setCharacters(Students);
    } else if (charactersType === "staff") {
      setCharacters(Staff);
    } else {
      setCharacters(All);
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
