import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Update import
import axios from "axios";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate(); // Use useNavigate for programmatic navigation
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "/language-learning-game-backend/routes/auth/register",
        { username, password }
      );
      navigate("/login"); // Use navigate instead of history.push
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <>
      <div
        className="reg-container"
        style={{ backgroundImage: "url('/lng.jpg')" }}
      >
        <div>
          <h2>Register</h2>
          <form onSubmit={handleRegister}>
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
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
