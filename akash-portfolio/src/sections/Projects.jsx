import React, { useState, useCallback, memo } from 'react';
import { useReveal } from '../hooks/useReveal';
import { PROJECTS, STATUS_COLOR } from '../constants/data';
import './Projects.css';

const ProjectCard = memo(function ProjectCard({ proj, isExpanded, onToggle }) {
  const statusColor = STATUS_COLOR[proj.status] ?? '#888';

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle(proj.id);
    }
  }, [proj.id, onToggle]);

  return (
    <article
      className={`proj-card reveal${isExpanded ? ' proj-card--expanded' : ''}`}
      style={{ transitionDelay: `${(parseInt(proj.id, 10) % 3) * 0.08}s` }}
      onClick={() => onToggle(proj.id)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-expanded={isExpanded}
      aria-label={`${proj.title} — ${proj.category}. Click to ${isExpanded ? 'collapse' : 'expand'} details.`}
    >
      <div className="proj-card__top">
        <span className="proj-card__id" aria-hidden="true">{proj.id}</span>
        <span
          className="proj-card__status"
          style={{ color: statusColor }}
          aria-label={`Status: ${proj.status}`}
        >
          <span
            className="proj-card__status-dot"
            style={{ background: statusColor }}
            aria-hidden="true"
          />
          {proj.status}
        </span>
      </div>

      <p className="proj-card__cat">{proj.category}</p>
      <h3 className="proj-card__title">{proj.title}</h3>
      <p className="proj-card__desc">{proj.description}</p>

      <div className="proj-card__stack" aria-label="Tech stack">
        {proj.stack.map(s => (
          <span key={s} className="proj-card__tag">{s}</span>
        ))}
      </div>

      {isExpanded && (
        <div className="proj-card__highlights" aria-live="polite">
          <p className="proj-card__hl-label">Key Highlights</p>
          <ul>
            {proj.highlights.map(h => (
              <li key={h}>
                <span className="proj-card__hl-bullet" aria-hidden="true">◆</span>
                {h}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="proj-card__expand" aria-hidden="true">
        {isExpanded ? '— Collapse' : '+ Details'}
      </div>
    </article>
  );
});

export default function Projects() {
  const sectionRef = useReveal(0.1);
  const [expanded, setExpanded] = useState(null);

  const handleToggle = useCallback((id) => {
    setExpanded(prev => prev === id ? null : id);
  }, []);

  return (
    <section id="projects" className="projects" ref={sectionRef} aria-label="Projects">
      <div className="section-divider" aria-hidden="true" />
      <div className="projects__inner container">
        <div className="projects__header reveal">
          <p className="section-label">Portfolio</p>
          <div className="gold-line" aria-hidden="true" />
          <h2 className="projects__heading">
            Selected <span className="projects__heading-gold">Work</span>
          </h2>
          <p className="projects__sub">
            A selection of quantitative systems, research tools, and trading infrastructure I've built.
          </p>
        </div>

        <div className="projects__grid">
          {PROJECTS.map(proj => (
            <ProjectCard
              key={proj.id}
              proj={proj}
              isExpanded={expanded === proj.id}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
