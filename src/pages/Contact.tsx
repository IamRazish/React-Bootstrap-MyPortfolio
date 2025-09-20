import { useState } from "react";
import SEOHead from "../seo/SEOHead";
import site from "../data/site.json";
import { sendContact } from "../lib/contact";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Dribbble,
} from "lucide-react";

export default function Contact() {
  const [pending, setPending] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  // Pull some contact data from site.json (customize as you like)
  const email = site.socials?.find((s) => s.label.toLowerCase() === "email")?.url?.replace("mailto:", "") || "hello@example.com";
  const phone = site.phone || "+1 (555) 123-4567";
  const location = site.location || "Remote-first (PST Timezone)";

  // Map socials (optional: extend if you have more)
  const socials = [
    { label: "LinkedIn", icon: <Linkedin size={20} aria-hidden />, url: site.socials?.find(s => s.label.toLowerCase() === "linkedin")?.url || "#" },
    { label: "GitHub",   icon: <Github size={20} aria-hidden />,   url: site.socials?.find(s => s.label.toLowerCase() === "github")?.url || "#" },
    { label: "Twitter",  icon: <Twitter size={20} aria-hidden />,  url: site.socials?.find(s => s.label.toLowerCase() === "x" || s.label.toLowerCase() === "twitter")?.url || "#" },
    { label: "Dribbble", icon: <Dribbble size={20} aria-hidden />, url: site.socials?.find(s => s.label.toLowerCase() === "dribbble")?.url || "#" },
  ];

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setErr(null);

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      message: String(fd.get("message") || ""),
    };

    try {
      await sendContact(payload);
      (window as any).toast?.("Thanks! I’ll get back to you soon.");
      e.currentTarget.reset();
    } catch (e: any) {
      setErr(e?.message || "Something went wrong. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <>
      <SEOHead title="Contact" path="/contact" />
      <div className="container-narrow">
        <header className="text-center py-4 py-md-5">
          <h1 className="display-6 fw-bold mb-0 position-relative ct-title">Contact</h1>
        </header>
        <section className="ct-grid">
          <div className="ct-card fade-in">
            <form onSubmit={onSubmit} noValidate>
              <div className="ct-form-group">
                <label htmlFor="name" className="form-label fw-semibold">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  className="form-control ct-input"
                  placeholder="Your name"
                  required
                  aria-required="true"
                />
              </div>

              <div className="ct-form-group">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-control ct-input"
                  placeholder="you@example.com"
                  required
                  aria-required="true"
                />
              </div>

              <div className="ct-form-group">
                <label htmlFor="message" className="form-label fw-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control ct-input"
                  placeholder="How can I help?"
                  required
                  aria-required="true"
                  rows={6}
                />
              </div>

              {err && (
                <div role="alert" className="alert alert-danger">
                  {err}
                </div>
              )}

              <button
                type="submit"
                className="ct-submit d-inline-flex align-items-center gap-2"
                disabled={pending}
                aria-busy={pending}
              >
                <Send size={18} aria-hidden />
                {pending ? "Sending…" : "Send Message"}
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="ct-card fade-in">
            <h2 className="ct-section-title">Get in Touch</h2>

            <div className="ct-info-item">
              <div className="ct-info-icon" aria-hidden>
                <Mail size={20} />
              </div>
              <div className="ct-info-content">
                <h3>Email</h3>
                <p className="mb-0">
                  <a href={`mailto:${email}`} className="link-underline link-underline-opacity-0">
                    {email}
                  </a>
                </p>
              </div>
            </div>

            <div className="ct-info-item">
              <div className="ct-info-icon" aria-hidden>
                <Phone size={20} />
              </div>
              <div className="ct-info-content">
                <h3>Phone</h3>
                <p className="mb-0">{phone}</p>
              </div>
            </div>

            <div className="ct-info-item">
              <div className="ct-info-icon" aria-hidden>
                <MapPin size={20} />
              </div>
              <div className="ct-info-content">
                <h3>Location</h3>
                <p className="mb-0">{location}</p>
              </div>
            </div>

            <div className="ct-socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener"
                  aria-label={`${s.label} (opens in new tab)`}
                  className="ct-social-link"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </section>
        <section className="ct-map fade-in" aria-label="Location">
          <h2 className="ct-map-title">Where I’m Based</h2>
          <div className="ct-map-box">
            <span className="d-inline-flex align-items-center gap-2 text-secondary fw-semibold">
              <MapPin size={18} aria-hidden /> Pacific Northwest, United States
            </span>
          </div>
        </section>
      </div>
    </>
  );
}
