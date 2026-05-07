/**
 * generateResume.js
 * Generates a polished, print-ready resume HTML document and
 * triggers a browser download when called.
 *
 * To replace with a real PDF, drop AkashMishra_Resume.pdf into
 * the /public folder and change downloadResume() to:
 *   const a = document.createElement('a');
 *   a.href = process.env.PUBLIC_URL + '/AkashMishra_Resume.pdf';
 *   a.download = 'AkashMishra_Resume.pdf';
 *   a.click();
 */

import {
  PERSONAL, SOCIAL,
  EXPERIENCE, EDUCATION, CERTIFICATIONS,
  SKILL_GROUPS, PROJECTS,
} from '../constants/data';

function buildResumeHTML() {
  const skillLines = SKILL_GROUPS.map(g =>
    `<div class="skill-group">
      <span class="skill-cat">${g.category}:</span>
      <span class="skill-list">${g.skills.map(s => s.name).join(' · ')}</span>
    </div>`
  ).join('');

  const expItems = EXPERIENCE.map(e =>
    `<div class="block">
      <div class="block-header">
        <div>
          <div class="block-title">${e.role}</div>
          <div class="block-sub">${e.company} — ${e.location}</div>
        </div>
        <div class="block-meta">${e.period}</div>
      </div>
      <ul class="bullet-list">
        ${e.desc.map(d => `<li>${d}</li>`).join('')}
      </ul>
      <div class="tags">${e.skills.map(s => `<span>${s}</span>`).join('')}</div>
    </div>`
  ).join('');

  const eduItems = EDUCATION.map(e =>
    `<div class="block">
      <div class="block-header">
        <div>
          <div class="block-title">${e.degree}</div>
          <div class="block-sub">${e.school}</div>
          ${e.note ? `<div class="block-note">${e.note}</div>` : ''}
        </div>
        <div class="block-meta">${e.period}</div>
      </div>
    </div>`
  ).join('');

  const certItems = CERTIFICATIONS.map(c =>
    `<div class="cert-row">
      <span class="cert-name">${c.name}</span>
      <span class="cert-meta">${c.issuer} · ${c.year}</span>
    </div>`
  ).join('');

  const projectItems = PROJECTS.slice(0, 4).map(p =>
    `<div class="proj-row">
      <div class="proj-header">
        <span class="proj-title">${p.title}</span>
        <span class="proj-cat">${p.category} · ${p.status}</span>
      </div>
      <p class="proj-desc">${p.description}</p>
      <div class="tags">${p.stack.map(s => `<span>${s}</span>`).join('')}</div>
    </div>`
  ).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>${PERSONAL.name} — Resume</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=DM+Mono:wght@400;500&family=Syne:wght@400;600&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --gold: #C9A84C;
      --gold-dim: #8A6A28;
      --black: #080808;
      --grey: #555;
      --light: #f7f4ef;
      --border: #e0ddd8;
      --font-display: 'Cormorant Garamond', serif;
      --font-mono: 'DM Mono', monospace;
      --font-sans: 'Syne', sans-serif;
    }
    @page { margin: 18mm 16mm; size: A4; }
    body {
      font-family: var(--font-sans);
      background: #fff;
      color: var(--black);
      font-size: 9.5pt;
      line-height: 1.55;
      max-width: 800px;
      margin: 0 auto;
      padding: 40px 48px;
    }

    /* ── Header ── */
    .resume-header {
      border-bottom: 1.5px solid var(--gold);
      padding-bottom: 18px;
      margin-bottom: 22px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    .resume-name {
      font-family: var(--font-display);
      font-size: 36pt;
      font-weight: 300;
      letter-spacing: -0.02em;
      line-height: 1;
      color: var(--black);
    }
    .resume-name span { color: var(--gold); }
    .resume-role {
      font-family: var(--font-mono);
      font-size: 8pt;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--gold-dim);
      margin-top: 6px;
    }
    .resume-contact {
      text-align: right;
      font-family: var(--font-mono);
      font-size: 7.5pt;
      color: var(--grey);
      line-height: 1.7;
    }
    .resume-contact a { color: var(--gold-dim); text-decoration: none; }

    /* ── Section ── */
    .section { margin-bottom: 22px; }
    .section-title {
      font-family: var(--font-mono);
      font-size: 7pt;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      color: var(--gold);
      border-bottom: 1px solid var(--border);
      padding-bottom: 5px;
      margin-bottom: 14px;
    }

    /* ── Skills ── */
    .skill-group { display: flex; gap: 8px; margin-bottom: 5px; font-size: 9pt; }
    .skill-cat { font-family: var(--font-mono); font-size: 7.5pt; color: var(--gold-dim); flex-shrink: 0; min-width: 120px; }
    .skill-list { color: #333; }

    /* ── Experience / Education blocks ── */
    .block { margin-bottom: 16px; }
    .block-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px; gap: 12px; }
    .block-title { font-weight: 600; font-size: 10.5pt; color: var(--black); }
    .block-sub { font-family: var(--font-mono); font-size: 8pt; color: var(--gold-dim); margin-top: 2px; }
    .block-note { font-size: 8pt; color: var(--grey); margin-top: 2px; font-style: italic; }
    .block-meta { font-family: var(--font-mono); font-size: 7.5pt; color: var(--grey); flex-shrink: 0; text-align: right; }

    .bullet-list { padding-left: 14px; margin-bottom: 8px; list-style-type: none; }
    .bullet-list li { position: relative; padding-left: 12px; margin-bottom: 4px; font-size: 9pt; color: #333; line-height: 1.55; }
    .bullet-list li::before { content: '—'; position: absolute; left: 0; color: var(--gold-dim); }

    .tags { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 6px; }
    .tags span {
      font-family: var(--font-mono); font-size: 6.5pt; letter-spacing: 0.08em;
      text-transform: uppercase; color: var(--gold-dim);
      border: 1px solid var(--border); padding: 2px 6px; border-radius: 1px;
    }

    /* ── Certifications ── */
    .cert-row { display: flex; justify-content: space-between; align-items: baseline; padding: 5px 0; border-bottom: 1px dashed var(--border); font-size: 8.5pt; }
    .cert-row:last-child { border-bottom: none; }
    .cert-name { color: var(--black); }
    .cert-meta { font-family: var(--font-mono); font-size: 7.5pt; color: var(--grey); flex-shrink: 0; margin-left: 12px; }

    /* ── Projects ── */
    .proj-row { margin-bottom: 14px; }
    .proj-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 4px; }
    .proj-title { font-weight: 600; font-size: 10pt; }
    .proj-cat { font-family: var(--font-mono); font-size: 7.5pt; color: var(--gold-dim); }
    .proj-desc { font-size: 9pt; color: #444; margin-bottom: 5px; line-height: 1.5; }

    /* ── Footer ── */
    .resume-footer {
      margin-top: 24px;
      border-top: 1px solid var(--border);
      padding-top: 10px;
      font-family: var(--font-mono);
      font-size: 7pt;
      color: #aaa;
      text-align: center;
      letter-spacing: 0.1em;
    }

    @media print {
      body { padding: 0; }
      .no-print { display: none; }
    }
  </style>
</head>
<body>
  <!-- Print / Download button (hidden on print) -->
  <div class="no-print" style="text-align:right;margin-bottom:16px;">
    <button onclick="window.print()" style="font-family:'DM Mono',monospace;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;background:#C9A84C;color:#080808;border:none;padding:8px 20px;cursor:pointer;border-radius:2px;">
      ⬇ Save as PDF (Ctrl+P → Save as PDF)
    </button>
  </div>

  <header class="resume-header">
    <div>
      <div class="resume-name"><span>${PERSONAL.nameFirst}</span> ${PERSONAL.nameLast}</div>
      <div class="resume-role">${PERSONAL.role}</div>
    </div>
    <div class="resume-contact">
      <div><a href="mailto:${PERSONAL.email}">${PERSONAL.email}</a></div>
      <div><a href="${SOCIAL.linkedin}" target="_blank">linkedin.com/in/akashmishra0601</a></div>
      <div><a href="${SOCIAL.github}" target="_blank">github.com/Akashmishra06</a></div>
      <div><a href="${SOCIAL.leetcode}" target="_blank">leetcode.com/u/AkashMishra06</a></div>
    </div>
  </header>

  <section class="section">
    <div class="section-title">Technical Skills</div>
    ${skillLines}
  </section>

  <section class="section">
    <div class="section-title">Work Experience</div>
    ${expItems}
  </section>

  <section class="section">
    <div class="section-title">Education</div>
    ${eduItems}
  </section>

  <section class="section">
    <div class="section-title">Selected Projects</div>
    ${projectItems}
  </section>

  <section class="section">
    <div class="section-title">Certifications</div>
    ${certItems}
  </section>

  <div class="resume-footer">
    ${PERSONAL.name} · ${PERSONAL.role} · ${PERSONAL.company}
  </div>
</body>
</html>`;
}

/**
 * Call this function to generate and download the resume.
 * It creates a Blob from the HTML string and triggers a download.
 */
export function downloadResume() {
  const html = buildResumeHTML();
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = 'AkashMishra_Resume.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
