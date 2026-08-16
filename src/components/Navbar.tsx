import { useState, useEffect } from "react";
import "../styles/navbar.css";

const navLinks = [
  { id: "hero", label: "Beranda" },
  { id: "flipbook", label: "Panduan" },
  { id: "poster-section", label: "Poster & Infografis" },
  { id: "rab", label: "RAB" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map((link) => ({
        id: link.id,
        el: document.getElementById(link.id),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.el) {
          const rect = section.el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        <a
          href="#"
          className="navbar-logo"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("hero");
          }}
        >
          <span className="navbar-logo-icon">🔥</span>
          <span>Sinergi Api</span>
        </a>

        <div className={`navbar-links ${mobileOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`navbar-link ${activeSection === link.id ? "active" : ""}`}
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          className={`navbar-mobile-toggle ${mobileOpen ? "open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
