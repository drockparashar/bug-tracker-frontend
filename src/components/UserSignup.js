import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const UserSignup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://bug-tracker-backend-1.onrender.com/user/userRegister", {
        email,
        name,
        username,
        password,
      });
      alert("Registration complete");
      navigate("/userLogin");
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
      <div className="heading">Sign Up</div>
        <form className="form">
          
            <input
            className="input"
              type="email"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />


         
            <input
            className="input"
              type="text"
              id="name"
              placeholder="Enter full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
   

          
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
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

          
            <button type="submit" className="login-button" onClick={submit}>
              Sign Up
            </button>

          <p className="agreement">
            Already registered <NavLink to="/userLogin">Sign In</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default UserSignup;
