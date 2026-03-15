import React, { useEffect, useRef, memo, useCallback } from 'react';
import { useReveal } from '../hooks/useReveal';
import { SKILL_GROUPS } from '../constants/data';
import './Skills.css';

// Each bar animates only once when it enters the viewport
const SkillBar = memo(function SkillBar({ name, level, delay }) {
  const barRef  = useRef(null);
  const rowRef  = useRef(null);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (barRef.current) barRef.current.style.width = `${level}%`;
          }, delay);
          observer.unobserve(row);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(row);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div className="skill-bar-row" ref={rowRef}>
      <div className="skill-bar-header">
        <span className="skill-name">{name}</span>
        <span className="skill-pct" aria-hidden="true">{level}%</span>
      </div>
      <div
        className="skill-bar-track"
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name}: ${level}%`}
      >
        <div
          ref={barRef}
          className="skill-bar-fill"
          style={{ width: 0, transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  );
});

const SkillCard = memo(function SkillCard({ category, icon, skills, groupIndex }) {
  return (
    <div
      className="skills__card reveal"
      style={{ transitionDelay: `${groupIndex * 0.1}s` }}
    >
      <div className="skills__card-header">
        <span className="skills__card-icon" aria-hidden="true">{icon}</span>
        <span className="skills__card-cat">{category}</span>
      </div>
      <div className="skills__bars">
        {skills.map(({ name, level }, si) => (
          <SkillBar
            key={name}
            name={name}
            level={level}
            delay={si * 80 + groupIndex * 120}
          />
        ))}
      </div>
    </div>
  );
});

export default function Skills() {
  const sectionRef = useReveal(0.1);

  return (
    <section id="skills" className="skills" ref={sectionRef} aria-label="Technical skills">
      <div className="section-divider" aria-hidden="true" />
      <div className="skills__inner container">
        <div className="skills__header reveal">
          <p className="section-label">Expertise</p>
          <div className="gold-line" aria-hidden="true" />
          <h2 className="skills__heading">
            Technical <span className="skills__heading-gold">Arsenal</span>
          </h2>
          <p className="skills__sub">
            A curated snapshot of the tools and disciplines that power my quantitative work.
          </p>
        </div>

        <div className="skills__grid" role="list">
          {SKILL_GROUPS.map((group, gi) => (
            <SkillCard
              key={group.category}
              {...group}
              groupIndex={gi}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
