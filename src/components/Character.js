import PropTypes from "prop-types";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// media
import Bookmark from "../assets/bookmark.png";
import BookmarkFill from "../assets/bookmark_fill_gray.png";
import { charactersTypes } from "../store/Characters";

// styles
import styles from "../styles/components.module.scss";

export default function Character({ character }) {
  const dispatch = useDispatch();

  const { favorites } = useSelector((state) => state.characters);

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

  const handleAddFavorite = () => {
    dispatch({
      type: charactersTypes.ADD_FAVORITE,
      payload: character,
    });
  };

  const handleRemoveFavorite = () => {
    dispatch({
      type: charactersTypes.REMOVE_FAVORITE,
      payload: character.name,
    });
  };

  const isFavorite = useMemo(() => {
    return favorites.some((item) => item.name === character.name);
  }, [favorites, character]);

  return (
    <div className={`${styles.characterCard} ${!character.alive && styles.characterCardDead}`}>
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
          <button
            onClick={isFavorite ? handleRemoveFavorite : handleAddFavorite}
          >
            <img
              className={styles.markIcon}
              src={isFavorite ? BookmarkFill : Bookmark}
            />
          </button>
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
