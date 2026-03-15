/**
 * createParticles — generates particle config for the Hero canvas animation.
 * Extracted here so Hero.jsx stays declarative.
 *
 * @param {number} count   - number of particles
 * @param {number} width   - canvas width
 * @param {number} height  - canvas height
 */
export function createParticles(count, width, height) {
  return Array.from({ length: count }, () => ({
    x:       Math.random() * width,
    y:       Math.random() * height,
    r:       Math.random() * 1.2 + 0.3,
    speed:   Math.random() * 0.3 + 0.1,
    opacity: Math.random() * 0.4 + 0.05,
    drift:   (Math.random() - 0.5) * 0.2,
  }));
}

/**
 * tickParticle — advances one particle by one frame.
 * Returns the same particle reference (mutated for performance).
 */
export function tickParticle(p, width, height) {
  p.y -= p.speed;
  p.x += p.drift;
  if (p.y < -10) { p.y = height + 10; p.x = Math.random() * width; }
  if (p.x < 0)   p.x = width;
  if (p.x > width) p.x = 0;
  return p;
}
