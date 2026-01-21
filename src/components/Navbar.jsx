import { useState, useEffect } from "react";
import "../assets/Navbar.css";
import { Home, User, Briefcase, Image, Mail } from "lucide-react";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActive(id);
    }
    setOpen(false);
  };
useEffect(() => {
  const sectionIds = ["home", "about", "services", "portfolio", "contact"];

  const getSectionOffsets = () =>
    sectionIds.map(id => {
      const el = document.getElementById(id);
      return {
        id,
        top: el ? el.offsetTop : 0
      };
    });

  let sections = getSectionOffsets();

  const handleScroll = () => {
    const scrollPos = window.scrollY + 140; // navbar offset

    let current = "home";

    for (let i = 0; i < sections.length; i++) {
      if (scrollPos >= sections[i].top) {
        current = sections[i].id;
      }
    }

    setActive(current);
  };

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", () => {
    sections = getSectionOffsets();
  });

  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);


  return (
    <nav className="navbar-wrapper">
      <div className="navbar">

        {/* Left Logo */}
        <div className="nav-logo">
          <div className="logo-title-img">
            <img src="/Title.png" alt="Parthiv Designer" />
          </div>
        </div>

        {/* Center Menu (DESKTOP) */}
        <ul className="nav-menu">
{[
  { id: "home",  icon: <Home size={25} /> },
  { id: "about",  icon: <User size={25} /> },
  { id: "services",  icon: <Briefcase size={25} /> },
  { id: "portfolio",  icon: <Image size={25} /> },
  { id: "contact",  icon: <Mail size={25} /> },
].map(item => (
  <li
    key={item.id}
    className={`nav-item ${active === item.id ? "active" : ""}`}
    onClick={() => scrollToSection(item.id)}
  >
    {item.icon}
    {item.label}
  </li>
))}


        </ul>

        {/* Right Button */}
        <button
          className="talk-btn nav-cta"
          onClick={() => scrollToSection("contact")}
        >
          Let’s Talk →
        </button>

        {/* MOBILE ICON */}
        <div className="mobile-menu-icon" onClick={() => setOpen(!open)}>
          ☰
        </div>

      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="mobile-menu">
          {["home","about","services","portfolio","contact"].map(item => (
            <span
              key={item}
              className={active === item ? "active" : ""}
              onClick={() => scrollToSection(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </span>
          ))}
        </div>
      )}

      <div className="nav-glow-line"></div>
    </nav>
  );
}
