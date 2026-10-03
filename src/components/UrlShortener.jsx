import { useState } from "react";

function UrlShortener({ onAddUrl }) {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const createShortCode = () => {
    return Math.random().toString(36).substring(2, 8);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setCopied(false);

    if (!longUrl.trim()) {
      setError("Please enter a URL.");
      return;
    }

    try {
      new URL(longUrl);
    } catch {
      setError("Please enter a valid URL, e.g. https://example.com");
      return;
    }

    const code = createShortCode();
    const generatedUrl = `https://tiny.link/${code}`;

    const newUrl = {
      id: Date.now(),
      original: longUrl,
      short: generatedUrl,
      clicks: 0,
      date: new Date().toLocaleDateString(),
    };

    setShortUrl(generatedUrl);
    onAddUrl(newUrl);
    setLongUrl("");
  };

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      alert("Unable to copy URL");
    }
  };

  return (
    <div className="shortener-card">
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <span className="link-icon">🔗</span>

          <input
            type="text"
            placeholder="Paste your long URL here..."
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />

          <button type="submit" className="shorten-btn">
            Shorten URL
            <span>→</span>
          </button>
        </div>

        {error && <p className="error">{error}</p>}
      </form>

      {shortUrl && (
        <div className="result-box">
          <div>
            <small>Your shortened URL</small>
            <strong>{shortUrl}</strong>
          </div>

          <button onClick={copyUrl} className="copy-btn">
            {copied ? "✓ Copied" : "Copy"}
          </button>
        </div>
      )}
    </div>
  );
}

export default UrlShortener;