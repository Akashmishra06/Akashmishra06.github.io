<div align="center">

# Akash Mishra — Portfolio

### Quantitative Developer · Mudraksh & McShaw Tech LLP

[![Live Site](https://img.shields.io/badge/Live%20Site-Akashmishra06.github.io-C9A84C?style=for-the-badge&logo=github)](https://Akashmishra06.github.io)
[![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org)
[![EmailJS](https://img.shields.io/badge/EmailJS-Contact%20Form-C9A84C?style=for-the-badge)](https://www.emailjs.com)
[![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-222?style=for-the-badge&logo=github-pages)](https://pages.github.com)

</div>

---

## Overview

Personal portfolio website for **Akash Mishra**, Quantitative Developer at Mudraksh & McShaw Tech LLP. Built with React, deployed on GitHub Pages, featuring a fully functional contact form that delivers messages directly to Gmail via EmailJS — with zero backend and zero exposed credentials.

**Live:** https://Akashmishra06.github.io

---

## Sections

| Section | Description |
|---|---|
| **Hero** | Animated particle canvas, name reveal, skills ticker |
| **About** | Bio, stats grid, domain expertise tags |
| **Skills** | Animated progress bars across Languages, Quant Finance, ML, Infrastructure |
| **Projects** | 6 expandable quant project cards with stack, status, and highlights |
| **Experience** | Work history at Mudraksh & McShaw, education at NIET, IBM certifications |
| **Contact** | Profile links + EmailJS-powered contact form |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Styling | Vanilla CSS with CSS custom properties |
| Fonts | Cormorant Garamond · DM Mono · Syne (Google Fonts) |
| Animations | IntersectionObserver API · CSS keyframes · HTML5 Canvas |
| Email | EmailJS (`@emailjs/browser`) |
| Deployment | GitHub Pages via `gh-pages` |

---

## Project Structure

```
Akashmishra06.github.io/
├── README.md                        ← you are here
├── DEPLOY.md                        ← root-level deployment notes
│
└── akash-portfolio/                 ← React application root
    ├── .env.example                 ← ✅ safe to commit — placeholder values only
    ├── .env                         ← ❌ NOT committed — holds real EmailJS keys
    ├── .gitignore                   ← blocks .env and all variants
    ├── package.json
    ├── DEPLOY.md                    ← full GitHub Pages deployment guide
    ├── EMAILJS_SETUP.md             ← step-by-step EmailJS configuration guide
    │
    ├── public/
    │   └── index.html               ← SEO meta tags, Google Fonts
    │
    └── src/
        ├── App.js
        ├── App.css
        ├── index.js
        ├── index.css                ← global CSS tokens (colors, fonts, animations)
        │
        └── components/
            ├── Navbar.jsx / .css
            ├── Hero.jsx / .css
            ├── About.jsx / .css
            ├── Skills.jsx / .css
            ├── Projects.jsx / .css
            ├── Experience.jsx / .css
            ├── Contact.jsx / .css   ← EmailJS integration
            └── Footer.jsx / .css
```

---

## Getting Started (Local Development)

### 1. Clone the repository

```bash
git clone https://github.com/Akashmishra06/Akashmishra06.github.io.git
cd Akashmishra06.github.io/akash-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

```bash
cp .env.example .env
```

Open `.env` and fill in your EmailJS credentials:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

> See `EMAILJS_SETUP.md` for step-by-step instructions on getting these values.

### 4. Run locally

```bash
npm start
```

Opens at `http://localhost:3000`

---

## Deployment to GitHub Pages

```bash
# From inside akash-portfolio/
npm run deploy
```

This runs `react-scripts build` then pushes the `build/` folder to the `gh-pages` branch automatically.

> Full deployment guide: see `akash-portfolio/DEPLOY.md`

---

## Contact Form — Security Architecture

The contact form uses **EmailJS** to send emails entirely client-side.  
Credentials are stored in a local `.env` file that is **never committed to Git**.

```
┌─────────────────────────────────────────────────────┐
│                  Security Flow                      │
│                                                     │
│  .env (local only, gitignored)                      │
│    REACT_APP_EMAILJS_SERVICE_ID  = real value       │
│    REACT_APP_EMAILJS_TEMPLATE_ID = real value       │
│    REACT_APP_EMAILJS_PUBLIC_KEY  = real value       │
│           │                                         │
│           ▼ baked in at build time                  │
│  react-scripts build                                │
│           │                                         │
│           ▼                                         │
│  build/ folder → deployed to gh-pages branch       │
│           │                                         │
│           ▼                                         │
│  Browser → emailjs.sendForm() → Gmail               │
└─────────────────────────────────────────────────────┘

What IS committed to GitHub:   ✅ Source code, .env.example
What is NOT committed:         ❌ .env, node_modules, build/
```

### Environment variable prefix

This project uses **Create React App** (`react-scripts`).  
CRA requires the `REACT_APP_` prefix — variables without it are silently ignored.  
Do **not** use `VITE_` — that prefix is only for Vite projects.

---

## Security Checklist

| Check | Status |
|---|---|
| No API keys in source code | ✅ |
| No API keys in git history | ✅ |
| `.env` in `.gitignore` | ✅ |
| All `.env` variants blocked | ✅ (`.env`, `.env.local`, `.env.development`, `.env.production`, etc.) |
| `.env.example` has only placeholders | ✅ |
| Credentials read via `process.env` | ✅ |
| Guard check if env vars missing | ✅ (shows user-friendly error, not a crash) |

---

## Customisation

| What to change | File |
|---|---|
| Name, tagline, hero text | `src/components/Hero.jsx` |
| Bio, stats, tags | `src/components/About.jsx` |
| Skill names and levels | `src/components/Skills.jsx` |
| Projects | `src/components/Projects.jsx` |
| Work experience, education, certifications | `src/components/Experience.jsx` |
| Social links, contact email | `src/components/Contact.jsx` · `Footer.jsx` |
| SEO title, description, meta | `public/index.html` |
| Global colors and fonts | `src/index.css` (CSS custom properties) |

---

## Author

**Akash Mishra**  
Quantitative Developer · Mudraksh & McShaw Tech LLP  
B.Tech in Information Technology · NIET Greater Noida · 2020–2024

[![LinkedIn](https://img.shields.io/badge/LinkedIn-akashmishra0601-0A66C2?style=flat-square&logo=linkedin)](https://linkedin.com/in/akashmishra0601)
[![GitHub](https://img.shields.io/badge/GitHub-Akashmishra06-222?style=flat-square&logo=github)](https://github.com/Akashmishra06)
[![LeetCode](https://img.shields.io/badge/LeetCode-AkashMishra06-FFA116?style=flat-square&logo=leetcode&logoColor=black)](https://leetcode.com/u/AkashMishra06)

---

<div align="center">
<sub>Built with React · Deployed on GitHub Pages · © 2025 Akash Mishra</sub>
</div>
