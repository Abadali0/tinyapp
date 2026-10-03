function RecentUrls({ urls, onDelete }) {
  return (
    <section className="recent-section" id="links">
      <div className="section-header">
        <div>
          <h2>Recent Links</h2>
          <p>Your recently shortened URLs</p>
        </div>

        <span className="link-count">{urls.length} links</span>
      </div>

      {urls.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">🔗</div>
          <h3>No links yet</h3>
          <p>Your shortened links will appear here.</p>
        </div>
      ) : (
        <div className="links-list">
          {urls.map((item) => (
            <div className="url-row" key={item.id}>
              <div className="url-info">
                <div className="small-link-icon">↗</div>

                <div>
                  <a
                    href={item.short}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.short}
                  </a>

                  <p>{item.original}</p>
                </div>
              </div>

              <div className="url-meta">
                <span>{item.clicks} clicks</span>
                <span>{item.date}</span>

                <button
                  className="delete-btn"
                  onClick={() => onDelete(item.id)}
                >
                  ×
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default RecentUrls;