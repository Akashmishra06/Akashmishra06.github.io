import React, { useRef, useEffect, useState } from 'react';
import './Contact.css';

const LINKS = [
  { label: 'LinkedIn',  href: 'https://linkedin.com/in/akashmishra0601',   icon: '↗', note: 'linkedin.com/in/akashmishra0601' },
  { label: 'GitHub',    href: 'https://github.com/Akashmishra06',           icon: '↗', note: 'github.com/Akashmishra06' },
  { label: 'LeetCode',  href: 'https://leetcode.com/u/AkashMishra06/',      icon: '↗', note: 'leetcode.com/u/AkashMishra06' },
  { label: 'Email',     href: 'mailto:akashmishra.py@gmail.com',            icon: '✉', note: 'akashmishra.py@gmail.com' },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view'); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = e => setForm(v => ({ ...v, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your preferred form handler (Formspree, EmailJS, etc.)
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="contact__inner">
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
          {/* Left — links */}
          <div className="contact__links reveal">
            {LINKS.map(({ label, href, icon, note }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="contact__link-card">
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

          {/* Right — form */}
          <div className="contact__form-wrap reveal" style={{ transitionDelay: '0.15s' }}>
            {sent ? (
              <div className="contact__success">
                <span className="contact__success-icon">✓</span>
                <p>Message sent! I'll get back to you soon.</p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__field">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name" name="name" type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email" name="email" type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message" name="message" rows={5}
                    placeholder="Tell me about the role / project..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="contact__submit">
                  Send Message <span>→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
