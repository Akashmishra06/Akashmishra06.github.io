// ─────────────────────────────────────────────────────────────
//  All static site data lives here.
//  Edit this file to update content across the entire site.
// ─────────────────────────────────────────────────────────────

export const PERSONAL = {
  name: 'Akash Mishra',
  nameFirst: 'Akash',
  nameLast: 'Mishra',
  initials: 'AM',
  role: 'Quantitative Developer',
  company: 'Mudraksh & McShaw Tech LLP',
  email: 'akashmishra.py@gmail.com',
  tagline1: 'Building the intersection of mathematics, markets, and machines.',
  tagline2: 'Turning alpha into code, and code into returns.',
};

export const SOCIAL = {
  linkedin: 'https://linkedin.com/in/akashmishra0601',
  github:   'https://github.com/Akashmishra06',
  leetcode: 'https://leetcode.com/u/AkashMishra06/',
  email:    'mailto:akashmishra.py@gmail.com',
};

export const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
];

export const TICKER_ITEMS = [
  'ALGORITHMIC TRADING', 'QUANTITATIVE RESEARCH', 'PYTHON', 'C++',
  'MACHINE LEARNING', 'FINANCIAL MODELLING', 'DERIVATIVES', 'STATISTICAL ARBITRAGE',
  'RISK MANAGEMENT', 'BACKTESTING', 'HIGH FREQUENCY TRADING', 'ALPHA GENERATION',
];

export const ABOUT_STATS = [
  { value: '1+',  label: 'Years in Quant Finance' },
  { value: '10+', label: 'Trading Strategies Built' },
  { value: '∞',   label: 'Lines of Python Written' },
  { value: '↑',   label: 'Consistent Alpha Generation' },
];

export const ABOUT_TAGS = [
  'Derivatives Pricing', 'Portfolio Optimisation', 'Market Microstructure',
  'Statistical Arbitrage', 'Factor Modelling', 'Options Greeks',
  'Monte Carlo Simulation', 'Stochastic Calculus',
];

export const SKILL_GROUPS = [
  {
    category: 'Languages',
    icon: '</>',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'C++',    level: 80 },
      { name: 'SQL',    level: 85 },
      { name: 'R',      level: 70 },
      { name: 'MATLAB', level: 65 },
    ],
  },
  {
    category: 'Quant Finance',
    icon: '∑',
    skills: [
      { name: 'Algorithmic Trading',   level: 92 },
      { name: 'Options Pricing',       level: 88 },
      { name: 'Risk Management',       level: 85 },
      { name: 'Factor Models',         level: 82 },
      { name: 'Statistical Arbitrage', level: 78 },
    ],
  },
  {
    category: 'Machine Learning',
    icon: '⌬',
    skills: [
      { name: 'Scikit-learn',     level: 90 },
      { name: 'PyTorch',          level: 75 },
      { name: 'Time-Series ML',   level: 88 },
      { name: 'NLP / Sentiment',  level: 72 },
      { name: 'Reinforcement RL', level: 68 },
    ],
  },
  {
    category: 'Infrastructure',
    icon: '⬡',
    skills: [
      { name: 'pandas / NumPy', level: 96 },
      { name: 'Apache Kafka',   level: 70 },
      { name: 'PostgreSQL',     level: 82 },
      { name: 'Docker',         level: 75 },
      { name: 'Git / CI-CD',    level: 85 },
    ],
  },
];

export const STATUS_COLOR = {
  Production: '#4ade80',
  Research:   '#f59e0b',
  Live:       '#22d3ee',
};

