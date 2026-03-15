import { useState, useEffect } from 'react';

/**
 * useScrolled — returns true when window.scrollY exceeds `threshold`.
 * Uses passive event listener for best scroll performance.
 *
 * @param {number} threshold - px from top before returning true (default 40)
 */
export function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    // Passive listener avoids blocking scroll thread
    window.addEventListener('scroll', onScroll, { passive: true });
    // Set initial value in case page loads mid-scroll
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}
