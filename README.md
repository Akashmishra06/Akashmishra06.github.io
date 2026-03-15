<div align="center">

# Akash Mishra — Portfolio

### Quantitative Developer · Mudraksh & McShaw Tech LLP

[![Live](https://img.shields.io/badge/🌐%20Live%20Site-Akashmishra06.github.io-C9A84C?style=for-the-badge)](https://Akashmishra06.github.io)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-222?style=for-the-badge&logo=github)](https://pages.github.com)
[![EmailJS](https://img.shields.io/badge/EmailJS-Contact%20Form-C9A84C?style=for-the-badge)](https://emailjs.com)

</div>

---

## Project Overview

Production-grade personal portfolio for **Akash Mishra**, Quantitative Developer at Mudraksh & McShaw Tech LLP. Built with React 18, deployed on GitHub Pages, featuring code splitting, lazy-loaded sections, a premium terminal visual in the hero, and a fully functional contact form powered by EmailJS — with zero backend and zero exposed credentials.

**Live:** https://Akashmishra06.github.io

---

## Features

- ⚡ **Code splitting** via `React.lazy` + `Suspense` — only Hero & Navbar load on first paint
- 🎨 **Premium Hero** — animated particle canvas + syntax-highlighted terminal card with live quant stats
- 📱 **Fully responsive** — mobile, tablet, iPad, laptop, ultra-wide (320px → 2560px)
- 📧 **EmailJS contact form** — sends directly to Gmail, no backend needed, credentials stored in `.env`
- 🔍 **SEO-optimised** — Open Graph, Twitter cards, JSON-LD structured data, canonical URL
- ♿ **Accessible** — semantic HTML, ARIA labels, keyboard navigation, skip-to-content link, `prefers-reduced-motion`
- 🏎 **Performance** — `IntersectionObserver` with `unobserve` after trigger, passive scroll listeners, `will-change` only where needed
- 🏗 **Clean architecture** — constants, hooks, utils, styles, sections all separated

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 (Create React App) |
| Styling | Vanilla CSS · CSS Custom Properties · CSS Grid · Flexbox |
| Fonts | Cormorant Garamond · DM Mono · Syne (Google Fonts) |
| Animations | IntersectionObserver · CSS keyframes · HTML5 Canvas |
| Email | EmailJS (`@emailjs/browser`) |
| Deployment | GitHub Pages via `gh-pages` |

---

## Folder Structure

```
akash-portfolio/
├── public/
│   └── index.html              ← SEO, OG tags, JSON-LD, Google Fonts
│
├── src/
│   ├── constants/
│   │   └── data.js             ← All site content in one place (edit here)
│   │
│   ├── hooks/
│   │   ├── useReveal.js        ← IntersectionObserver scroll-reveal (shared)
│   │   └── useScrolled.js      ← Passive scroll position hook
│   │
│   ├── utils/
│   │   └── canvas.js           ← Particle animation helpers
│   │
│   ├── styles/
│   │   ├── variables.css       ← All CSS custom properties / design tokens
│   │   └── global.css          ← Reset, base styles, shared utilities, animations
│   │
│   ├── components/             ← UI pieces used across sections
│   │   ├── Navbar.jsx / .css
│   │   └── Footer.jsx / .css
│   │
│   ├── sections/               ← Full page sections (lazy-loaded except Hero)
│   │   ├── Hero.jsx / .css
│   │   ├── About.jsx / .css
│   │   ├── Skills.jsx / .css
│   │   ├── Projects.jsx / .css
│   │   ├── Experience.jsx / .css
│   │   └── Contact.jsx / .css
│   │
│   ├── App.js                  ← Route/layout, lazy imports, Suspense
│   ├── App.css
│   └── index.js                ← Entry point
│
├── .env                        ← ❌ NOT committed — your real EmailJS keys
├── .env.example                ← ✅ Committed — placeholder template
├── .gitignore
├── package.json
├── DEPLOY.md                   ← GitHub Pages deployment guide
└── EMAILJS_SETUP.md            ← EmailJS setup guide
```

---

## Installation

```bash
# 1. Clone
git clone https://github.com/Akashmishra06/Akashmishra06.github.io.git
cd Akashmishra06.github.io/akash-portfolio

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Open .env and fill in your EmailJS credentials
```

---

## Local Development

```bash
npm start
# → http://localhost:3000
```

The contact form shows an error message (not a crash) if `.env` credentials are missing — this is intentional so the rest of the site works perfectly during development without EmailJS set up.

---

## Build & Deploy

```bash
# Build production bundle
npm run build

# Deploy to GitHub Pages (runs build first automatically)
npm run deploy
# → Live at https://Akashmishra06.github.io
```

Full step-by-step guide: see [`DEPLOY.md`](akash-portfolio/DEPLOY.md)

---

## Environment Variables

This project uses **Create React App**. All env vars must start with `REACT_APP_`.

```env
# akash-portfolio/.env  (copy from .env.example — never commit this file)

REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Full EmailJS setup guide: see [`EMAILJS_SETUP.md`](akash-portfolio/EMAILJS_SETUP.md)

---

## Customisation

All site content lives in one file — **`src/constants/data.js`**.

| What to edit | File |
|---|---|
| Name, tagline, company | `src/constants/data.js` → `PERSONAL` |
| Social links | `src/constants/data.js` → `SOCIAL` |
| Skills & levels | `src/constants/data.js` → `SKILL_GROUPS` |
| Projects | `src/constants/data.js` → `PROJECTS` |
| Work experience | `src/constants/data.js` → `EXPERIENCE` |
| Education | `src/constants/data.js` → `EDUCATION` |
| Certifications | `src/constants/data.js` → `CERTIFICATIONS` |
| Global colors & fonts | `src/styles/variables.css` |
| SEO / meta tags | `public/index.html` |

---

## Performance Notes

| Optimisation | Implementation |
|---|---|
| Code splitting | `React.lazy` on all below-fold sections |
| Scroll observers | `unobserve()` after first trigger — no continuous observation |
| Passive listeners | All `scroll` and `resize` listeners use `{ passive: true }` |
| Canvas animation | Particle array mutated in-place — zero GC pressure per frame |
| Re-renders | `React.memo` on all static sub-components; `useCallback` on all handlers |
| CSS animations | `will-change: opacity, transform` only on `.reveal` elements |
| Font loading | `preconnect` + `display=swap` on Google Fonts |
| Reduced motion | `@media (prefers-reduced-motion: reduce)` disables all animations |

---

## Security

| What | Status |
|---|---|
| EmailJS keys in source code | ❌ Never — reads from `process.env` only |
| `.env` committed to git | ❌ Blocked — listed in `.gitignore` |
| All `.env` variants blocked | ✅ `.env`, `.env.local`, `.env.development`, `.env.production`, etc. |
| `.env.example` committed | ✅ Safe — placeholder values only |
| `console.log` in production | ❌ None — all removed |
| External links | ✅ All use `rel="noopener noreferrer"` |

---

## Author

**Akash Mishra**
Quantitative Developer · Mudraksh & McShaw Tech LLP
B.Tech in Information Technology · NIET Greater Noida · 2020–2024

[![LinkedIn](https://img.shields.io/badge/LinkedIn-akashmishra0601-0A66C2?style=flat-square&logo=linkedin)](https://linkedin.com/in/akashmishra0601)
[![GitHub](https://img.shields.io/badge/GitHub-Akashmishra06-222?style=flat-square&logo=github)](https://github.com/Akashmishra06)
[![LeetCode](https://img.shields.io/badge/LeetCode-AkashMishra06-FFA116?style=flat-square&logo=leetcode&logoColor=black)](https://leetcode.com/u/AkashMishra06)
[![Email](https://img.shields.io/badge/Email-akashmishra.py@gmail.com-C9A84C?style=flat-square&logo=gmail&logoColor=white)](mailto:akashmishra.py@gmail.com)

---

## License

MIT © 2025 Akash Mishra

<div align="center">
<sub>Built with React · Deployed on GitHub Pages</sub>
</div>