export const PROJECTS = [
  {
    id: '01',
    title: 'Alpha Signal Engine',
    category: 'Algorithmic Trading',
    description: 'A modular Python framework for researching, backtesting, and deploying multi-factor alpha signals. Integrates live market data, risk overlays, and execution logic with a pluggable architecture.',
    stack: ['Python', 'pandas', 'NumPy', 'PostgreSQL', 'Redis'],
    highlights: ['Sharpe ratio > 2.1 in backtests', 'Sub-millisecond signal latency', 'Live paper-trading integration'],
    status: 'Production',
  },
  {
    id: '02',
    title: 'ML Options Pricer',
    category: 'Financial Modelling',
    description: 'Ensemble ML model combining Gradient Boosting and LSTM networks to price exotic options, outperforming Black-Scholes on illiquid instruments by calibrating to real-time implied volatility surfaces.',
    stack: ['Python', 'PyTorch', 'scikit-learn', 'QuantLib', 'Jupyter'],
    highlights: ['10% lower RMSE vs Black-Scholes', 'Real-time IV surface calibration', 'Greeks computed via AutoDiff'],
    status: 'Research',
  },
  {
    id: '03',
    title: 'Order Book Analytics',
    category: 'Market Microstructure',
    description: 'High-performance C++ order book reconstruction and analytics engine. Processes Level 2 data to extract microstructure signals including order flow imbalance, depth ratios, and trade toxicity metrics.',
    stack: ['C++17', 'Boost', 'FIX Protocol', 'Kafka', 'Grafana'],
    highlights: ['Processes 1M+ events/sec', 'Real-time depth visualisation', 'Toxicity-adjusted execution'],
    status: 'Production',
  },
  {
    id: '04',
    title: 'Portfolio Risk Dashboard',
    category: 'Risk Management',
    description: 'Interactive risk monitoring system computing VaR, CVaR, factor exposures, and stress scenarios across a multi-asset portfolio. Integrates with prime brokerage APIs for live P&L attribution.',
    stack: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Docker'],
    highlights: ['Monte Carlo VaR (10K simulations)', 'Factor attribution (Barra-style)', 'Live PnL streaming'],
    status: 'Production',
  },
  {
    id: '05',
    title: 'NLP Earnings Analyser',
    category: 'Machine Learning',
    description: 'Transformer-based NLP pipeline that extracts sentiment, uncertainty, and forward guidance signals from earnings call transcripts and SEC filings, generating predictive features for equity strategies.',
    stack: ['Python', 'HuggingFace', 'spaCy', 'SEC EDGAR API', 'Airflow'],
    highlights: ['Fine-tuned FinBERT model', 'IC of 0.08 on 1-month returns', 'Daily batch + event-driven modes'],
    status: 'Research',
  },
  {
    id: '06',
    title: 'Volatility Regime Detector',
    category: 'Statistical Models',
    description: 'Hidden Markov Model + Regime-Switching GARCH system that classifies market regimes in real time, dynamically adjusting portfolio parameters, position sizing, and hedge ratios across detected states.',
    stack: ['Python', 'hmmlearn', 'arch', 'statsmodels', 'Plotly'],
    highlights: ['4-state HMM (Bull/Bear/Crisis/Calm)', 'Adaptive position sizing', '15% drawdown reduction in backtest'],
    status: 'Live',
  },
];

export const EXPERIENCE = [
  {
    role: 'Quantitative Developer',
    company: 'Mudraksh & McShaw Tech LLP',
    type: 'Full-time',
    period: '2024 — Present',
    location: 'India',
    desc: [
      'Architect and maintain end-to-end algorithmic trading infrastructure spanning signal research, backtesting, and live execution across equity and derivatives markets.',
      'Develop ML-driven alpha models leveraging alternative data, options flow, and microstructure signals — consistently generating positive risk-adjusted returns.',
      'Build and optimise C++ order execution engines with FIX protocol connectivity, reducing order-to-fill latency by over 40%.',
      'Collaborate with portfolio managers and quant researchers to translate research hypotheses into production-grade trading systems.',
      'Implement real-time risk monitoring, VaR computation, and automated circuit breakers for live portfolio management.',
    ],
    skills: ['Python', 'C++', 'Algorithmic Trading', 'ML', 'Risk Management', 'FIX Protocol'],
  },
];

export const EDUCATION = [
  {
    degree: 'B.Tech in Information Technology',
    school: 'Noida Institute of Engineering and Technology (NIET), Greater Noida',
    period: '2020 — 2024',
    note: 'Affiliated to Dr. A.P.J. Abdul Kalam Technical University (AKTU)',
  },
];

export const CERTIFICATIONS = [
  { name: 'Developing Cloud Apps with Node.js and React',  issuer: 'IBM / Coursera', year: '2023', link: 'https://coursera.org/verify/GHHNK4XQSV7N' },
  { name: 'Developing Cloud Native Applications',          issuer: 'IBM / Coursera', year: '2023', link: 'https://coursera.org/verify/SY5KUV35CWH5' },
  { name: 'Introduction to Cloud Computing',               issuer: 'IBM / Coursera', year: '2023', link: 'https://coursera.org/verify/7A9H9WFMMTHR' },
  { name: 'Introduction to NoSQL Databases',               issuer: 'IBM / Coursera', year: '2022', link: 'https://coursera.org/verify/QBPX6Y9AU9NQ' },
  { name: 'Databases and SQL for Data Science with Python',issuer: 'IBM / Coursera', year: '2021', link: 'https://coursera.org/verify/9QYJ2MNKESJW' },
];

export const CONTACT_LINKS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/akashmishra0601', icon: '↗', note: 'linkedin.com/in/akashmishra0601' },
  { label: 'GitHub',   href: 'https://github.com/Akashmishra06',         icon: '↗', note: 'github.com/Akashmishra06' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/AkashMishra06/',    icon: '↗', note: 'leetcode.com/u/AkashMishra06' },
  { label: 'Email',    href: 'mailto:akashmishra.py@gmail.com',          icon: '✉', note: 'akashmishra.py@gmail.com' },
];

export const FOOTER_SKILLS = [
  'PYTHON', 'C++', 'REACT', 'FLASK', 'MONGODB',
  'ALGO TRADING', 'ML', 'REAL-TIME RMS', 'BACKTESTING',
];
