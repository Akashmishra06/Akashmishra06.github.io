import React, { useRef, useEffect } from 'react';
import './Experience.css';

const EXPERIENCE = [
  {
    role: 'Quantitative Developer',
    company: 'Mudraksh & McShaw Tech LLP',
    type: 'Full-time',
    period: '2024 — Present',
    location: 'India',
    desc: [
      'Architect and maintain end-to-end algorithmic trading infrastructure spanning signal research, backtesting, and live execution across equity and derivatives markets.',
      'Develop ML-driven alpha models leveraging alternative data, options flow, and microstructure signals — consistently generating positive risk-adjusted returns.',
      'Build and optimise C++ order execution engines with FIX protocol connectivity, reducing order-to-fill latency by over 40%.',
      'Collaborate with portfolio managers and quant researchers to translate research hypotheses into production-grade trading systems.',
      'Implement real-time risk monitoring, VaR computation, and automated circuit breakers for live portfolio management.',
    ],
    skills: ['Python', 'C++', 'Algorithmic Trading', 'ML', 'Risk Management', 'FIX Protocol'],
  },
];

const EDUCATION = [
  {
    degree: 'B.Tech in Information Technology',
    school: 'Noida Institute of Engineering and Technology (NIET), Greater Noida',
    period: '2020 — 2024',
    note: 'Affiliated to Dr. A.P.J. Abdul Kalam Technical University (AKTU)',
  },
];

const CERTIFICATIONS = [
  {
    name: 'Developing Cloud Apps with Node.js and React',
    issuer: 'IBM / Coursera',
    year: '2023',
    link: 'https://coursera.org/verify/GHHNK4XQSV7N',
  },
  {
    name: 'Developing Cloud Native Applications',
    issuer: 'IBM / Coursera',
    year: '2023',
    link: 'https://coursera.org/verify/SY5KUV35CWH5',
  },
  {
    name: 'Introduction to Cloud Computing',
    issuer: 'IBM / Coursera',
    year: '2023',
    link: 'https://coursera.org/verify/7A9H9WFMMTHR',
  },
  {
    name: 'Introduction to NoSQL Databases',
    issuer: 'IBM / Coursera',
    year: '2022',
    link: 'https://coursera.org/verify/QBPX6Y9AU9NQ',
  },
  {
    name: 'Databases and SQL for Data Science with Python',
    issuer: 'IBM / Coursera',
    year: '2021',
    link: 'https://coursera.org/verify/9QYJ2MNKESJW',
  },
];

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view'); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="experience" ref={sectionRef}>
      <div className="experience__inner">
        <div className="experience__header reveal">
          <p className="section-label">Career</p>
          <div className="gold-line" />
          <h2 className="experience__heading">
            Experience &amp; <span className="experience__heading-gold">Background</span>
          </h2>
        </div>

        <div className="experience__layout">
          {/* Work Experience */}
          <div className="experience__col reveal">
            <h3 className="experience__col-title">
              <span className="experience__col-icon">◈</span>
              Work History
            </h3>
            {EXPERIENCE.map((exp) => (
              <div className="exp-item" key={exp.role}>
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
                <ul className="exp-item__points">
                  {exp.desc.map((d, i) => (
                    <li key={i}>
                      <span className="exp-item__bullet">—</span>
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="exp-item__skills">
                  {exp.skills.map(s => <span key={s}>{s}</span>)}
                </div>
              </div>
            ))}
          </div>

          {/* Education & Certs */}
          <div className="experience__sidebar">
            <div className="reveal">
              <h3 className="experience__col-title">
                <span className="experience__col-icon">◈</span>
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
              <h3 className="experience__col-title" style={{ marginTop: '3rem' }}>
                <span className="experience__col-icon">◈</span>
                Certifications
              </h3>
              {CERTIFICATIONS.map(cert => (
                <div className="cert-item" key={cert.name}>
                  <div className="cert-item__left">
                    <p className="cert-item__name">{cert.name}</p>
                    <p className="cert-item__issuer">{cert.issuer}</p>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noreferrer"
                        className="cert-item__verify"
                      >
                        Verify ↗
                      </a>
                    )}
                  </div>
                  <span className="cert-item__year">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
