import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function Navbar() {
  const { logout } = useAuth();
  const handleLogout = async () => {
    await logout();
  };

  const { user } = useAuth();

  return (
    <div className="nav">
      <h1>Hello, {user && user.name}</h1>
      <ul className="nav-list">
        {user ? (
          <>
            <button onClick={handleLogout}>Logout</button>
            <li className="nav-item">
              <Link to="/cars">Cars</Link>
            </li>
            <li className="nav-item">
              <Link to="/add">Add a car</Link>
            </li>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </ul>
    </div>
  );
}
