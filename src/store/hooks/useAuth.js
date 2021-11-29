import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../contexts";
import { baseURL } from "../../services/api";
import { toast } from "react-toastify";

function useAuth() {
  const [form, setForm] = useState({
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
      if (response.status === 404) {
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
  };
}

export default useAuth;
