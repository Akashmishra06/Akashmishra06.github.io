import React, { Suspense, lazy } from 'react';
import './App.css';

// Navbar and Hero are above-the-fold — load eagerly
import Navbar from './components/Navbar';
import Hero   from './sections/Hero';

// All other sections are below-the-fold — lazy load for faster initial paint
const About      = lazy(() => import('./sections/About'));
const Skills     = lazy(() => import('./sections/Skills'));
const Projects   = lazy(() => import('./sections/Projects'));
const Experience = lazy(() => import('./sections/Experience'));
const Contact    = lazy(() => import('./sections/Contact'));
const Footer     = lazy(() => import('./components/Footer'));

// Minimal fallback — invisible, just reserves layout space
function SectionFallback() {
  return <div style={{ minHeight: '20vh' }} aria-hidden="true" />;
}

export default function App() {
  return (
    <div className="app">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
