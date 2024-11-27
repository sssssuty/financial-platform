import React, { useState, useEffect } from "react";
import "../css/LandingPage.css";

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="landing-container">
      <div className={`hero ${scrolled ? "scrolled" : ""}`}>
        <h1>Welcome to Finance Buddy</h1>
        <p>Your trusted platform for mastering personal finance</p>
      </div>
      <section className="section">
        <h2>Why Join Finance Buddy?</h2>
        <p>Empowering financial literacy through community and education.</p>
      </section>
      <section className="section">
        <h2>Explore Lessons</h2>
        <p>Interactive content to help you learn and grow financially.</p>
      </section>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Finance Buddy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
