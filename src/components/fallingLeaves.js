import { gsap } from 'gsap';

const leafUrls = [
  new URL('../assets/leaf1.png', import.meta.url).href,
  new URL('../assets/leaf2.png', import.meta.url).href,
  new URL('../assets/leaf3.png', import.meta.url).href,
];

function prefersReducedMotion() {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function makeLeafEl() {
  const img = document.createElement('img');
  img.className = 'leaf';
  img.src = pick(leafUrls);
  img.alt = '';
  img.decoding = 'async';
  img.loading = 'eager';
  img.setAttribute('aria-hidden', 'true');
  return img;
}

function animateLeaf(el, { width, height }) {
  const startX = rand(0, width);
  const endY = height + 120;

  const scale = rand(0.55, 1.05);
  const baseRotate = rand(-40, 40);
  const sway = rand(50, 140) * (Math.random() < 0.5 ? -1 : 1);
  const duration = rand(8.5, 14.5);
  const delay = rand(0, 3.5);

  gsap.set(el, {
    x: startX,
    y: rand(-140, -40),
    rotation: baseRotate,
    scale,
    opacity: rand(0.75, 0.95),
  });

  // Vertical fall with a slight acceleration-like ease.
  gsap.to(el, {
    y: endY,
    duration,
    delay,
    ease: 'power1.in',
    onComplete: () => animateLeaf(el, { width, height }),
  });

  // Gentle side-to-side drift.
  gsap.to(el, {
    x: `+=${sway}`,
    duration: duration * rand(0.45, 0.7),
    delay,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: Math.floor(rand(2, 5)),
  });

  // Natural rotation wobble.
  gsap.to(el, {
    rotation: `+=${rand(160, 420) * (Math.random() < 0.5 ? -1 : 1)}`,
    duration: duration * rand(0.7, 1.15),
    delay,
    ease: 'sine.inOut',
  });
}

export function setupFallingLeaves(options = {}) {
  if (prefersReducedMotion()) return () => {};

  const count = Math.max(5, Math.min(12, Math.floor(options.count ?? 9)));

  const container = document.createElement('div');
  container.className = 'leaves-layer';
  container.setAttribute('aria-hidden', 'true');
  document.body.appendChild(container);

  let raf = 0;
  let size = { width: window.innerWidth, height: window.innerHeight };

  const updateSize = () => {
    size = { width: window.innerWidth, height: window.innerHeight };
  };

  const onResize = () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(updateSize);
  };

  window.addEventListener('resize', onResize, { passive: true });

  const leaves = Array.from({ length: count }, () => {
    const el = makeLeafEl();
    container.appendChild(el);
    animateLeaf(el, size);
    return el;
  });

  return () => {
    window.removeEventListener('resize', onResize);
    cancelAnimationFrame(raf);
    leaves.forEach((el) => gsap.killTweensOf(el));
    container.remove();
  };
}

