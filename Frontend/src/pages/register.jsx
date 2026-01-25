import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        "/api/v1/user/register",
        { name, email, password },
        { 
          headers: { "Content-Type": "application/json" },
          withCredentials: true 
        }
      );
      toast.success(data.message);
      setName(""); setEmail(""); setPassword("");
      sessionStorage.setItem("registrationSuccess", "true");
      navigate("/success"); 
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="register-container">
      <div className="register-card">
        <h2>DineEase - Register</h2>
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="join-btn" disabled={loading}>
            {loading ? "Joining..." : "Join Now"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;