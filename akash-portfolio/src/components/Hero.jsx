import React, { useEffect, useRef } from 'react';
import './Hero.css';

const TICKER_ITEMS = [
  'ALGORITHMIC TRADING', 'QUANTITATIVE RESEARCH', 'PYTHON', 'C++',
  'MACHINE LEARNING', 'FINANCIAL MODELLING', 'DERIVATIVES', 'STATISTICAL ARBITRAGE',
  'RISK MANAGEMENT', 'BACKTESTING', 'HIGH FREQUENCY TRADING', 'ALPHA GENERATION',
];

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create particle grid
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.3,
        speed: Math.random() * 0.3 + 0.1,
        opacity: Math.random() * 0.4 + 0.05,
        drift: (Math.random() - 0.5) * 0.2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${p.opacity})`;
        ctx.fill();
        p.y -= p.speed;
        p.x += p.drift;
        if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(animId); };
  }, []);

  return (
    <section id="hero" className="hero">
      <canvas ref={canvasRef} className="hero__canvas" />

      {/* Grid overlay */}
      <div className="hero__grid" />

      <div className="hero__content">
        <div className="hero__eyebrow animate-fade-up">
          <span className="hero__status-dot" />
          <span>Available for opportunities</span>
        </div>

        <h1 className="hero__name animate-fade-up delay-1">
          <span className="hero__name-first">Akash</span>
          <br />
          <span className="hero__name-last">Mishra</span>
        </h1>

        <div className="hero__title animate-fade-up delay-2">
          <span className="hero__title-bracket">[</span>
          <span>Quantitative Developer</span>
          <span className="hero__title-bracket">]</span>
        </div>

        <p className="hero__org animate-fade-up delay-3">
          @ Mudraksh &amp; McShaw Tech LLP
        </p>

        <p className="hero__tagline animate-fade-up delay-3">
          Building the intersection of mathematics, markets, and machines.
          <br />Turning alpha into code, and code into returns.
        </p>

        <div className="hero__actions animate-fade-up delay-4">
          <a href="#projects" className="hero__btn hero__btn--primary">View Work</a>
          <a href="#contact" className="hero__btn hero__btn--ghost">Get in Touch</a>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>

      {/* Ticker */}
      <div className="hero__ticker">
        <div className="hero__ticker-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="hero__ticker-item">
              {item} <span className="hero__ticker-dot">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
