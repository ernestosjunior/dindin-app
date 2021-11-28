import React from "react";
import { useLocalStorage } from "react-use";
import AuthContext from "store/contexts/AuthContext";

function AuthProvider({ children }) {
  const [token, setToken, removeToken] = useLocalStorage("token", "");
  return (
    <AuthContext.Provider values={{ token, setToken, removeToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
