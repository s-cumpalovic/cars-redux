import React, { useState } from "react";
import LoginForm from "../components/Forms/LoginForm";
import { useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function AppLogin() {
  const [loginUser, setLoginUser] = useState({ email: "", password: "" });
  const history = useHistory();
  const { login } = useAuth();

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const response = await login(loginUser);
    alert(response.data.status);
    history.push("/cars");
  };

  
  return (
    <LoginForm
      handleOnLogin={handleSubmitForm}
      user={loginUser}
      setUser={setLoginUser}
    />
  );
}
