import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../assets/Navbar.css";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar-wrapper">
      <div className="navbar">

        {/* Left Logo */}
        <div className="nav-logo">
          <div className="logo-circle">P</div>
          <div className="logo-text">
            <span>Parthiv</span>
            <small>DESIGNER</small>
          </div>
        </div>

        {/* Center Menu (DESKTOP) */}
        <ul className="nav-menu">

          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              <span className="icon">🏠</span> Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              <span className="icon">👤</span> About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              <span className="icon">💖</span> Services
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              <span className="icon">⭐</span> Skills
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              <span className="icon">🗂</span> Portfolio
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              <span className="icon">✉</span> Contact
            </NavLink>
          </li>

        </ul>

        {/* Right Button */}
        <button className="talk-btn nav-cta">Let’s Talk →</button>

        {/* MOBILE ICON */}
        <div className="mobile-menu-icon" onClick={() => setOpen(!open)}>
          ☰
        </div>

      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="mobile-menu">
          <NavLink to="/" onClick={()=>setOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={()=>setOpen(false)}>About</NavLink>
          <NavLink to="/services" onClick={()=>setOpen(false)}>Services</NavLink>
          <NavLink to="/skills" onClick={()=>setOpen(false)}>Skills</NavLink>
          <NavLink to="/portfolio" onClick={()=>setOpen(false)}>Portfolio</NavLink>
          <NavLink to="/contact" onClick={()=>setOpen(false)}>Contact</NavLink>
        </div>
      )}

      {/* Glow line */}
      <div className="nav-glow-line"></div>
    </nav>
  );
}
