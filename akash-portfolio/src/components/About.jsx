import React, { useRef, useEffect } from 'react';
import './About.css';

const STATS = [
  { value: '3+', label: 'Years in Quant Finance' },
  { value: '10+', label: 'Trading Strategies Built' },
  { value: '∞',  label: 'Lines of Python Written' },
  { value: '↑',  label: 'Consistent Alpha Generation' },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('in-view');
        });
      },
      { threshold: 0.15 }
    );
    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    reveals?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about__inner">
        <div className="about__left reveal">
          <p className="section-label">About Me</p>
          <div className="gold-line" />
          <h2 className="about__heading">
            Quantitative<br />
            <span className="about__heading-gold">Developer</span>
          </h2>
          <div className="about__portrait">
            <div className="about__portrait-placeholder">
              <span>AM</span>
              <div className="about__portrait-border" />
            </div>
          </div>
        </div>

        <div className="about__right">
          <div className="about__bio reveal">
            <p>
              I'm a Quantitative Developer at <strong>Mudraksh &amp; McShaw Tech LLP</strong>, 
              a leading quant firm where I architect and deploy algorithmic trading systems that 
              operate at the intersection of mathematics, statistics, and software engineering.
            </p>
            <p>
              My work spans the full quantitative pipeline — from <strong>signal research</strong> 
              and <strong>strategy development</strong> to <strong>backtesting infrastructure</strong> 
              and <strong>live execution systems</strong>. I build tools that transform raw market data 
              into actionable alpha.
            </p>
            <p>
              With deep expertise in <strong>Python</strong> and <strong>C++</strong>, I design 
              low-latency systems capable of processing high-frequency data, executing complex 
              ML-driven strategies, and managing portfolio risk in real time.
            </p>
          </div>

          <div className="about__stats reveal">
            {STATS.map(({ value, label }) => (
              <div className="about__stat" key={label}>
                <span className="about__stat-value">{value}</span>
                <span className="about__stat-label">{label}</span>
              </div>
            ))}
          </div>

          <div className="about__tags reveal">
            {['Derivatives Pricing', 'Portfolio Optimisation', 'Market Microstructure',
              'Statistical Arbitrage', 'Factor Modelling', 'Options Greeks',
              'Monte Carlo Simulation', 'Stochastic Calculus'].map(tag => (
              <span className="about__tag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
