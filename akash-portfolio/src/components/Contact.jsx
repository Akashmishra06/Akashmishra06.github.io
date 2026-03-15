import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

// ─────────────────────────────────────────────────────────────
//  EmailJS credentials are loaded from environment variables.
//  Never hardcode these — they are read from your local .env file.
//
//  Required .env variables (Create React App format):
//    REACT_APP_EMAILJS_SERVICE_ID
//    REACT_APP_EMAILJS_TEMPLATE_ID
//    REACT_APP_EMAILJS_PUBLIC_KEY
//
//  See .env.example for setup instructions.
// ─────────────────────────────────────────────────────────────
const SERVICE_ID  = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const LINKS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/akashmishra0601',  icon: '↗', note: 'linkedin.com/in/akashmishra0601' },
  { label: 'GitHub',   href: 'https://github.com/Akashmishra06',          icon: '↗', note: 'github.com/Akashmishra06' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/AkashMishra06/',     icon: '↗', note: 'leetcode.com/u/AkashMishra06' },
  { label: 'Email',    href: 'mailto:akashmishra.py@gmail.com',           icon: '✉', note: 'akashmishra.py@gmail.com' },
];

// Form submission states
const STATUS = {
  IDLE:    'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR:   'error',
};

export default function Contact() {
  const sectionRef = useRef(null);
  const formRef    = useRef(null);

  const [status,   setStatus]   = useState(STATUS.IDLE);
  const [errorMsg, setErrorMsg] = useState('');
  const [form,     setForm]     = useState({ from_name: '', reply_to: '', message: '' });

  // Scroll-reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('in-view');
      }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    // Guard: warn in dev if env vars are missing
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setErrorMsg(
        'Email service is not configured. ' +
        'Please copy .env.example to .env and add your EmailJS credentials.'
      );
      setStatus(STATUS.ERROR);
      return;
    }

    setStatus(STATUS.LOADING);

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });

      setStatus(STATUS.SUCCESS);
      setForm({ from_name: '', reply_to: '', message: '' });

      // Auto-reset back to form after 6 seconds
      setTimeout(() => setStatus(STATUS.IDLE), 6000);

    } catch (err) {
      console.error('[EmailJS] Send failed:', err);

      const msg =
        err?.text === 'The service is not found'
          ? 'Email service not found. Please check your SERVICE_ID in .env.'
          : err?.text === 'The template is not found'
          ? 'Email template not found. Please check your TEMPLATE_ID in .env.'
          : err?.status === 401 || err?.text?.includes('Public Key')
          ? 'Authentication failed. Please check your PUBLIC_KEY in .env.'
          : 'Something went wrong. Please email me directly at akashmishra.py@gmail.com';

      setErrorMsg(msg);
      setStatus(STATUS.ERROR);

      // Auto-reset error after 8 seconds so user can try again
      setTimeout(() => {
        setStatus(STATUS.IDLE);
        setErrorMsg('');
      }, 8000);
    }
  };

  const isLoading = status === STATUS.LOADING;
  const isSuccess = status === STATUS.SUCCESS;

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="contact__inner">

        {/* ── Section header ── */}
        <div className="contact__header reveal">
          <p className="section-label">Contact</p>
          <div className="gold-line" />
          <h2 className="contact__heading">
            Let's <span className="contact__heading-gold">Connect</span>
          </h2>
          <p className="contact__sub">
            Open to quant research roles, algo trading collaborations, and interesting problems
            at the intersection of finance and technology.
          </p>
        </div>

        <div className="contact__layout">

          {/* ── Left — profile links ── */}
          <div className="contact__links reveal">
            {LINKS.map(({ label, href, icon, note }) => (
              <a
                key={label}
                href={href}
                target={label === 'Email' ? '_self' : '_blank'}
                rel="noreferrer"
                className="contact__link-card"
              >
                <div className="contact__link-left">
                  <span className="contact__link-label">{label}</span>
                  <span className="contact__link-note">{note}</span>
                </div>
                <span className="contact__link-icon">{icon}</span>
              </a>
            ))}

            <div className="contact__availability">
              <span className="contact__avail-dot" />
              <span>Currently open to new opportunities</span>
            </div>
          </div>

          {/* ── Right — contact form ── */}
          <div className="contact__form-wrap reveal" style={{ transitionDelay: '0.15s' }}>

            {/* SUCCESS STATE */}
            {isSuccess && (
              <div className="contact__success" role="status" aria-live="polite">
                <div className="contact__success-icon">✓</div>
                <p className="contact__success-title">Message Sent!</p>
                <p className="contact__success-sub">
                  Thanks for reaching out. I'll reply to your email shortly.
                </p>
              </div>
            )}

            {/* FORM — shown when idle, loading, or error */}
            {!isSuccess && (
              <form
                ref={formRef}
                className="contact__form"
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
              >

                {/* ERROR BANNER — shown inline above submit button */}
                {status === STATUS.ERROR && errorMsg && (
                  <div className="contact__error-banner" role="alert" aria-live="assertive">
                    <span className="contact__error-icon">⚠</span>
                    <p>{errorMsg}</p>
                  </div>
                )}

                {/* EmailJS picks up field values via the `name` attribute */}
                <div className="contact__field">
                  <label htmlFor="c-name">Name</label>
                  <input
                    id="c-name"
                    name="from_name"
                    type="text"
                    placeholder="Your full name"
                    value={form.from_name}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    autoComplete="name"
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="c-email">Email</label>
                  <input
                    id="c-email"
                    name="reply_to"
                    type="email"
                    placeholder="your@email.com"
                    value={form.reply_to}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    autoComplete="email"
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="c-message">Message</label>
                  <textarea
                    id="c-message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about the role / project..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  />
                </div>

                {/* Hidden fields — used in the EmailJS template */}
                <input type="hidden" name="to_name"   value="Akash Mishra" />
                <input type="hidden" name="to_email"  value="akashmishra.py@gmail.com" />

                <button
                  type="submit"
                  className={`contact__submit${isLoading ? ' contact__submit--loading' : ''}`}
                  disabled={isLoading}
                  aria-disabled={isLoading}
                >
                  {isLoading
                    ? <><span className="contact__spinner" aria-hidden="true" />Sending…</>
                    : <>Send Message <span aria-hidden="true">→</span></>
                  }
                </button>

              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
