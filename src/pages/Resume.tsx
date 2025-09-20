import SEOHead from "../seo/SEOHead";
import site from "../data/site.json";
import experience from "../data/experience.json";
import skills from "../data/skills.json";
import { Download, FileText, Briefcase, GraduationCap } from "lucide-react";

type Exp = {
  id: string;
  role: string;
  company: string;
  start: string;
  end: string;
  achievements: string[];
};

const education = [
  {
    degree: "B.S. in Computer Science",
    school: "Stanford University",
    dates: "2016 – 2020",
  },
];

export default function Resume() {
  const name = site.name || "Alex Johnson";
  const role = site.role || "Senior Frontend Engineer";
  const resumeUrl = site.resumeUrl || "/resume.pdf"; 
  const previewExp: Exp[] = (experience as Exp[]).slice(0, 2); 

  return (
    <>
      <SEOHead title="Resume" path="/resume" />
      <div className="container-narrow">
        <header className="text-center py-4 py-md-5">
          <h1 className="display-6 fw-bold mb-0 position-relative rs-title">Resume</h1>
        </header>

        <section className="rs-grid">
          <div className="rs-preview fade-in">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h2 className="h4 m-0">Resume Preview</h2>
              <a
                className="rs-download d-inline-flex align-items-center gap-2"
                href={resumeUrl}
                target={resumeUrl.startsWith("#") ? undefined : "_blank"}
                rel="noopener"
              >
                <Download size={18} aria-hidden />
                Download PDF
              </a>
            </div>

            <div className="rs-doc">
              <div className="rs-page">
                <div className="text-center mb-3 pb-3 border-bottom">
                  <h3 className="h5 mb-1">{name}</h3>
                  <p className="text-secondary m-0">{role}</p>
                </div>
                <div className="rs-section">
                  <h4 className="rs-section-title">Experience</h4>
                  {previewExp.map((e) => (
                    <div key={e.id} className="rs-item">
                      <h5 className="mb-1">{e.role}</h5>
                      <div className="company">{e.company}</div>
                      <div className="date">{e.start} – {e.end}</div>
                      <ul className="mb-2">
                        {e.achievements.slice(0, 3).map((a, i) => (
                          <li key={i}>{a}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="rs-section">
                  <h4 className="rs-section-title">Education</h4>
                  {education.map((ed, i) => (
                    <div key={i} className="rs-item">
                      <h5 className="mb-1">{ed.degree}</h5>
                      <div className="company">{ed.school}</div>
                      <div className="date">{ed.dates}</div>
                    </div>
                  ))}
                </div>
                <div className="rs-watermark">PREVIEW</div>
              </div>
            </div>
          </div>
          <div className="rs-info fade-in">
            <h2 className="rs-info-title">My Resume</h2>

            <div className="rs-info-item">
              <div className="rs-info-icon" aria-hidden><FileText size={20} /></div>
              <div>
                <h3 className="h6 m-0">Download Options</h3>
                <p className="text-secondary m-0">Get my complete resume in PDF format</p>
              </div>
            </div>

            <div className="rs-info-item">
              <div className="rs-info-icon" aria-hidden><Briefcase size={20} /></div>
              <div>
                <h3 className="h6 m-0">Experience</h3>
                <p className="text-secondary m-0">
                  {(experience as Exp[]).length}+ roles across frontend & product engineering
                </p>
              </div>
            </div>

            <div className="rs-info-item">
              <div className="rs-info-icon" aria-hidden><GraduationCap size={20} /></div>
              <div>
                <h3 className="h6 m-0">Education</h3>
                <p className="text-secondary m-0">
                  {education[0]?.degree} — {education[0]?.school}
                </p>
              </div>
            </div>

            <h3 className="h6 mt-4">Skills Overview</h3>
            <div className="rs-skill-list">
              {(skills as string[]).map((s) => (
                <span key={s} className="rs-skill">{s}</span>
              ))}
            </div>

            <a
              className="rs-download mt-3 d-inline-flex align-items-center gap-2"
              href={resumeUrl}
              target={resumeUrl.startsWith("#") ? undefined : "_blank"}
              rel="noopener"
            >
              <Download size={18} aria-hidden />
              Download Full Resume
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
