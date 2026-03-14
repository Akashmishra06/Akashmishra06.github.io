import React, { useRef, useEffect } from 'react';
import './Skills.css';

const SKILL_GROUPS = [
  {
    category: 'Languages',
    icon: '</>',
    skills: [
      { name: 'Python',      level: 95 },
      { name: 'C++',         level: 80 },
      { name: 'SQL',         level: 85 },
      { name: 'R',           level: 70 },
      { name: 'MATLAB',      level: 65 },
    ],
  },
  {
    category: 'Quant Finance',
    icon: '∑',
    skills: [
      { name: 'Algorithmic Trading',    level: 92 },
      { name: 'Options Pricing',        level: 88 },
      { name: 'Risk Management',        level: 85 },
      { name: 'Factor Models',          level: 82 },
      { name: 'Statistical Arbitrage',  level: 78 },
    ],
  },
  {
    category: 'Machine Learning',
    icon: '⌬',
    skills: [
      { name: 'Scikit-learn',     level: 90 },
      { name: 'PyTorch',          level: 75 },
      { name: 'Time-Series ML',   level: 88 },
      { name: 'NLP / Sentiment',  level: 72 },
      { name: 'Reinforcement RL', level: 68 },
    ],
  },
  {
    category: 'Infrastructure',
    icon: '⬡',
    skills: [
      { name: 'pandas / NumPy',  level: 96 },
      { name: 'Apache Kafka',    level: 70 },
      { name: 'PostgreSQL',      level: 82 },
      { name: 'Docker',          level: 75 },
      { name: 'Git / CI-CD',     level: 85 },
    ],
  },
];

function SkillBar({ name, level, delay }) {
  const barRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (barRef.current) barRef.current.style.width = level + '%';
          }, delay);
        }
      },
      { threshold: 0.3 }
    );
    if (barRef.current) observer.observe(barRef.current.parentElement.parentElement);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div className="skill-bar-row">
      <div className="skill-bar-header">
        <span className="skill-name">{name}</span>
        <span className="skill-pct">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div ref={barRef} className="skill-bar-fill" style={{ width: 0, transitionDelay: `${delay}ms` }} />
      </div>
    </div>
  );
}

export default function Skills() {
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
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="skills__inner">
        <div className="skills__header reveal">
          <p className="section-label">Expertise</p>
          <div className="gold-line" />
          <h2 className="skills__heading">
            Technical <span className="skills__heading-gold">Arsenal</span>
          </h2>
          <p className="skills__sub">
            A curated snapshot of the tools and disciplines that power my quantitative work.
          </p>
        </div>

        <div className="skills__grid">
          {SKILL_GROUPS.map(({ category, icon, skills }, gi) => (
            <div className={`skills__card reveal`} key={category} style={{ transitionDelay: `${gi * 0.1}s` }}>
              <div className="skills__card-header">
                <span className="skills__card-icon">{icon}</span>
                <span className="skills__card-cat">{category}</span>
              </div>
              <div className="skills__bars">
                {skills.map(({ name, level }, si) => (
                  <SkillBar key={name} name={name} level={level} delay={si * 80 + gi * 120} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
