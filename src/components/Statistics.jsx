import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function Statistics() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await api.get("/stats");
        setStats(res.data);
      } catch {
        setStats([]);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="stats-container">
      <h2>URL Statistics</h2>
      {stats.length === 0 ? (
        <p>No statistics available.</p>
      ) : (
        stats.map((s, i) => (
          <div key={i} className="stat-card">
            <p><b>Short URL:</b> <a href={s.shortUrl}>{s.shortUrl}</a></p>
            <p><b>Created:</b> {s.createdAt}</p>
            <p><b>Expires:</b> {s.expiry}</p>
            <p><b>Clicks:</b> {s.clickCount}</p>
            <h4>Click Details:</h4>
            <ul>
              {s.clicks.map((c, j) => (
                <li key={j}>
                  {c.timestamp} | {c.source} | {c.location}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}
