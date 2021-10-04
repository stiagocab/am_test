import PropTypes from "prop-types";
import React, { useState } from "react";

// media
import BookmarkFill from "../../assets/bookmark_fill.png";
import UserAdd from "../../assets/user_add.png";
import Harry from "../../assets/harry_profile.png";
import DeleteIcon from "../../assets/delete.png";

import styles from "./menu.module.scss";

export default function FloatingMenu({ openAdd }) {
  const [isOpen, setIsIpen] = useState(false);

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
        <div className={styles.menuElement}>
          <img className={styles.iconPerson} src={Harry} />
          <p className={styles.namePerson}>Harry Potter</p>
          <button>
            <img className={styles.deleteIcon} src={DeleteIcon} />
          </button>
        </div>
        <div className={styles.menuElement}>
          <img className={styles.iconPerson} src={Harry} />
          <p className={styles.namePerson}>Harry Potter</p>
          <button>
            <img className={styles.deleteIcon} src={DeleteIcon} />
          </button>
        </div>
      </div>
    </div>
  );
}

FloatingMenu.propTypes = {
  openAdd: PropTypes.func,
};
