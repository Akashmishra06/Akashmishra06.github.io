import { useEffect, useRef } from 'react';

/**
 * useReveal — attaches an IntersectionObserver to a container ref.
 * All .reveal children inside the container get the 'in-view' class
 * when they enter the viewport, triggering CSS fade-up transitions.
 *
 * @param {number} threshold  - fraction of element visible before firing (default 0.12)
 * @returns {React.RefObject} - attach to the section element
 */
export function useReveal(threshold = 0.12) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            // Unobserve after trigger — no need to keep watching
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    node.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
