import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import Lesson101 from "./components/Lesson101";
import Community from "./components/Community";
import Analysis from "./components/Analysis";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Other routes */}
          <Route path="/lesson101" element={<Lesson101 />} />
          <Route path="/community" element={<Community />} />
          <Route path="/analysis" element={<Analysis />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
