import React, { useState } from "react";
import { Modal, Input } from "../../components";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

function LoginContainer() {
  const [openModal, setOpenModal] = useState(true);

  return (
    <Modal
      title="Login"
      opened={openModal}
      setOpened={setOpenModal}
      hideCloseButton
    >
      <form className={styles.form}>
        <Input label="Email" />
        <Input label="Senha" type="password" />
        <button>Entrar</button>
      </form>
      <span className={styles.registration}>
        Ainda não possui uma conta?
        <Link to="registration">Cadastre-se</Link>
      </span>
    </Modal>
  );
}

export default LoginContainer;
