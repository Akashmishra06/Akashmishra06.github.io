import React, { useState, useCallback, useEffect } from 'react';
import { useScrolled } from '../hooks/useScrolled';
import { NAV_LINKS, SOCIAL } from '../constants/data';
import { downloadResume } from '../utils/generateResume';
import './Navbar.css';

export default function Navbar() {
  const scrolled  = useScrolled(40);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active,   setActive]   = useState('');

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNav = useCallback((href) => {
    setActive(href);
    setMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => setMenuOpen(v => !v), []);

  return (
    <header role="banner">
      <nav
        className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}
        aria-label="Main navigation"
      >
        <a href="#hero" className="navbar__logo" onClick={() => setActive('')} aria-label="Home">
          <span className="navbar__logo-a" aria-hidden="true">A</span>
          <span className="navbar__logo-m" aria-hidden="true">M</span>
        </a>

        <ul
          className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}
          role="list"
          id="nav-menu"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`navbar__link${active === href ? ' navbar__link--active' : ''}`}
                onClick={() => handleNav(href)}
                aria-current={active === href ? 'page' : undefined}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <button
              className="navbar__resume-btn"
              onClick={downloadResume}
              aria-label="Download resume"
            >
              ⬇ Resume
            </button>
          </li>
          <li>
            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__cta"
              aria-label="View LinkedIn profile (opens in new tab)"
            >
              LinkedIn ↗
            </a>
          </li>
        </ul>

        <button
          className={`navbar__burger${menuOpen ? ' navbar__burger--open' : ''}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </nav>
    </header>
  );
}
