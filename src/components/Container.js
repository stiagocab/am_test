import PropTypes from "prop-types";
import React from "react";

//media
import background from "../media/background_app.jpeg";

// styles
import styles from "./components.module.scss";

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
