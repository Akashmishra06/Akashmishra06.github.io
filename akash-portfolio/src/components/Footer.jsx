import React from 'react';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__left">
          <span className="footer__logo">
            <span className="footer__logo-a">A</span>
            <span className="footer__logo-m">M</span>
          </span>
          <span className="footer__name">Akash Mishra</span>
          <span className="footer__role">Quantitative Developer · Mudraksh &amp; McShaw Tech LLP</span>
        </div>

        <div className="footer__center">
          <div className="footer__ticker-line">
            {['PYTHON', 'C++', 'REACT', 'FLASK', 'MONGODB', 'ALGO TRADING', 'ML', 'REAL-TIME RMS', 'BACKTESTING'].map((t, i) => (
              <span key={i}>{t} <span className="footer__dot">◆</span></span>
            ))}
          </div>
        </div>

        <div className="footer__right">
          <a href="https://linkedin.com/in/akashmishra0601" target="_blank" rel="noreferrer" className="footer__social">LI</a>
          <a href="https://github.com/Akashmishra06"         target="_blank" rel="noreferrer" className="footer__social">GH</a>
          <a href="https://leetcode.com/u/AkashMishra06/"    target="_blank" rel="noreferrer" className="footer__social">LC</a>
          <a href="mailto:akashmishra.py@gmail.com"           className="footer__social">✉</a>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {year} Akash Mishra. All rights reserved.</span>
        <span className="footer__built">Built with React · Deployed on GitHub Pages</span>
      </div>
    </footer>
  );
}
