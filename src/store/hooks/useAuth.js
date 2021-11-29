import { useState, useContext } from "react";
import { AuthContext } from "../contexts";

function useAuth() {
  const [form, setForm] = useState({
    email: { value: "", error: "" },
    password: { value: "", error: "" },
  });

  const { token } = useContext(AuthContext);

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

  async function handleLogin(token, setToken) {}

  function handleLogOut(removeToken) {}

  return {
    form,
    setForm,
    setField,
    handleLogin,
    handleLogOut,
    setError,
  };
}

export default useAuth;
