import site from "../data/site.json";
import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  const socials = {
    linkedin:
      site.socials?.find((s) => s.label.toLowerCase() === "linkedin")?.url || "#",
    github:
      site.socials?.find((s) => s.label.toLowerCase() === "github")?.url || "#",
    email:
      site.socials?.find((s) => s.label.toLowerCase() === "email")?.url ||
      "mailto:hello@example.com",
  };

  return (
    <footer className="sp-footer">
      <div className="container-wide">
        <div className="sp-footer__content">
          <div className="sp-footer__copy">
            © {new Date().getFullYear()} {site.name || "Ali Raza"}
          </div>
          <div className="sp-footer__socials">
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} aria-hidden />
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} aria-hidden />
            </a>
            <a href={socials.email} aria-label="Email">
              <Mail size={18} aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
