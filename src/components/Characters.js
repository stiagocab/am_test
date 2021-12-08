import React, { useEffect, useState } from "react";
import Character from "./Character";

import { API_URL } from "../constants";

// styles
import styles from "../styles/styles.module.scss";

export default function Characters({ charactersType }) {
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [charactersData, setCharactersData] = useState([]);

  useEffect(() => {
    // GET CHARACTERS FROM API
    fetch(`${API_URL}/characters`)
      .then((res) => res.json())
      .then((data) => {
        setCharactersData(data);
      });
  }, []);

  useEffect(() => {
    if (charactersType === "students") {
      setFilteredCharacters(charactersData.filter((c) => c.hogwartsStudent));
    } else if (charactersType === "staff") {
      setFilteredCharacters(charactersData.filter((c) => c.hogwartsStaff));
    } else {
      setFilteredCharacters(charactersData);
    }
  }, [charactersType, charactersData]);

  return (
    <div className={styles.charactersContainer}>
      {filteredCharacters.map((item, i) => (
        <Character character={item} key={i} />
      ))}
    </div>
  );
}
