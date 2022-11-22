import React from "react";

export default function LoginForm({ handleOnLogin, user, setUser }) {
  return (
    <div>
      <form onSubmit={handleOnLogin}>
        <input
          required
          type="email"
          value={user.email}
          onChange={({ target }) => setUser({ ...user, email: target.value })}
        />
        <input
          required
          type="password"
          value={user.password}
          onChange={({ target }) =>
            setUser({ ...user, password: target.value })
          }
        />
        <button type="submit">login</button>
      </form>
    </div>
  );
}
