import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.scss";

function Input({ label, id, type }) {
  return (
    <label className={styles.container}>
      {label}
      <input type={type} id={id} />
    </label>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  id: "",
  type: "text",
};

export default Input;
