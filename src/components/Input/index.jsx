import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.scss";

function Input({ label, id, type, onChange, value }) {
  return (
    <label className={styles.container}>
      {label}
      <input type={type} id={id} onChange={onChange} value={value} />
    </label>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
};

Input.defaultProps = {
  id: "",
  type: "text",
};

export default Input;
