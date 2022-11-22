import React, { useEffect, useState } from "react";

export default function RegisterForm({
  handleOnRegister,
  newUser,
  setNewUser,
}) {
  const [confirmPassword, setConfirmPassword] = useState({ password: "" });
  const [passwordConfirmed, setPasswordConfirmed] = useState(false);

  useEffect(() => {
    checkPasswords();
  }, [confirmPassword]);

  const checkPasswords = () => {
    if (confirmPassword === newUser.password) {
      setPasswordConfirmed(true);
    }
  };

  console.log(confirmPassword);

  const handleUnmatchedPasswords = (e) => {
    e.preventDefault()
    alert('Passwords do not match');
  };

  return (
    <div>
      <form
        onSubmit={
          passwordConfirmed ? handleOnRegister : handleUnmatchedPasswords
        }
      >
        <input
          required
          placeholder="name"
          type="text"
          value={newUser.name}
          onChange={({ target }) =>
            setNewUser({ ...newUser, name: target.value })
          }
        />
        <input
          required
          placeholder="email"
          type="email"
          value={newUser.email}
          onChange={({ target }) =>
            setNewUser({ ...newUser, email: target.value })
          }
        />
        <input
          required
          placeholder="password"
          type="password"
          value={newUser.password}
          onChange={({ target }) =>
            setNewUser({ ...newUser, password: target.value })
          }
        />
        <input
          required
          placeholder="confirm password"
          type="password"
          value={confirmPassword.confirmPassword}
          onChange={({ target }) => {
            setConfirmPassword(target.value);
          }}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
