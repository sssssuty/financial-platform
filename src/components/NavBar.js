import React from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      {/* Updated Fivise link to use the current path */}
      <Link to="/financial-platform" className="logo familjen-grotesk-logo">
        Fivise
      </Link>
      <div className="nav-links">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScjrfOQSI_NOZ4Hbxh51R36onE6uCQr7dd3vsG3KCgflgmiWw/viewform"
          className="join-waitlist-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join the Waitlist
        </a>
      </div>
    </div>
  );
};

export default NavBar;
