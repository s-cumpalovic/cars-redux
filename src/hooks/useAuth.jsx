import React, { createContext, useContext, useState, useEffect } from "react";
import { authService } from "../services/AuthService";
import { useHistory } from "react-router-dom";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const history = useHistory();

  const handleLogin = async (data) => {
    const response = await authService.login(data);
    setUser(response.data.user);
    history.push("/cars");
  };

  const handleLogout = async () => {
    await authService.logout();
    alert("You have logged out.");
    history.push("/cars");
  };

  const handleRegister = async (e, newUser) => {
    e.preventDefault();

    const response = await authService.register(newUser);
    if (response.status === 200) {
      alert("Registration successful.");
      history.push("/login");
    }
  };

  const handleRefreshToken = async () => {
    const { user } = await authService.refresh();
    setUser(user);
  };

  const handleGetItemFromLS = (value) => {
    return localStorage.getItem(value);
  };

  useEffect(() => {
    const token = handleGetItemFromLS("token");
    if (token) {
      handleRefreshToken(token);
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{ user, login: handleLogin, logout: handleLogout, register:handleRegister }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default function useAuth() {
  return useContext(AuthContext);
}
