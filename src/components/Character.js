import React from "react";
// media
import Harry from "../assets/harry_profile.png";
import Bookmark from "../assets/bookmark.png";

// styles
import styles from "../styles/components.module.scss";

export default function Character() {
  return (
    <div className={styles.characterCard}>
      <div className={`${styles.characterLeft} ${styles.Gryffindor}`}>
        <img className={styles.characterImg} src={Harry} />
      </div>
      <div className={styles.characterRight}>
        <div className={styles.cardRightHeader}>
          <p className={styles.characterStatus}>
            <span>Vivo</span>{" "}
            <span className={styles.characterStatusSeparator}>/</span>{" "}
            <span>Estudiante</span>
          </p>
          <img className={styles.markIcon} src={Bookmark} />
        </div>

        <div className={styles.cardRightBody}>
          <p className={styles.characterName}>Harry Potter</p>
          <p className={styles.characterData}>
            Cumpleaños: <span>31-07-1980</span>
          </p>
          <p className={styles.characterData}>
            Género: <span>Male</span>
          </p>
          <p className={styles.characterData}>
            Color de ojos: <span>Greeen</span>
          </p>
          <p className={styles.characterData}>
            Color de pelo: <span>Back</span>
          </p>
        </div>
      </div>
    </div>
  );
}
