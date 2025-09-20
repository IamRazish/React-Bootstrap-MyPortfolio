import { useMemo, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import SEOHead from "../seo/SEOHead";
import data from "../data/projects.json";
import type { ProjectItem } from "../types";

type TagKey = string;

const FALLBACKS = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1115&q=80",
  "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=1170&q=80",
];

export default function Projects() {
  // Collect all unique tags from data
  const allTags = useMemo<TagKey[]>(
    () => Array.from(new Set(data.flatMap((p) => p.tags))).sort(),
    []
  );

  // Filter state
  const [active, setActive] = useState<TagKey | "all">("all");

  const filtered: ProjectItem[] = useMemo(() => {
    if (active === "all") return data;
    return data.filter((p) => p.tags.map((t) => t.toLowerCase()).includes(active.toLowerCase()));
  }, [active]);

  return (
    <>
      <SEOHead title="Projects" path="/projects" />
      <div className="container-narrow">
        {/* Header */}
        <header className="text-center py-4 py-md-5">
          <h1 className="display-6 fw-bold mb-2 position-relative pg-title">
            Projects
          </h1>
          <p className="text-secondary m-auto" style={{ maxWidth: 600 }}>
            Explore my latest work and creative projects
          </p>
        </header>

        {/* Filters */}
        <div className="d-flex justify-content-center flex-wrap gap-2 gap-md-3 mb-4 mb-md-5" role="group" aria-label="Project filters">
          <Button
            variant={active === "all" ? "primary" : "light"}
            className={`pg-filter ${active === "all" ? "active" : ""}`}
            onClick={() => setActive("all")}
          >
            All
          </Button>
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={active === tag ? "primary" : "light"}
              className={`pg-filter ${active === tag ? "active" : ""}`}
              onClick={() => setActive(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>

        {/* Grid */}
        <Row xs={1} md={2} lg={3} className="g-4">
          {filtered.map((p, idx) => {
            const cover =
              p.image ||
              p.images?.[0] ||
              FALLBACKS[idx % FALLBACKS.length];

            return (
              <Col key={p.id} className="fade-in">
                <article className="pg-card h-100">
                  <div className="pg-image">
                    <img
                      src={cover}
                      alt={p.title}
                      loading="lazy"
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="h5 pg-card-title">{p.title}</h3>
                    <span className="pg-year">{p.year}</span>
                    <p className="text-secondary mb-3">{p.summary}</p>
                    <div className="d-flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span key={t} className="pg-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
}
