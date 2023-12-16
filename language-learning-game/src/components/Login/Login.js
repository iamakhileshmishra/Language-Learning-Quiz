import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Update import
import axios from "axios";
import "./Login.css";

const Login = ({ setAccessToken }) => {
  const navigate = useNavigate(); // Use useNavigate for programmatic navigation
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "/language-learning-game-backend/routes/auth/login", {
        username,
        password,
      });
      const { accessToken } = response.data;
      setAccessToken(accessToken);
      navigate("/profile"); // Use navigate instead of history.push
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div
      className="log-container"
      style={{ backgroundImage: "url('/lng.jpg')" }}
    >
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
