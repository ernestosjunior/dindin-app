import React from "react";
import { useLocalStorage } from "react-use";
import { AuthContext } from "../contexts";

function AuthProvider({ children }) {
  const [token, setToken, removeToken] = useLocalStorage("token", "");

  const value = { token, setToken, removeToken };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
