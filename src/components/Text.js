import PropTypes from "prop-types";
import React from "react";

export default function Text({ children }) {
  return <p>{children}</p>;
}

Text.propTypes = {
  children: PropTypes.node,
};
