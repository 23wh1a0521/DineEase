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
          withCredentials: true // Important for sending/receiving cookies
        }
      );
      toast.success(data.message);
      setName(""); setEmail(""); setPassword("");
      navigate("/success"); // Redirect user after successful registration
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="register-section">
      <form onSubmit={handleRegister}>
        <h2>DineEase - Register</h2>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" disabled={loading}>
          {loading ? "Joining..." : "Join Now"}
        </button>
      </form>
    </section>
  );
};

export default Register;