import React, { useState } from "react";
import RegisterForm from "../components/Forms/RegisterForm";
import useAuth from "../hooks/useAuth";

export default function AppRegister() {
  const [newUser, setNewUser] = useState({ name: "", email: "", password: "" });
  const { register } = useAuth();
  const handleOnRegister = async (e) => {
    await register(e, newUser);
  };
  return (
    <RegisterForm
      handleOnRegister={handleOnRegister}
      newUser={newUser}
      setNewUser={setNewUser}
    />
  );
}
