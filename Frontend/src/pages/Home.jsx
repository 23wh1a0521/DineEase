import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import Qualities from "../components/Qualities";
import WhoAreWe from "../components/WhoAreWe";
import Menu from "../components/Menu";
import Team from "../components/Team";

const Home = () => {
  // Check if user is authenticated
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <>
      <HeroSection />
      <Qualities />
      <WhoAreWe />
      <Menu />
      <Team />

      {/* Conditional CTA Section */}
      <section className="reservation-cta" style={{ padding: "50px", textAlign: "center" }}>
        {isAuthenticated ? (
          <div>
            <h3>Ready to join us?</h3>
            <Link to="/reservation" className="btn">Book a Table Now</Link>
          </div>
        ) : (
          <div>
            <h3>Want to book a table?</h3>
            <p>
              Please <Link to="/login" style={{ color: "#fb607f", fontWeight: "bold" }}>Login</Link> or 
              <Link to="/register" style={{ color: "#fb607f", fontWeight: "bold" }}> Register</Link> to make a reservation.
            </p>
          </div>
        )}
      </section>
    </>
  );
};

export default Home;