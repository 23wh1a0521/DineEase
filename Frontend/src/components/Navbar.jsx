import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Forces the navbar to refresh on navigation
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Re-evaluate login status every time the URL changes
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("userName");
    
    setIsLoggedIn(!!token);
    setUserName(name || "");
  }, [location]); // Triggered by page changes

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("cart");
    window.location.reload();
    
    // Notify other components that storage has changed
    window.dispatchEvent(new Event("storage")); 
    setIsLoggedIn(false);
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">DineEase</div>
      <div className="links">
        <Link to="/">Home</Link>
        
        {/* Only show Menu and History if logged in */}
        {isLoggedIn ? (
          <>
            <Link to="/menu">Menu</Link>
            <Link to="/reservation">Reservation</Link>
            <Link to="/order">Orders</Link>
            <Link to="/myorders">History</Link>
            {userName && <span className="user-greeting">Welcome, {userName}!</span>}
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;