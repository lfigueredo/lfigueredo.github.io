import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="wix-navbar">
      <div className="navbar-container">
        <a href="/" className="nav-brand">Luis Figueredo</a>
        
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/research" onClick={() => setIsOpen(false)}>Research</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/team" onClick={() => setIsOpen(false)}>Our Team</Link>
          <a href="https://scholar.google.com/citations?user=ppZN58sAAAAJ&hl=en" target="_blank" rel="noreferrer" className="nav-external" onClick={() => setIsOpen(false)}>
            <img src="/icons/scholar.png" alt="" width="16" height="16" className="menu-icon" /> Publications
          </a>
          <a href="https://www.youtube.com/@figueredo_robotics" target="_blank" rel="noreferrer" className="nav-external" onClick={() => setIsOpen(false)}>
            <img src="/icons/youtube.png" alt="" width="16" height="16" className="menu-icon" /> Videos
          </a>
          <Link to="/resources" onClick={() => setIsOpen(false)}>Resources</Link>
          <Link to="/join" onClick={() => setIsOpen(false)}>Join us!</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>

        <div className="nav-socials">
          <a href="https://www.linkedin.com/in/luis-figueredo-304a0612b/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <img src="/icons/linkedin.png" alt="LinkedIn" width="22" height="22" />
          </a>
          <a href="https://scholar.google.com/citations?user=ppZN58sAAAAJ&hl=en" target="_blank" rel="noreferrer" aria-label="Google Scholar">
            <img src="/icons/scholar.png" alt="Google Scholar" width="24" height="24" />
          </a>
          <a href="https://www.youtube.com/@figueredo_robotics" target="_blank" rel="noreferrer" aria-label="YouTube">
            <img src="/icons/youtube.png" alt="YouTube" width="24" height="24" />
          </a>
        </div>

        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>
    </nav>
  );
}
