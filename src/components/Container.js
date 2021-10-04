import PropTypes from "prop-types";
import React from "react";

//assets
import background from "../assets/background_app.jpeg";

// styles
import styles from "../styles/components.module.scss";

export default function Container({ children }) {
  return (
    <div className={styles.container}>
      <img className={styles.background} src={background} />
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node,
};
