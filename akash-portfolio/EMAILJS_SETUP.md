# 📧 EmailJS Setup — Contact Form Email Integration

This guide connects your contact form to your Gmail (`akashmishra.py@gmail.com`).  
Uses **EmailJS** — free, works entirely client-side, no backend needed.

---

## Quick Summary

```
Visitor submits form
      ↓
React reads REACT_APP_EMAILJS_* from .env
      ↓
emailjs.sendForm() calls EmailJS API
      ↓
EmailJS sends email via your Gmail service
      ↓
Email arrives at akashmishra.py@gmail.com
      ↓
You reply directly to the visitor
```

---

## Step 1 — Create a Free EmailJS Account

1. Go to **https://www.emailjs.com** and sign up (free)
2. The free plan gives you **200 emails/month** — perfect for a portfolio

---

## Step 2 — Connect Your Gmail

1. Dashboard → **Email Services** → **Add New Service**
2. Choose **Gmail**
3. Click **Connect Account** → sign in with `akashmishra.py@gmail.com`
4. Click **Create Service**
5. Copy the **Service ID** → looks like `service_abc1234`

---

## Step 3 — Create an Email Template

1. Dashboard → **Email Templates** → **Create New Template**
2. Configure it like this:

**Subject:**
```
New Portfolio Message from {{from_name}}
```

**Body:**
```
Hi {{to_name}},

You have a new message from your portfolio website.

──────────────────────────
Name:    {{from_name}}
Email:   {{reply_to}}
──────────────────────────

{{message}}

──────────────────────────
Reply directly to: {{reply_to}}
```

3. Set **To Email** field → `akashmishra.py@gmail.com`
4. Set **Reply To** field → `{{reply_to}}`
5. Click **Save** → copy the **Template ID** → looks like `template_xyz7890`

---

## Step 4 — Get Your Public Key

1. Dashboard → **Account** → **General**
2. Copy **Public Key** → looks like `aBcDeFgHiJkLmNoP12`

---

## Step 5 — Set Up Your Local .env File

In the `akash-portfolio/` folder, copy the example file:

```bash
cp .env.example .env
```

Then open `.env` and fill in your real values:

```env
REACT_APP_EMAILJS_SERVICE_ID=service_abc1234
REACT_APP_EMAILJS_TEMPLATE_ID=template_xyz7890
REACT_APP_EMAILJS_PUBLIC_KEY=aBcDeFgHiJkLmNoP12
```

> ⚠️ The `.env` file is in `.gitignore` — it will NEVER be pushed to GitHub.  
> Only `.env.example` (which has no real values) is committed.

---

## Step 6 — Install Dependencies & Test Locally

```bash
cd akash-portfolio
npm install
npm start
```

Go to `http://localhost:3000`, fill out the contact form, and click **Send Message**.  
Check `akashmishra.py@gmail.com` — the email should arrive within seconds.

---

## Step 7 — Deploy to GitHub Pages

```bash
npm run deploy
```

The form works on **https://Akashmishra06.github.io** too — EmailJS is purely client-side.

> Note: GitHub Pages only serves your built `build/` folder, not your `.env`.  
> The environment variables are baked in at build time by `react-scripts build`.  
> This is secure because your `.env` is local and never pushed to GitHub.

---

## Template Variable Reference

| Variable        | Source                              |
|-----------------|-------------------------------------|
| `{{from_name}}` | Name field in the form              |
| `{{reply_to}}`  | Email field in the form             |
| `{{message}}`   | Message field in the form           |
| `{{to_name}}`   | Hidden field — always "Akash Mishra"|
| `{{to_email}}`  | Hidden field — your Gmail address   |

---

## Security Notes

| What                        | Safe to commit? |
|-----------------------------|-----------------|
| `.env`                      | ❌ NO — contains real keys |
| `.env.example`              | ✅ YES — placeholder values only |
| `Contact.jsx`               | ✅ YES — reads from `process.env`, no hardcoded keys |
| EmailJS Public Key exposure | ✅ Acceptable — EmailJS public keys are designed to be used client-side. They are rate-limited per domain in your EmailJS dashboard. |

---

## Troubleshooting

| Error message in UI                            | Fix                                                   |
|------------------------------------------------|-------------------------------------------------------|
| "Email service is not configured"              | `.env` file missing or variables not prefixed `REACT_APP_` |
| "Email service not found"                      | Wrong `SERVICE_ID` — check EmailJS dashboard          |
| "Email template not found"                     | Wrong `TEMPLATE_ID` — check EmailJS dashboard         |
| "Authentication failed"                        | Wrong `PUBLIC_KEY` — copy from Account → General      |
| Form submits but no email received             | Check spam folder; verify Gmail is connected in EmailJS |

---

*Akash Mishra · akashmishra.py@gmail.com · https://Akashmishra06.github.io*
