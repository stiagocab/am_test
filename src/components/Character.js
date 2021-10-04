import React from "react";
// media
import Harry from "../media/harry_profile.png";
import Bookmark from "../media/bookmark.png";

// styles
import styles from "./components.module.scss";

export default function Character() {
  return (
    <div className={styles.characterCard}>
      <div className={`${styles.characterLeft} ${styles.Gryffindor}`}>
        <img className={styles.characterImg} src={Harry} />
      </div>
      <div className={styles.characteRight}>
        <div className={styles.cardRightHeader}>
          <p className={styles.characterStatus}> Vivo / Estudiante</p>
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
