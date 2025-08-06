import React, { useState } from "react";
import api from "../services/api";
import "../styles/Form.css";

export default function UrlShortener() {
  const [urls, setUrls] = useState([{ longUrl: "", validity: "", shortcode: "" }]);
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const handleChange = (index, field, value) => {
    const updatedUrls = [...urls];
    updatedUrls[index][field] = value;
    setUrls(updatedUrls);
  };

  const addUrlField = () => {
    if (urls.length < 5) {
      setUrls([...urls, { longUrl: "", validity: "", shortcode: "" }]);
    }
  };

  const shortenUrls = async () => {
    try {
      const responses = await Promise.all(
        urls.map((u) =>
          api.post("/shorten", {
            url: u.longUrl,
            validity: u.validity || 30,
            shortcode: u.shortcode || null,
          })
        )
      );
      setResults(responses.map((r) => r.data));
      setError("");
    } catch (err) {
      setError("Error shortening URLs. Please check inputs.");
    }
  };

  return (
    <div className="form-container">
      <h2>Shorten up to 5 URLs</h2>
      {urls.map((u, i) => (
        <div key={i} className="url-box">
          <input
            type="url"
            placeholder="Enter Long URL"
            value={u.longUrl}
            onChange={(e) => handleChange(i, "longUrl", e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Validity (minutes)"
            value={u.validity}
            onChange={(e) => handleChange(i, "validity", e.target.value)}
          />
          <input
            type="text"
            placeholder="Custom Shortcode"
            value={u.shortcode}
            onChange={(e) => handleChange(i, "shortcode", e.target.value)}
          />
        </div>
      ))}
      {urls.length < 5 && <button onClick={addUrlField}>+ Add Another URL</button>}
      <button className="shorten-btn" onClick={shortenUrls}>Shorten</button>
      {error && <p className="error">{error}</p>}
      <div className="results">
        {results.map((r, i) => (
          <p key={i}>
            Shortened: <a href={r.shortUrl}>{r.shortUrl}</a> (Expires: {r.expiry})
          </p>
        ))}
      </div>
    </div>
  );
}
