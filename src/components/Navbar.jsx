import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>LinkTrackr</h2>
      <div>
        <Link to="/">Shorten URL</Link>
        <Link to="/stats">Statistics</Link>
      </div>
    </nav>
  );
}
