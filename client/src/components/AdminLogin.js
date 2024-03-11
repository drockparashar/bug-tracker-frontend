import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/login.css";
import { useCookies } from "react-cookie";
import logo from "../assets/logo.png";


const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [, setCookies] = useCookies("access_token");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3002/admin/adminLogin",
        {
          username,
          password,
        }
      );
      alert("Login Successful");
      setCookies("access_token", response.data.token);
      window.localStorage.setItem("userID", response.data.userID);
      navigate("/adminhome");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="parent">
      <nav>
        <div className="left">
          <NavLink to="/"><img src={logo} className="logo-img"/></NavLink>
        </div>
        </nav>
      <div className="container">
        <div className="heading">Sign In</div>
        <form className="form">
          <input
            className="input"
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="input"
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-button" onClick={submit}>
            Login
          </button>
          <p className="agreement">
            Not Registered ? <NavLink to="/adminSignup">Sign Up</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
