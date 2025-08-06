import React, { useEffect, useState } from "react";
import api from "../services/api";

function Statistics() {
  const [stats, setStats] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await api.get("/stats");
        setStats(response.data);
        setError("");
      } catch (err) {
        setError("Failed to fetch statistics.");
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="stats-container">
      <h2>URL Statistics</h2>
      {error && <p className="error">{error}</p>}
      <ul>
        {stats.map((item, index) => (
          <li key={index}>
            <strong>{item.originalUrl}</strong><br />
            Short: <a href={`http://localhost:3000/${item.shortCode}`} target="_blank" rel="noreferrer">
              http://localhost:3000/{item.shortCode}
            </a><br />
            Clicks: {item.clickCount} | Expiry: {item.expiry}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Statistics;
