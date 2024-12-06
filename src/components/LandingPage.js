import React from "react";
import groupImage from "../images/group10.png";
import "../css/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="grid-layout">
        {/* Left Grid */}
        <div className="left-grid">
          <h1 className="tagline">Start Strong on Your Financial Journey in the U.S.</h1>
          <p className="subtext">
            Adapting to a new financial environment is less challenging if we learn from each other and support each other.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScjrfOQSI_NOZ4Hbxh51R36onE6uCQr7dd3vsG3KCgflgmiWw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="join-waitlist-btn"
          >
            Join the Waitlist
          </a>
        </div>

        {/* Right Grid */}
        <div className="right-grid">
          <img
            src={groupImage}
            alt="Finance Group"
            className="landing-image"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
