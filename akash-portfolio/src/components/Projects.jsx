import React, { useRef, useEffect, useState } from 'react';
import './Projects.css';

const PROJECTS = [
  {
    id: '01',
    title: 'Alpha Signal Engine',
    category: 'Algorithmic Trading',
    description:
      'A modular Python framework for researching, backtesting, and deploying multi-factor alpha signals. Integrates live market data, risk overlays, and execution logic with a pluggable architecture.',
    stack: ['Python', 'pandas', 'NumPy', 'PostgreSQL', 'Redis'],
    highlights: ['Sharpe ratio > 2.1 in backtests', 'Sub-millisecond signal latency', 'Live paper-trading integration'],
    status: 'Production',
  },
  {
    id: '02',
    title: 'ML Options Pricer',
    category: 'Financial Modelling',
    description:
      'Ensemble ML model combining Gradient Boosting and LSTM networks to price exotic options, outperforming Black-Scholes on illiquid instruments by calibrating to real-time implied volatility surfaces.',
    stack: ['Python', 'PyTorch', 'scikit-learn', 'QuantLib', 'Jupyter'],
    highlights: ['10% lower RMSE vs Black-Scholes', 'Real-time IV surface calibration', 'Greeks computed via AutoDiff'],
    status: 'Research',
  },
  {
    id: '03',
    title: 'Order Book Analytics',
    category: 'Market Microstructure',
    description:
      'High-performance C++ order book reconstruction and analytics engine. Processes Level 2 data to extract microstructure signals including order flow imbalance, depth ratios, and trade toxicity metrics.',
    stack: ['C++17', 'Boost', 'FIX Protocol', 'Kafka', 'Grafana'],
    highlights: ['Processes 1M+ events/sec', 'Real-time depth visualisation', 'Toxicity-adjusted execution'],
    status: 'Production',
  },
  {
    id: '04',
    title: 'Portfolio Risk Dashboard',
    category: 'Risk Management',
    description:
      'Interactive risk monitoring system computing VaR, CVaR, factor exposures, and stress scenarios across a multi-asset portfolio. Integrates with prime brokerage APIs for live P&L attribution.',
    stack: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Docker'],
    highlights: ['Monte Carlo VaR (10K simulations)', 'Factor attribution (Barra-style)', 'Live PnL streaming'],
    status: 'Production',
  },
  {
    id: '05',
    title: 'NLP Earnings Analyser',
    category: 'Machine Learning',
    description:
      'Transformer-based NLP pipeline that extracts sentiment, uncertainty, and forward guidance signals from earnings call transcripts and SEC filings, generating predictive features for equity strategies.',
    stack: ['Python', 'HuggingFace', 'spaCy', 'SEC EDGAR API', 'Airflow'],
    highlights: ['Fine-tuned FinBERT model', 'IC of 0.08 on 1-month returns', 'Daily batch + event-driven modes'],
    status: 'Research',
  },
  {
    id: '06',
    title: 'Volatility Regime Detector',
    category: 'Statistical Models',
    description:
      'Hidden Markov Model + Regime-Switching GARCH system that classifies market regimes in real time, dynamically adjusting portfolio parameters, position sizing, and hedge ratios across detected states.',
    stack: ['Python', 'hmmlearn', 'arch', 'statsmodels', 'Plotly'],
    highlights: ['4-state HMM (Bull/Bear/Crisis/Calm)', 'Adaptive position sizing', '15% drawdown reduction in backtest'],
    status: 'Live',
  },
];

const STATUS_COLOR = { Production: '#4ade80', Research: '#f59e0b', Live: '#22d3ee' };

export default function Projects() {
  const sectionRef = useRef(null);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view'); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="projects__inner">
        <div className="projects__header reveal">
          <p className="section-label">Portfolio</p>
          <div className="gold-line" />
          <h2 className="projects__heading">
            Selected <span className="projects__heading-gold">Work</span>
          </h2>
          <p className="projects__sub">
            A selection of quantitative systems, research tools, and trading infrastructure I've built.
          </p>
        </div>

        <div className="projects__grid">
          {PROJECTS.map((proj, i) => (
            <div
              key={proj.id}
              className={`proj-card reveal ${expanded === proj.id ? 'proj-card--expanded' : ''}`}
              style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
              onClick={() => setExpanded(v => v === proj.id ? null : proj.id)}
            >
              <div className="proj-card__top">
                <span className="proj-card__id">{proj.id}</span>
                <span
                  className="proj-card__status"
                  style={{ color: STATUS_COLOR[proj.status] }}
                >
                  <span className="proj-card__status-dot" style={{ background: STATUS_COLOR[proj.status] }} />
                  {proj.status}
                </span>
              </div>

              <p className="proj-card__cat">{proj.category}</p>
              <h3 className="proj-card__title">{proj.title}</h3>
              <p className="proj-card__desc">{proj.description}</p>

              <div className="proj-card__stack">
                {proj.stack.map(s => <span key={s} className="proj-card__tag">{s}</span>)}
              </div>

              {expanded === proj.id && (
                <div className="proj-card__highlights">
                  <p className="proj-card__hl-label">Key Highlights</p>
                  <ul>
                    {proj.highlights.map(h => (
                      <li key={h}><span className="proj-card__hl-bullet">◆</span>{h}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="proj-card__expand">
                {expanded === proj.id ? '— Collapse' : '+ Details'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
