import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../contexts";
import { baseURL } from "../../services/api";
import { toast } from "react-toastify";

function useAuth() {
  const [form, setForm] = useState({
    firstName: { value: "", error: "" },
    lastName: { value: "", error: "" },
    email: { value: "", error: "" },
    password: { value: "", error: "" },
  });

  const { token, setToken, removeToken } = useContext(AuthContext);

  const history = useHistory();

  function setField(field, value) {
    setForm((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        value,
      },
    }));
  }

  function setError(field, error) {
    setForm((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        error,
      },
    }));
  }

  async function handleLogin() {
    const response = await fetch(baseURL + "/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: form.email.value,
        password: form.password.value,
      }),
    });

    if (!response.ok) {
      return toast.error("Ocorreu um problema ao fazer login.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    const data = await response.json();

    if (!data.success) {
      if (data.error === "Invalid credentials") {
        toast.error("Credenciais inválidas.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error("Ocorreu um problema ao fazer login.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      return;
    }

    setToken(data.data.token);
    history.push("/");
  }

  async function handleRegistration() {
    const response = await fetch(baseURL + "/user/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        email: form.email.value,
        password: form.password.value,
        repeatPassword: form.password.value,
      }),
    });

    if (!response.ok) {
      return toast.error("Ocorreu um problema ao fazer o cadastro.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    const data = await response.json();

    if (!data.success) {
      return toast.error("Ocorreu um problema ao fazer o cadastro.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    toast.success("Cadastro efetuado com sucesso! 🎉", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    setToken(data.data.token);
    history.push("/");
  }

  function handleLogOut() {
    removeToken();
    history.push("/login");
  }

  return {
    form,
    setForm,
    setField,
    handleLogin,
    handleLogOut,
    setError,
    token,
    handleRegistration,
  };
}

export default useAuth;
