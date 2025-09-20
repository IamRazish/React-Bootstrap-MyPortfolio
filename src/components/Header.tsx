import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import site from "../data/site.json";
import { Menu, X, Linkedin, Github, Mail } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const socials = {
    linkedin: site.socials?.find(s => s.label.toLowerCase() === "linkedin")?.url || "#",
    github:   site.socials?.find(s => s.label.toLowerCase() === "github")?.url || "#",
    email:    site.socials?.find(s => s.label.toLowerCase() === "email")?.url || "mailto:hello@example.com",
  };

  useEffect(() => {
    const onScroll = () => {
      const el = document.querySelector<HTMLElement>(".sp-header");
      if (!el) return;
      if (window.scrollY > 50) el.classList.add("is-sticky");
      else el.classList.remove("is-sticky");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // close menu on route change hash clicks etc.
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <header className={`sp-header ${open ? "nav-open" : ""}`} role="banner">
      <div className="container-wide">
        <div className="sp-header__content">
          {/* Logo */}
          <Link to="/" className="sp-logo" aria-label={site.name || "Home"}>
            <div className="sp-logo__icon" aria-hidden>
              {(site.name || "A").slice(0,1).toUpperCase()}
            </div>
            <div className="sp-logo__text">{site.name || "Ali Raza"}</div>
          </Link>

          {/* Mobile toggle */}
          <button
            className="sp-menu-toggle"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
          </button>

          {/* Nav */}
          <nav className={`sp-nav ${open ? "active" : ""}`} aria-label="Primary">
            <ul>
              <li><NavLink to="/projects" className={({isActive}) => isActive ? "active" : ""}>Projects</NavLink></li>
              <li><NavLink to="/experience" className={({isActive}) => isActive ? "active" : ""}>Experience</NavLink></li>
              <li><NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>About</NavLink></li>
              <li><NavLink to="/contact" className={({isActive}) => isActive ? "active" : ""}>Contact</NavLink></li>
              <li><NavLink to="/resume" className={({isActive}) => isActive ? "active" : ""}>Resume</NavLink></li>
            </ul>
          </nav>

          {/* Socials */}
          <div className="sp-socials">
            <a href={socials.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
              <Linkedin size={18} aria-hidden />
            </a>
            <a href={socials.github} target="_blank" rel="noopener" aria-label="GitHub">
              <Github size={18} aria-hidden />
            </a>
            <a href={socials.email} aria-label="Email">
              <Mail size={18} aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
