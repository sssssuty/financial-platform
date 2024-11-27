import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../css/NavBar.css';


const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="nav-bar">
      <Link to="/" className="logo">Finance Buddy</Link>
      <div className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
        <Link to="/lesson101" className="nav-link">Lesson 101</Link>
        <Link to="/community" className="nav-link">Community</Link>
        <Link to="/analysis" className="nav-link">Analysis</Link>
        <button className="sign-up-btn">Sign Up</button>
      </div>
      <button className="hamburger" onClick={toggleMobileMenu}>
        ☰
      </button>
    </div>
  );
};

export default NavBar;
