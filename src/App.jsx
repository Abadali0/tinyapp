import { useState } from "react";
import Navbar from "./components/Navbar";
import UrlShortener from "./components/UrlShortener";
import RecentUrls from "./components/RecentUrls";

function App() {
  const [urls, setUrls] = useState([]);

  const addUrl = (url) => {
    setUrls((prev) => [url, ...prev]);
  };

  const deleteUrl = (id) => {
    setUrls((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <Navbar />

      <main>
        <section className="hero">
          <div className="badge">
            <span>✦</span> Simple URL Shortener
          </div>

          <h1>
            Shorten your links.
            <br />
            <span>Share them anywhere.</span>
          </h1>

          <p className="hero-text">
            Create short, memorable links in seconds. Fast, simple and easy
            to share.
          </p>

          <UrlShortener onAddUrl={addUrl} />
        </section>

        <section className="stats">
          <div className="stat-card">
            <div className="stat-icon">🔗</div>
            <div>
              <strong>10K+</strong>
              <span>Links Shortened</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">⚡</div>
            <div>
              <strong>99.9%</strong>
              <span>Uptime</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🌍</div>
            <div>
              <strong>50+</strong>
              <span>Countries</span>
            </div>
          </div>
        </section>

        <RecentUrls urls={urls} onDelete={deleteUrl} />
      </main>

      <footer>
        <p>© 2026 TinyLink. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;