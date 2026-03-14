# 🚀 Deployment Guide — GitHub Pages

Complete step-by-step guide to deploy your portfolio to:
**https://Akashmishra06.github.io**

---

## Prerequisites

Make sure you have these installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [Git](https://git-scm.com/)
- A GitHub account with username **Akashmishra06**

---

## Step 1 — Create the GitHub Repository

1. Go to **https://github.com/new**
2. Set Repository name to exactly: `Akashmishra06.github.io`
3. Set visibility to **Public**
4. Do **NOT** initialize with README, .gitignore, or license
5. Click **Create repository**

---

## Step 2 — Install Dependencies

Open your terminal in the project folder:

```bash
cd akash-portfolio
npm install
```

This installs all packages including `gh-pages` for deployment.

---

## Step 3 — Test Locally

Run the development server to make sure everything looks good:

```bash
npm start
```

Open **http://localhost:3000** in your browser.  
Make any edits you want (name, email, projects, etc.) before deploying.

---

## Step 4 — Initialize Git & Push to GitHub

In your project folder, run these commands one by one:

```bash
# Initialize git repository
git init

# Add all files
git add .

# First commit
git commit -m "Initial portfolio commit"

# Add your GitHub remote (replace with your actual repo URL)
git remote add origin https://github.com/Akashmishra06/Akashmishra06.github.io.git

# Push to GitHub
git push -u origin main
```

---

## Step 5 — Deploy to GitHub Pages

Run the single deploy command:

```bash
npm run deploy
```

This command will:
1. Build your React app (`npm run build`)
2. Push the built files to a `gh-pages` branch automatically

---

## Step 6 — Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. In the left sidebar, click **Pages**
4. Under **Source**, select branch: **gh-pages**
5. Folder: **/ (root)**
6. Click **Save**

---

## Step 7 — Visit Your Live Site

Wait 2–5 minutes, then visit:

**🌐 https://Akashmishra06.github.io**

Your portfolio is live!

---

## Updating Your Portfolio in the Future

Whenever you make changes, just run:

```bash
# Stage your changes
git add .

# Commit
git commit -m "Update portfolio"

# Push source code
git push origin main

# Redeploy to GitHub Pages
npm run deploy
```

---

## Customising Your Info

Here's a quick reference to where each piece of data lives:

| What to change | File |
|---|---|
| Your name, title, tagline | `src/components/Hero.jsx` |
| Bio, stats, tags | `src/components/About.jsx` |
| Skills & proficiency levels | `src/components/Skills.jsx` |
| Projects (title, description, stack) | `src/components/Projects.jsx` |
| Work experience, certifications | `src/components/Experience.jsx` |
| Email, LinkedIn, GitHub links | `src/components/Contact.jsx` & `Footer.jsx` |
| SEO meta tags, page title | `public/index.html` |

---

## Adding a Custom Domain (Optional)

If you have a domain like `akashmishra.dev`:

1. In `package.json`, change `"homepage"` to `"https://akashmishra.dev"`
2. Create a file `public/CNAME` containing just: `akashmishra.dev`
3. In GitHub → Settings → Pages, add your custom domain
4. Update your domain's DNS with a CNAME pointing to `Akashmishra06.github.io`

---

## Troubleshooting

**White screen after deploy?**
- Check that `"homepage"` in `package.json` is exactly `"https://Akashmishra06.github.io"`
- Make sure the `gh-pages` branch was created (check your repo's branches)

**Deploy command fails?**
- Make sure you've pushed to GitHub first (`git push origin main`)
- Try: `npm install gh-pages --save-dev` then retry `npm run deploy`

**Page not found (404)?**
- GitHub Pages can take up to 10 minutes to propagate — wait and refresh

---

## Tech Stack Used

- **React 18** — UI framework  
- **gh-pages** — GitHub Pages deployment  
- **Google Fonts** — Cormorant Garamond, DM Mono, Syne  
- **Vanilla CSS** — No CSS framework, fully custom  
- **IntersectionObserver API** — Scroll animations  
- **HTML5 Canvas** — Particle effect in hero  

---

*Built for Akash Mishra — Quantitative Developer at Mudraksh & McShaw Tech LLP*
