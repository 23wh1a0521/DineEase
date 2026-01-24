import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/user/login", 
        { email, password },
        { withCredentials: true, headers: { "Content-Type": "application/json" } }
      );
      
      // Store token for session persistence
      localStorage.setItem("token", data.token);
      alert(data.message);
      navigate("/"); // Redirect to Home after login
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <section className="loginPage">
      <form onSubmit={handleLogin}>
        <h2>Login to DineEase</h2>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </section>
  );
};

export default Login;