import PropTypes from "prop-types";
import React, { useState } from "react";
// media
import Bookmark from "../assets/bookmark.png";

// styles
import styles from "../styles/components.module.scss";

export default function Character({ character }) {
  
  const classNameHouse = (house) => {
    switch (house) {
      case "Gryffindor":
        return styles.Gryffindor;
      case "Slytherin":
        return styles.Slytherin;
      case "Ravenclaw":
        return styles.Ravenclaw;
      case "Hufflepuff":
        return styles.Hufflepuff;
    }
  };

  return (
    <div className={styles.characterCard}>
      <div
        className={`${styles.characterLeft} ${classNameHouse(character.house)}`}
      >
        <img className={styles.characterImg} src={character.image} />
      </div>
      <div className={styles.characterRight}>
        <div className={styles.cardRightHeader}>
          <p className={styles.characterStatus}>
            <span>{character.alive ? "Vivo" : "Finado"}</span>{" "}
            <span className={styles.characterStatusSeparator}>/</span>{" "}
            <span>{character.hogwartsStudent ? "Estudiante" : "Staff"}</span>
          </p>
          <img className={styles.markIcon} src={Bookmark} />
        </div>

        <div className={styles.cardRightBody}>
          <p className={styles.characterName}>{character.name}</p>
          <p className={styles.characterData}>
            Cumpleaños: <span>{character.dateOfBirth}</span>
          </p>
          <p className={styles.characterData}>
            Género: <span>{character.gender}</span>
          </p>
          <p className={styles.characterData}>
            Color de ojos: <span>{character.eyeColour}</span>
          </p>
          <p className={styles.characterData}>
            Color de pelo: <span>{character.hairColour}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

Character.propTypes = {
  character: PropTypes.instanceOf(Object),
};
