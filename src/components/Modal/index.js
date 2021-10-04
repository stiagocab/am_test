import PropTypes from "prop-types";
import React from "react";

import styles from "./modal.module.scss";

export default function Modal({ isOpen, title, children }) {
  return (
    <div className={`${styles.modal} ${isOpen ? styles.isOpen : ""}`}>
      {children}
    </div>
  );
}

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
};
