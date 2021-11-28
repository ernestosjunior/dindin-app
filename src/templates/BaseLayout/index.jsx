import React from "react";
import PropTypes from "prop-types";
import { Header } from "../../components";
import styles from "./index.module.scss";

function BaseLayout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
}

BaseLayout.prototype = {
  children: PropTypes.any.isRequired,
};

export default BaseLayout;
