import React, { useRef, useState, useCallback, memo } from 'react';
import emailjs from '@emailjs/browser';
import { useReveal } from '../hooks/useReveal';
import { CONTACT_LINKS, PERSONAL } from '../constants/data';
import './Contact.css';

// ─────────────────────────────────────────────────────────────
//  EmailJS credentials — loaded from environment variables ONLY.
//  Never hardcode these values.
//  Copy .env.example → .env and fill in your real keys.
// ─────────────────────────────────────────────────────────────
const SERVICE_ID  = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const FORM_STATUS = { IDLE: 'idle', LOADING: 'loading', SUCCESS: 'success', ERROR: 'error' };

const INITIAL_FORM = { from_name: '', reply_to: '', message: '' };

// Memoised link card
const LinkCard = memo(function LinkCard({ label, href, icon, note }) {
  return (
    <a
      href={href}
      target={label === 'Email' ? '_self' : '_blank'}
      rel="noopener noreferrer"
      className="contact__link-card"
      aria-label={`${label}: ${note}`}
    >
      <div className="contact__link-left">
        <span className="contact__link-label">{label}</span>
        <span className="contact__link-note">{note}</span>
      </div>
      <span className="contact__link-icon" aria-hidden="true">{icon}</span>
    </a>
  );
});

export default function Contact() {
  const sectionRef = useReveal(0.1);
  const formRef    = useRef(null);

  const [status,   setStatus]   = useState(FORM_STATUS.IDLE);
  const [errorMsg, setErrorMsg] = useState('');
  const [form,     setForm]     = useState(INITIAL_FORM);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setErrorMsg('Email service is not configured. Please copy .env.example → .env and add your EmailJS credentials.');
      setStatus(FORM_STATUS.ERROR);
      return;
    }

    setStatus(FORM_STATUS.LOADING);

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setStatus(FORM_STATUS.SUCCESS);
      setForm(INITIAL_FORM);
      setTimeout(() => setStatus(FORM_STATUS.IDLE), 6000);
    } catch (err) {
      const msg =
        err?.text === 'The service is not found'
          ? 'Email service not found. Check your SERVICE_ID in .env.'
          : err?.text === 'The template is not found'
          ? 'Email template not found. Check your TEMPLATE_ID in .env.'
          : err?.status === 401 || err?.text?.includes('Public Key')
          ? 'Authentication failed. Check your PUBLIC_KEY in .env.'
          : `Something went wrong. Email me directly at ${PERSONAL.email}`;

      setErrorMsg(msg);
      setStatus(FORM_STATUS.ERROR);
      setTimeout(() => { setStatus(FORM_STATUS.IDLE); setErrorMsg(''); }, 8000);
    }
  }, []);

  const isLoading = status === FORM_STATUS.LOADING;
  const isSuccess = status === FORM_STATUS.SUCCESS;

  return (
    <section id="contact" className="contact" ref={sectionRef} aria-label="Contact">
      <div className="section-divider" aria-hidden="true" />
      <div className="contact__inner container">

        <div className="contact__header reveal">
          <p className="section-label">Contact</p>
          <div className="gold-line" aria-hidden="true" />
          <h2 className="contact__heading">
            Let's <span className="contact__heading-gold">Connect</span>
          </h2>
          <p className="contact__sub">
            Open to quant research roles, algo trading collaborations, and interesting problems
            at the intersection of finance and technology.
          </p>
        </div>

        <div className="contact__layout">
          {/* Links */}
          <div className="contact__links reveal">
            {CONTACT_LINKS.map(link => (
              <LinkCard key={link.label} {...link} />
            ))}
            <div className="contact__availability" role="status">
              <span className="contact__avail-dot" aria-hidden="true" />
              <span>Currently open to new opportunities</span>
            </div>
          </div>

          {/* Form */}
          <div className="contact__form-wrap reveal" style={{ transitionDelay: '0.15s' }}>
            {isSuccess ? (
              <div className="contact__success" role="status" aria-live="polite">
                <div className="contact__success-icon" aria-hidden="true">✓</div>
                <p className="contact__success-title">Message Sent!</p>
                <p className="contact__success-sub">
                  Thanks for reaching out. I'll reply to your email shortly.
                </p>
              </div>
            ) : (
              <form
                ref={formRef}
                className="contact__form"
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
              >
                {status === FORM_STATUS.ERROR && errorMsg && (
                  <div className="contact__error-banner" role="alert" aria-live="assertive">
                    <span className="contact__error-icon" aria-hidden="true">⚠</span>
                    <p>{errorMsg}</p>
                  </div>
                )}

                <div className="contact__field">
                  <label htmlFor="c-name">Name</label>
                  <input
                    id="c-name" name="from_name" type="text"
                    placeholder="Your full name"
                    value={form.from_name}
                    onChange={handleChange}
                    required disabled={isLoading}
                    autoComplete="name"
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="c-email">Email</label>
                  <input
                    id="c-email" name="reply_to" type="email"
                    placeholder="your@email.com"
                    value={form.reply_to}
                    onChange={handleChange}
                    required disabled={isLoading}
                    autoComplete="email"
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="c-message">Message</label>
                  <textarea
                    id="c-message" name="message" rows={5}
                    placeholder="Tell me about the role / project..."
                    value={form.message}
                    onChange={handleChange}
                    required disabled={isLoading}
                  />
                </div>

                <input type="hidden" name="to_name"  value={PERSONAL.name} />
                <input type="hidden" name="to_email" value={PERSONAL.email} />

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
