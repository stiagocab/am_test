import PropTypes from "prop-types";
import React, { useState } from "react";

// media
import BookmarkFill from "../../assets/bookmark_fill.png";
import UserAdd from "../../assets/user_add.png";
import Harry from "../../assets/harry_profile.png";
import DeleteIcon from "../../assets/delete.png";

import styles from "./menu.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { charactersTypes } from "../../store/Characters";

export default function FloatingMenu({ openAdd }) {
  const dispatch = useDispatch();
  const [isOpen, setIsIpen] = useState(false);
  const { favorites } = useSelector((state) => state.characters);

  const handleRemoveFavorite = (name) => {
    dispatch({
      type: charactersTypes.REMOVE_FAVORITE,
      payload: name,
    });
  };

  return (
    <div className={styles.floatingMenu}>
      <div className={styles.headMenu}>
        <button
          onClick={() => {
            setIsIpen(!isOpen);
          }}
        >
          FAVORITOS
          <img className={styles.bookmark} src={BookmarkFill} />
        </button>
        <button onClick={openAdd}>
          AGREGAR
          <img className={styles.user} src={UserAdd} />
        </button>
      </div>

      <div className={`${styles.bodyMenu} ${isOpen ? styles.isOpen : ""}`}>
        {favorites.map((item) => (
          <div className={styles.menuElement}>
            <img className={styles.iconPerson} src={item.image} />
            <p className={styles.namePerson}>{item.name}</p>
            <button
              onClick={() => {
                handleRemoveFavorite(item.name);
              }}
            >
              <img className={styles.deleteIcon} src={DeleteIcon} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

FloatingMenu.propTypes = {
  openAdd: PropTypes.func,
};
