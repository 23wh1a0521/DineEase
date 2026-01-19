import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home-section" style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to DineEase</h1>
      <p>Manage your restaurant reservations with ease.</p>
      <div style={{ marginTop: "20px" }}>
        <Link to="/register">
          <button style={{ padding: "10px 20px", cursor: "pointer" }}>Get Started / Register</button>
        </Link>
      </div>
    </section>
  );
};

export default Home;