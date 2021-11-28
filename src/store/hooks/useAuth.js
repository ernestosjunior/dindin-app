import { useState } from "react";

function useAuth() {
  const [form, setForm] = useState({
    email: { value: "", error: "" },
    password: { value: "", error: "" },
  });

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
