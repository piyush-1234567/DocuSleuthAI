
import { useState } from "react";
import { FileSearch, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <a href="#home" className="navbar-logo" onClick={closeMenu}>
        <FileSearch className="logo-icon" size={36} />
        <span>DocuSleuth <span className="logo-highlight">AI</span></span>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span>{menuOpen ? "✕" : "☰"}</span>
      </button>

      <div className={`navbar-menu ${menuOpen ? "active" : ""}`}>
        <div className="navbar-links">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#features" onClick={closeMenu}>Features</a>
          <a href="#how-it-works" onClick={closeMenu}>How It Works</a>
          <a href="#about" onClick={closeMenu}>About</a>
        </div>

        <div className="navbar-actions">
          <Link to="/login" className="login-btn" onClick={closeMenu}>Login</Link>
          <Link to="/signup" className="get-started-btn" onClick={closeMenu}>
            Get Started <ArrowRight size={19} />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
