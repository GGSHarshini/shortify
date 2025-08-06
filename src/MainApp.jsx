import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UrlShortener from "./components/UrlShortener";
import Statistics from "./components/Statistics";
import "./styles/MainStyles.css";

function MainApp() {
  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<UrlShortener />} />
          <Route path="/stats" element={<Statistics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default MainApp;


