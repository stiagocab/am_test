import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

// media
import BookmarkFill from "../../assets/bookmark_fill.png";
import UserAdd from "../../assets/user_add.png";
import DeleteIcon from "../../assets/delete.png";

import styles from "./menu.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { charactersTypes } from "../../store/Characters";

export default function FloatingMenu({ openAdd }) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { favorites } = useSelector((state) => state.characters);

  const handleRemoveFavorite = (name) => {
    dispatch({
      type: charactersTypes.REMOVE_FAVORITE,
      payload: name,
    });
  };

  // TODO: add useOutsideClick to close

  return (
    <div className={styles.floatingMenu}>
      <div className={styles.headMenu}>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
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
        {favorites.length > 0 &&
          favorites.map((item) => (
            <div className={styles.menuElement}>
              <div className={styles.characterInfo}>
               <img className={styles.iconPerson} src={item.image} />
                <p className={styles.namePerson}>{item.name}</p>
              </div>
              <button
                onClick={() => {
                  handleRemoveFavorite(item.name);
                }}
              >
                <img className={styles.deleteIcon} src={DeleteIcon} />
              </button>
            </div>
          ))}

        {/* {favorites.length === 0 && (
          <p>Todavía no tienes personajes favoritos</p>
        )} */}
      </div>
    </div>
  );
}

FloatingMenu.propTypes = {
  openAdd: PropTypes.func,
};
