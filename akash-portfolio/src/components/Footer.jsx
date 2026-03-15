import React, { memo } from 'react';
import { PERSONAL, SOCIAL, FOOTER_SKILLS } from '../constants/data';
import './Footer.css';

const YEAR = new Date().getFullYear();

export default memo(function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner container">
        <div className="footer__left">
          <span className="footer__logo" aria-label={`${PERSONAL.name} logo`}>
            <span className="footer__logo-a" aria-hidden="true">A</span>
            <span className="footer__logo-m" aria-hidden="true">M</span>
          </span>
          <span className="footer__name">{PERSONAL.name}</span>
          <span className="footer__role">{PERSONAL.role} · {PERSONAL.company}</span>
        </div>

        <div className="footer__center" aria-hidden="true">
          <div className="footer__ticker-line">
            {FOOTER_SKILLS.map((t, i) => (
              <span key={i}>{t} <span className="footer__dot">◆</span></span>
            ))}
          </div>
        </div>

        <nav className="footer__right" aria-label="Social links">
          <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer"
             className="footer__social" aria-label="LinkedIn profile">LI</a>
          <a href={SOCIAL.github}   target="_blank" rel="noopener noreferrer"
             className="footer__social" aria-label="GitHub profile">GH</a>
          <a href={SOCIAL.leetcode} target="_blank" rel="noopener noreferrer"
             className="footer__social" aria-label="LeetCode profile">LC</a>
          <a href={SOCIAL.email}
             className="footer__social" aria-label="Send email">✉</a>
        </nav>
      </div>

      <div className="footer__bottom container">
        <span>© {YEAR} {PERSONAL.name}. All rights reserved.</span>
        <span className="footer__built">Built with React · Deployed on GitHub Pages</span>
      </div>
    </footer>
  );
});
