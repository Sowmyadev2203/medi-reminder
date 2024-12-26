// LogoutPage.js
import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useHistory } from "react-router-dom"; // For navigation

const LogoutPage = () => {
  const { logout } = useContext(AuthContext); // Get the logout function from context
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await logout();
      history.push("/login"); // Redirect to login page after logout
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div>
      <h2>You are logged in. Are you sure you want to log out?</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogoutPage;
