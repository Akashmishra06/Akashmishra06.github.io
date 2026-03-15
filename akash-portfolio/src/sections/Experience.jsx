import React, { memo } from 'react';
import { useReveal } from '../hooks/useReveal';
import { EXPERIENCE, EDUCATION, CERTIFICATIONS } from '../constants/data';
import './Experience.css';

const WorkItem = memo(function WorkItem({ exp }) {
  return (
    <div className="exp-item">
      <div className="exp-item__header">
        <div>
          <h4 className="exp-item__role">{exp.role}</h4>
          <p className="exp-item__company">{exp.company}</p>
        </div>
        <div className="exp-item__meta">
          <span className="exp-item__period">{exp.period}</span>
          <span className="exp-item__type">{exp.type}</span>
        </div>
      </div>
      <ul className="exp-item__points" aria-label="Responsibilities">
        {exp.desc.map((d, i) => (
          <li key={i}>
            <span className="exp-item__bullet" aria-hidden="true">—</span>
            {d}
          </li>
        ))}
      </ul>
      <div className="exp-item__skills" aria-label="Skills used">
        {exp.skills.map(s => <span key={s}>{s}</span>)}
      </div>
    </div>
  );
});

const CertItem = memo(function CertItem({ cert }) {
  return (
    <div className="cert-item">
      <div className="cert-item__left">
        <p className="cert-item__name">{cert.name}</p>
        <p className="cert-item__issuer">{cert.issuer}</p>
        {cert.link && (
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-item__verify"
            aria-label={`Verify ${cert.name} certificate (opens in new tab)`}
          >
            Verify ↗
          </a>
        )}
      </div>
      <span className="cert-item__year">{cert.year}</span>
    </div>
  );
});

export default function Experience() {
  const sectionRef = useReveal(0.1);

  return (
    <section id="experience" className="experience" ref={sectionRef} aria-label="Experience and background">
      <div className="section-divider" aria-hidden="true" />
      <div className="experience__inner container">

        <div className="experience__header reveal">
          <p className="section-label">Career</p>
          <div className="gold-line" aria-hidden="true" />
          <h2 className="experience__heading">
            Experience &amp; <span className="experience__heading-gold">Background</span>
          </h2>
        </div>

        <div className="experience__layout">
          {/* Work */}
          <div className="experience__col reveal">
            <h3 className="experience__col-title">
              <span className="experience__col-icon" aria-hidden="true">◈</span>
              Work History
            </h3>
            {EXPERIENCE.map(exp => (
              <WorkItem key={exp.role} exp={exp} />
            ))}
          </div>

          {/* Sidebar */}
          <div className="experience__sidebar">
            <div className="reveal">
              <h3 className="experience__col-title">
                <span className="experience__col-icon" aria-hidden="true">◈</span>
                Education
              </h3>
              {EDUCATION.map(edu => (
                <div className="edu-item" key={edu.degree}>
                  <p className="edu-item__degree">{edu.degree}</p>
                  <p className="edu-item__school">{edu.school}</p>
                  <p className="edu-item__period">{edu.period}</p>
                  {edu.note && <p className="edu-item__note">{edu.note}</p>}
                </div>
              ))}
            </div>

            <div className="reveal" style={{ transitionDelay: '0.15s' }}>
              <h3 className="experience__col-title experience__col-title--spaced">
                <span className="experience__col-icon" aria-hidden="true">◈</span>
                Certifications
              </h3>
              {CERTIFICATIONS.map(cert => (
                <CertItem key={cert.name} cert={cert} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
