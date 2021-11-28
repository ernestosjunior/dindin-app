import React, { useState, useEffect } from "react";
import { Modal, Input } from "../../components";
import { Link } from "react-router-dom";
import { useAuth } from "../../store/hooks";
import { validateForm } from "./utils";
import styles from "./index.module.scss";

function LoginContainer() {
  const [openModal, setOpenModal] = useState(true);

  const { setField, form, setError } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();

    if (!validateForm(form.email.value, form.password.value, setError)) return;

    console.log(e);
  }

  useEffect(() => {
    if (form.email.error && form.email.value.length) {
      setError("email", "");
    }
    if (form.password.error && form.password.value.length) {
      setError("password", "");
    }
    //eslint-disable-next-line
  }, [form.email.value, form.password.value]);

  return (
    <Modal
      title="Login"
      opened={openModal}
      setOpened={setOpenModal}
      hideCloseButton
    >
      <form className={styles.form}>
        <div>
          <Input
            id="email"
            label="Email"
            onChange={(e) => setField(e.target.id, e.target.value)}
          />
          <p>{form.email.error}</p>
        </div>
        <div>
          <Input
            id="password"
            label="Senha"
            type="password"
            onChange={(e) => setField(e.target.id, e.target.value)}
            value={form.password.value}
          />
          <p>{form.password.error}</p>
        </div>
        <button onClick={(e) => handleSubmit(e)}>Entrar</button>
      </form>
      <span className={styles.registration}>
        Ainda não possui uma conta?
        <Link to="registration">Cadastre-se</Link>
      </span>
    </Modal>
  );
}

export default LoginContainer;
