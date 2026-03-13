import { useEffect, useRef, useState } from 'react';
import './Experience.css';

const experiences = [
  {
    company: 'Astraea',
    role: 'SDE Intern',
    date: 'Dec 2025 — Present',
    location: 'New Delhi, India',
    logo: '/assets/astraea-logo.png',
    fallback: 'A',
    points: [
      'Developed browser automation scripts using Python and JavaScript',
      'Building an intelligent agent for ITAT case law extraction',
      'Contributing to backend services and database design',
      'Using Git/GitHub for collaborative development',
    ],
  },
  {
    company: "Leon's Furniture",
    role: 'Desktop Administrator',
    date: 'Aug 2022 — Nov 2025',
    location: 'Toronto, Canada',
    logo: '/assets/leons-logo.png',
    fallback: 'L',
    points: [
      'Reduced major IT infrastructure incidents by 80%',
      'Managed security incident triage and response',
      'Upgraded hardware across 1000+ systems',
      'Maintained Windows and macOS environments',
    ],
  },
];

const Experience = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="experience-section" id="experience" ref={sectionRef}>
      <div className="experience-container">
        <h2 className="experience-title">Experience</h2>

        <div className="experience-timeline">
          {experiences.map((item, index) => (
            <article
              key={`${item.company}-${item.role}`}
              className={`experience-item ${isVisible ? 'is-visible' : ''}`}
              style={{ '--delay': `${index * 120}ms` }}
            >
              <div className="experience-rail">
                <div className="experience-dot" aria-hidden="true">
                  <img
                    src={item.logo}
                    alt={`${item.company} logo`}
                    className="experience-logo"
                    onError={(event) => {
                      event.currentTarget.style.display = 'none';
                      const fallback = event.currentTarget.nextElementSibling;
                      if (fallback) fallback.style.display = 'flex';
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