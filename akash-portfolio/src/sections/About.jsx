import React, { memo } from 'react';
import { useReveal } from '../hooks/useReveal';
import { ABOUT_STATS, ABOUT_TAGS, PERSONAL } from '../constants/data';
import './About.css';

const StatCard = memo(function StatCard({ value, label }) {
  return (
    <div className="about__stat">
      <span className="about__stat-value" aria-label={`${value} ${label}`}>{value}</span>
      <span className="about__stat-label" aria-hidden="true">{label}</span>
    </div>
  );
});

export default function About() {
  const sectionRef = useReveal(0.15);

  return (
    <section id="about" className="about" ref={sectionRef} aria-label="About me">
      <div className="section-divider" aria-hidden="true" />
      <div className="about__inner container">

        {/* Left column */}
        <div className="about__left reveal">
          <p className="section-label">About Me</p>
          <div className="gold-line" aria-hidden="true" />
          <h2 className="about__heading">
            Quantitative<br />
            <span className="about__heading-gold">Developer</span>
          </h2>
          <div className="about__portrait" role="img" aria-label="Akash Mishra initials monogram">
            <div className="about__portrait-placeholder">
              <span aria-hidden="true">{PERSONAL.initials}</span>
              <div className="about__portrait-border" aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="about__right">
          <div className="about__bio reveal">
            <p>
              I'm a Quantitative Developer at <strong>{PERSONAL.company}</strong>,
              a leading quant firm where I architect and deploy algorithmic trading systems
              operating at the intersection of mathematics, statistics, and software engineering.
            </p>
            <p>
              My work spans the full quantitative pipeline — from <strong>signal research</strong> and{' '}
              <strong>strategy development</strong> to <strong>backtesting infrastructure</strong> and{' '}
              <strong>live execution systems</strong>. I build tools that transform raw market data
              into actionable alpha.
            </p>
            <p>
              With deep expertise in <strong>Python</strong>, <strong>React</strong>, and <strong>Flask</strong>,
              I design systems capable of processing high-frequency data, executing complex
              ML-driven strategies, and managing portfolio risk in real time — backed by <strong>MongoDB</strong> for
              scalable data persistence.
            </p>
          </div>

          <div className="about__stats reveal" role="list" aria-label="Career highlights">
            {ABOUT_STATS.map(({ value, label }) => (
              <StatCard key={label} value={value} label={label} />
            ))}
          </div>

          <div className="about__tags reveal" aria-label="Areas of expertise">
            {ABOUT_TAGS.map(tag => (
              <span className="about__tag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
