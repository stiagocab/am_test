import PropTypes from "prop-types";
import React from "react";

import styles from "../styles/components.module.scss";

export default function Input({ label, type, required, name }) {
  return (
    <div className={styles.inputComponent}>
      <label>
        {label}
        <input type={type} required={required} name={name} />
      </label>
    </div>
  );
}

Input.defaultProps = {
  type: "text",
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
};

export const Radio = ({ label, name, value, required }) => {
  return (
    <div className={styles.radio}>
      <input
        required={required}
        type="radio"
        id={value}
        name={name}
        value={value}
      />
      <label htmlFor={value}>
        <span />
        {label}
      </label>
    </div>
  );
};
