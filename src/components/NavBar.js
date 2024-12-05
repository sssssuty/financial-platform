import React from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      {/* Fivise logo */}
      <Link to="/" className="logo familjen-grotesk-logo">
        Fivise
      </Link>
      {/* Join the Waitlist Button */}
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScjrfOQSI_NOZ4Hbxh51R36onE6uCQr7dd3vsG3KCgflgmiWw/viewform"
        className="join-waitlist-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        Join the Waitlist
      </a>
    </div>
  );
};

export default NavBar;
