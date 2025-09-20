import { Button, Row, Col } from "react-bootstrap";
import { Github, Linkedin, Twitter, Dribbble, Send, FileDown } from "lucide-react";
import SEOHead from "../seo/SEOHead";
import site from "../data/site.json";

export default function Home() {
  const name = site.name || "Ali Raza";
  const role = site.role || "UI/UX Designer & Frontend Developer";
  const resumeUrl = site.resumeUrl || "#";

  return (
    <>
      <SEOHead title="Home" path="/" />
      <section className="intro-section rb-home rounded-4 overflow-hidden shadow-sm d-flex">
        <Row className="g-0">
          <Col
            md={6}
            className="d-flex align-items-center justify-content-center position-relative rb-hero-side p-5"
            aria-label="Profile"
          >
            <div className="rb-circle-1 d-none d-md-block" aria-hidden />
            <div className="rb-circle-2 d-none d-md-block" aria-hidden />
            <div className="text-center text-white position-relative" style={{ zIndex: 2 }}>
              <img
                src={"/images/Avatar.jpg"}
                alt={`${name} profile`}
                className="rb-profile-image mb-3"
                loading="lazy"
              />
              <h2 className="fw-semibold mb-1">{name}</h2>
              <p className="opacity-75 m-0">{role}</p>
            </div>
          </Col>
          <Col md={6} className="p-4 p-md-5 bg-body d-flex">
            <div className="my-auto">
              <h1 className="display-6 fw-bold mb-2 rb-fade-in">{`Hello, I'm ${name}`}</h1>
              <h3 className="h5 text-primary mb-3 rb-fade-in rb-delay-1">{role}</h3>
              <p className="text-secondary mb-4 rb-fade-in rb-delay-1">{site.about}</p>
              <div
                className="d-flex gap-4 flex-wrap mb-4 rb-fade-in rb-delay-2"
                aria-label="Highlights"
              >
                {site.states?.map((stat, index) => (
                  <div className="text-center" key={index}>
                    <div className="fs-2 fw-bold text-primary">{stat.value}</div>
                    <div className="text-secondary small">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="d-flex gap-2 mb-4 rb-fade-in rb-delay-2" aria-label="Social links">
                <a className="rb-social" href="https://linkedin.com/" target="_blank" rel="noopener" aria-label="LinkedIn">
                  <Linkedin size={18} aria-hidden />
                </a>
                <a className="rb-social" href="https://github.com/" target="_blank" rel="noopener" aria-label="GitHub">
                  <Github size={18} aria-hidden />
                </a>
                <a className="rb-social" href="https://dribbble.com/" target="_blank" rel="noopener" aria-label="Dribbble">
                  <Dribbble size={18} aria-hidden />
                </a>
                <a className="rb-social" href="https://twitter.com/" target="_blank" rel="noopener" aria-label="X / Twitter">
                  <Twitter size={18} aria-hidden />
                </a>
              </div>
              <div className="d-flex flex-wrap gap-3 rb-fade-in rb-delay-3">
                <Button
                  as="a"
                  href="/contact"
                  size="lg"
                  variant="primary"
                  className="d-inline-flex align-items-center gap-2"
                >
                  <Send size={18} aria-hidden /> {site.contactText}
                </Button>
                <Button
                  as="a"
                  href={resumeUrl}
                  target={resumeUrl.startsWith("#") ? undefined : "_blank"}
                  rel="noopener"
                  size="lg"
                  variant="outline-primary"
                  className="d-inline-flex align-items-center gap-2"
                >
                  <FileDown size={18} aria-hidden /> {site.download}
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
}
