import { useEffect, useRef, useState } from "react";
import astraeaLogo from "../../assets/astraea-logo.png";
import leonsLogo from "../../assets/leons-logo.png";
import "./Experience.css";

const experiences = [
  {
    company: "Astraea",
    role: "SDE Intern",
    date: "Dec 2025 — Present",
    location: "New Delhi, India",
    logo: astraeaLogo,
    fallback: "A",
    points: [
      "Developed browser automation scripts using Python and JavaScript, reducing manual effort and improving workflow efficiency",
      "Built an automation pipeline for ITAT case law extraction using LLM APIs (Gemini) with secure API key handling and captcha solving",
      "Designing an intelligent agent to extract, structure, and manage legal data with a focus on scalability and accuracy",
      "Contributing to end-to-end system development including backend services, database design, and frontend interfaces",
      "Collaborating using Git and GitHub for version control, issue tracking, and team-based development",
    ],
  },
  {
  company: "Leon's Furniture",
  role: "Desktop Administrator",
  date: "Aug 2022 — Nov 2025",
  location: "Toronto, Canada",
  logo: leonsLogo,
  fallback: "L",
  points: [
    "Reduced major IT infrastructure incidents by 80% through proactive monitoring and efficient incident response, including data breach triage and documentation",
    "Led hardware upgrades across 1000+ systems and ensured seamless pin pad functionality across 500+ retail stores via MCM server management",
    "Resolved 90% of desktop and remote support issues across Windows and macOS environments, maintaining high system uptime and security compliance",
  ],
}
];

const Experience = () => {
  const sectionRef = useRef(null);
  const progressRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Scroll reveal animation
  useEffect(() => {
    const node = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.2 }
    );

    if (node) observer.observe(node);

    return () => observer.disconnect();
  }, []);

  // Timeline glow progress animation
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const progress = progressRef.current;

      if (!section || !progress) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const total = rect.height;
      const visible = windowHeight - rect.top;

      const percent = Math.max(0, Math.min(visible / total, 1));

      progress.style.height = `${percent * 100}%`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="experience-section" id="experience" ref={sectionRef}>
      <div className="experience-container">
        <div className="experience-header">
          <h2 className="experience-title">Experience</h2>
        </div>

        <div className={`experience-timeline ${isVisible ? "is-visible" : ""}`}>
          {/* glowing scroll progress line */}
          <div className="timeline-progress" ref={progressRef}></div>

          {experiences.map((item, index) => (
            <article
              key={`${item.company}-${item.role}`}
              className={`experience-item ${isVisible ? "is-visible" : ""}`}
              style={{ "--delay": `${index * 140}ms` }}
            >
              <div className="experience-rail">
                <div className="experience-dot" aria-hidden="true">
                  <img
                    src={item.logo}
                    alt={`${item.company} logo`}
                    className="experience-logo"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                      const fallback =
                        event.currentTarget.nextElementSibling;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  <span className="experience-logo-fallback">
                    {item.fallback}
                  </span>
                </div>
              </div>

              <div className="experience-card">
                <div className="experience-card-header">
                  <h3 className="experience-role">{item.role}</h3>
                  <p className="experience-company">{item.company}</p>
                  <p className="experience-meta">
                    {item.date} <span>•</span> {item.location}
                  </p>
                </div>

                <ul className="experience-points">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;