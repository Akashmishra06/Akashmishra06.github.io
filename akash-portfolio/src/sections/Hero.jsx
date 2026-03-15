import React, { useEffect, useRef, useMemo, memo } from 'react';
import { TICKER_ITEMS, PERSONAL, SOCIAL } from '../constants/data';
import { createParticles, tickParticle } from '../utils/canvas';
import './Hero.css';

// Memoised ticker so it never re-renders after mount
const Ticker = memo(function Ticker() {
  const items = useMemo(() => [...TICKER_ITEMS, ...TICKER_ITEMS], []);
  return (
    <div className="hero__ticker" aria-hidden="true">
      <div className="hero__ticker-track">
        {items.map((item, i) => (
          <span key={i} className="hero__ticker-item">
            {item} <span className="hero__ticker-dot">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
});

// Premium right-side visual: animated terminal card
const HeroVisual = memo(function HeroVisual() {
  return (
    <div className="hero__visual" aria-hidden="true">
      <div className="hero__terminal">
        <div className="hero__terminal-bar">
          <span className="hero__terminal-dot hero__terminal-dot--red"   />
          <span className="hero__terminal-dot hero__terminal-dot--yellow"/>
          <span className="hero__terminal-dot hero__terminal-dot--green" />
          <span className="hero__terminal-title">alpha_engine.py</span>
        </div>
        <div className="hero__terminal-body">
          <div className="hero__terminal-line">
            <span className="t-dim">01</span>
            <span className="t-keyword">import</span>
            <span className="t-text"> numpy </span>
            <span className="t-keyword">as</span>
            <span className="t-text"> np</span>
          </div>
          <div className="hero__terminal-line">
            <span className="t-dim">02</span>
            <span className="t-keyword">import</span>
            <span className="t-text"> pandas </span>
            <span className="t-keyword">as</span>
            <span className="t-text"> pd</span>
          </div>
          <div className="hero__terminal-line t-blank"><span className="t-dim">03</span></div>
          <div className="hero__terminal-line">
            <span className="t-dim">04</span>
            <span className="t-keyword">def</span>
            <span className="t-fn"> generate_alpha</span>
            <span className="t-text">(data):</span>
          </div>
          <div className="hero__terminal-line">
            <span className="t-dim">05</span>
            <span className="t-indent">
              <span className="t-comment"># signal research</span>
            </span>
          </div>
          <div className="hero__terminal-line">
            <span className="t-dim">06</span>
            <span className="t-indent">
              <span className="t-text">signal </span>
              <span className="t-op">=</span>
              <span className="t-text"> backtest(data)</span>
            </span>
          </div>
          <div className="hero__terminal-line">
            <span className="t-dim">07</span>
            <span className="t-indent">
              <span className="t-keyword">return</span>
              <span className="t-gold"> signal</span>
            </span>
          </div>
          <div className="hero__terminal-line t-blank"><span className="t-dim">08</span></div>
          <div className="hero__terminal-line">
            <span className="t-dim">09</span>
            <span className="t-comment"># Sharpe: 2.1 | Drawdown: 4.2%</span>
          </div>
          <div className="hero__terminal-cursor-line">
            <span className="t-dim">10</span>
            <span className="t-prompt">▶</span>
            <span className="hero__terminal-cursor" />
          </div>
        </div>
        <div className="hero__terminal-stats">
          <div className="hero__terminal-stat">
            <span className="hero__terminal-stat-val">2.1</span>
            <span className="hero__terminal-stat-lbl">Sharpe</span>
          </div>
          <div className="hero__terminal-stat-div" />
          <div className="hero__terminal-stat">
            <span className="hero__terminal-stat-val">↓4%</span>
            <span className="hero__terminal-stat-lbl">Max DD</span>
          </div>
          <div className="hero__terminal-stat-div" />
          <div className="hero__terminal-stat">
            <span className="hero__terminal-stat-val">+38%</span>
            <span className="hero__terminal-stat-lbl">CAGR</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      // Recreate on resize to avoid density mismatch
      particles = createParticles(70, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${p.opacity})`;
        ctx.fill();
        tickParticle(p, canvas.width, canvas.height);
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section id="hero" className="hero" aria-label="Introduction">
      <canvas ref={canvasRef} className="hero__canvas" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />

      <div className="hero__layout">
        {/* Left — text content */}
        <div className="hero__content">
          <div className="hero__eyebrow animate-fade-up" role="status">
            <span className="hero__status-dot" aria-hidden="true" />
            <span>Available for opportunities</span>
          </div>

          <h1 className="hero__name animate-fade-up delay-1">
            <span className="hero__name-first">{PERSONAL.nameFirst}</span>
            <br />
            <span className="hero__name-last">{PERSONAL.nameLast}</span>
          </h1>

          <div className="hero__title animate-fade-up delay-2" aria-label={`Role: ${PERSONAL.role}`}>
            <span className="hero__title-bracket" aria-hidden="true">[</span>
            <span>{PERSONAL.role}</span>
            <span className="hero__title-bracket" aria-hidden="true">]</span>
          </div>

          <p className="hero__org animate-fade-up delay-3">
            @ {PERSONAL.company}
          </p>

          <p className="hero__tagline animate-fade-up delay-3">
            {PERSONAL.tagline1}
            <br />
            {PERSONAL.tagline2}
          </p>

          <div className="hero__actions animate-fade-up delay-4">
            <a href="#projects" className="hero__btn hero__btn--primary">
              View Work
            </a>
            <a href="#contact" className="hero__btn hero__btn--ghost">
              Get in Touch
            </a>
            <a
              href={SOCIAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__btn hero__btn--icon"
              aria-label="GitHub profile"
            >
              GH ↗
            </a>
          </div>
        </div>

        {/* Right — premium terminal visual */}
        <HeroVisual />
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>

      <Ticker />
    </section>
  );
}
