import React, { useState, useEffect } from "react";
import { Modal, Input } from "../../components";
import { Link } from "react-router-dom";
import { useAuth } from "../../store/hooks";
import { validateForm } from "./utils";
import styles from "./index.module.scss";

function RegistrationContainer() {
  const [openModal, setOpenModal] = useState(true);

  const { setField, form, setError, handleRegistration } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      !validateForm(
        form.firstName.value,
        form.email.value,
        form.password.value,
        setError
      )
    )
      return;

    handleRegistration();
  }

  useEffect(() => {
    if (form.firstName.error && form.firstName.value.length) {
      setError("firstName", "");
    }
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
      title="Cadastro"
      opened={openModal}
      setOpened={setOpenModal}
      hideCloseButton
    >
      <form className={styles.form}>
        <div>
          <Input
            id="firstName"
            label="Nome"
            onChange={(e) => setField(e.target.id, e.target.value)}
          />
          <p>{form.firstName.error}</p>
        </div>
        <div>
          <Input
            id="lastName"
            label="Sobrenome"
            onChange={(e) => setField(e.target.id, e.target.value)}
          />
          <p>{form.lastName.error}</p>
        </div>
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
        <button onClick={(e) => handleSubmit(e)}>Cadastre-se</button>
      </form>
      <span className={styles.login}>
        Já possui uma conta?
        <Link to="/login">Login</Link>
      </span>
    </Modal>
  );
}

export default RegistrationContainer;
