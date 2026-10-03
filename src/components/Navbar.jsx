function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <div className="logo-icon">↗</div>
        <span>TinyLink</span>
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#links">My Links</a>
        <a href="#about">About</a>
      </div>

      <button className="nav-button">Get Started</button>
    </nav>
  );
}

export default Navbar;