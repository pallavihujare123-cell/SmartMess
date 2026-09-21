import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="/" className="logo">
          <span className="logo-mark">S</span>
          <span className="logo-text">SmartMess</span>
        </a>

        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="#features">Features</a>
          <a href="#plans">Plans</a>
          <a href="#about">About</a>
        </nav>

        <div className="nav-actions">
          <button className="login-btn">
            Login
          </button>

          <button className="register-btn">
            Get Started
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;