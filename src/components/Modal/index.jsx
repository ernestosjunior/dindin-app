import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Close } from "../../assets/svg/close.svg";
import styles from "./index.module.scss";

function Modal({ title, children, opened, setOpened, hideCloseButton }) {
  return opened ? (
    <div className={styles.backdrop}>
      <div className={styles.main}>
        <div className={styles.headerModal}>
          <h1>{title}</h1>
          {!hideCloseButton && (
            <div onClick={() => setOpened(false)}>
              <Close />
            </div>
          )}
        </div>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>
  ) : null;
}

Modal.prototype = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  opened: PropTypes.bool.isRequired,
  setOpened: PropTypes.func.isRequired,
  hideCloseButton: PropTypes.bool,
};

Modal.defaultProps = {
  hideCloseButton: false,
};

export default Modal;
