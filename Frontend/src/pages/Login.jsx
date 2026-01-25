import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Added loading state
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/user/login", 
        { email, password },
        { withCredentials: true, headers: { "Content-Type": "application/json" } }
      );
      
      if (data.success) {
        // HARD FIX: Use a fallback or check the exact path
        const tokenToSave = data.token || data.user?.token; 

        if (tokenToSave) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("userName", data.user.name);
        } else {
            console.error("Token missing from backend response keys:", data);
            alert("Authentication failed: No token received.");
            setLoading(false);
            return; // Stop execution if there is no token
        }

        localStorage.removeItem("cart"); 
        window.dispatchEvent(new Event("storage")); 
        
        alert(data.message);
        navigate("/"); 
      }
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="login-container">
      <div className="login-card">
        <h2>Login to DineEase</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Email Address" 
              required 
            />
          </div>
          <div className="input-group">
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Password" 
              required 
            />
          </div>
          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="redirect-text">
          New to DineEase? <a href="/register">Register here</a>
        </p>
      </div>
    </section>
  );
};

export default Login;