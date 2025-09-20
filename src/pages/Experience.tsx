import SEOHead from "../seo/SEOHead";
import experience from "../data/experience.json";
import type { ExperienceItem } from "../types";

export default function Experience() {
  return (
    <>
      <SEOHead title="Experience" path="/experience" />
      <div className="container-narrow">
        <header className="text-center py-4 py-md-5">
          <h1 className="display-6 fw-bold mb-2 position-relative xp-title">Experience</h1>
          <p className="text-secondary m-auto" style={{ maxWidth: 600 }}>
            My professional journey and career achievements
          </p>
        </header>

        <section className="xp-timeline position-relative">
          {experience.map((item: ExperienceItem, idx: number) => (
            <article
              key={item.id}
              className={`xp-item ${idx % 2 === 1 ? "xp-right" : "xp-left"} xp-fade`}
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              <div className="xp-card">
                <h3 className="xp-role">{item.role}</h3>
                <p className="xp-company">{item.company}</p>
                <span className="xp-duration">{item.start} – {item.end}</span>
                <ul className="xp-list">
                  {item.achievements.map((a, i) => <li key={i}>{a}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </section>
      </div>
    </>
  );
}
