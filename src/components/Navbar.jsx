import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>LinkTrackr</h1>
      <div>
        <Link to="/">Shortener</Link>
        <Link to="/stats">Statistics</Link>
      </div>
    </nav>
  );
}

export default Navbar;
