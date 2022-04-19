import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../axios-services";
import "../../style/Admin.css";

const AdminLogin = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const [newToken, message] = await login(username.toLowerCase(), password);
      localStorage.setItem("token", newToken);
      setToken(newToken);
      setMessage(message);
      navigate("/");
    } catch (error) {
      console.log(error.response.data);
      setMessage(error.response.data.message);
      setPassword("");
      console.dir("error at submit login", error);
    }
  };
  return (
    <div className="account-form-container">
      <form className="account-form-content-container" onSubmit={handleSubmit}>
        <div className="account-form-header">Log In</div>
        <div className="account-form-content">
          <label className="account-form-label">Username:</label>
          <input
            className="account-form-input"
            required
            value={username}
            placeholder="username"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </div>{" "}
        <div className="account-form-content">
          <label className="account-form-label">Password:</label>
          <input
            className="account-form-input"
            required
            type="password"
            value={password}
            placeholder="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        {message && <div className="err-message">{message}</div>}
        <button className="account-form-button">Submit</button>
      </form>
    </div>
  );
};
export default AdminLogin;