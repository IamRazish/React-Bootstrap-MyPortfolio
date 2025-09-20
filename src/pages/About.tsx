import SEOHead from "../seo/SEOHead";
import site from "../data/site.json";
import skills from "../data/skills.json";
import {
  MapPin,
  Star,
  Heart,
  Code2,
  Zap,
  FlaskConical,
  CheckCircle2,
  PenTool,
  Accessibility,
  Box,
} from "lucide-react";

export default function About() {
  const details = [
    { icon: <MapPin size={18} aria-hidden />, title: "Location", text: "Remote-first" },
    { icon: <Star size={18} aria-hidden />, title: "Specialties", text: "React, TypeScript, UI/UX" },
    { icon: <Heart size={18} aria-hidden />, title: "Interests", text: "Design systems, a11y, DX" },
  ];

  // Map some common skill names to icons (fallback to generic box)
  const iconFor = (name: string) => {
    const key = name.toLowerCase();
    if (key.includes("react")) return <Code2 size={22} aria-hidden />;
    if (key.includes("type")) return <Code2 size={22} aria-hidden />;
    if (key.includes("boot")) return <Box size={22} aria-hidden />;
    if (key.includes("node")) return <Box size={22} aria-hidden />;
    if (key.includes("vite")) return <Zap size={22} aria-hidden />;
    if (key.includes("jest")) return <FlaskConical size={22} aria-hidden />;
    if (key.includes("cypress")) return <CheckCircle2 size={22} aria-hidden />;
    if (key.includes("figma")) return <PenTool size={22} aria-hidden />;
    if (key.includes("a11y") || key.includes("access")) return <Accessibility size={22} aria-hidden />;
    return <Box size={22} aria-hidden />;
  };

  return (
    <>
      <SEOHead title="About" path="/about" />
      <div className="container-narrow">
        <header className="text-center py-4 py-md-5">
          <h1 className="display-6 fw-bold mb-0 position-relative about-title">About Me</h1>
        </header>

        <section className="about-grid">
          {/* Left: About + Details */}
          <div className="about-card fade-in">
            <p className="lead text-secondary mb-4">{site.about}</p>

            <div className="about-details">
              {details.map((d, i) => (
                <div key={i} className="detail-item">
                  <div className="detail-icon">{d.icon}</div>
                  <div className="detail-content">
                    <h3>{d.title}</h3>
                    <p className="m-0">{d.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Skills */}
          <div className="skills-card fade-in">
            <h2 className="skills-title">Skills</h2>
            <div className="skills-grid">
              {skills.map((s: string) => (
                <div key={s} className="skill-item">
                  <div className="skill-icon">{iconFor(s)}</div>
                  <div className="skill-name">{s}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
