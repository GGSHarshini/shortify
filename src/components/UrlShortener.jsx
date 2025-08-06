import React, { useState } from "react";
import api from "../services/api";

function UrlShortener() {
  const [urls, setUrls] = useState([""]);
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const handleInputChange = (index, value) => {
    const newUrls = [...urls];
    newUrls[index] = value;
    setUrls(newUrls);
  };

  const addField = () => {
    if (urls.length < 5) setUrls([...urls, ""]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/shorten", { urls });
      setResults(response.data);
      setError("");
    } catch (err) {
      setError("Failed to shorten URLs. Please try again.");
    }
  };

  return (
    <div className="shortener-container">
      <h2>Shorten Your URLs</h2>
      <form onSubmit={handleSubmit}>
        {urls.map((url, index) => (
          <input
            key={index}
            type="url"
            value={url}
            placeholder="Enter a URL"
            onChange={(e) => handleInputChange(index, e.target.value)}
            required
          />
        ))}
        {urls.length < 5 && <button type="button" onClick={addField}>Add Another</button>}
        <button type="submit">Shorten</button>
      </form>

      {error && <p className="error">{error}</p>}

      <div className="results">
        {results.map((item, index) => (
          <p key={index}>
            Shortened: <a href={`http://localhost:3000/${item.shortCode}`} target="_blank" rel="noreferrer">
              http://localhost:3000/{item.shortCode}
            </a>
          </p>
        ))}
      </div>
    </div>
  );
}

export default UrlShortener;
