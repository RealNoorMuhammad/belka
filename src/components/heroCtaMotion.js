import { animate } from 'motion';

function prefersReducedMotion() {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
}

function isDesktop() {
  return window.matchMedia?.('(min-width: 901px)')?.matches ?? window.innerWidth > 900;
}

function getRect(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left,
    top: rect.top,
    width: rect.width,
    height: rect.height,
  };
}

export function setupHeroCtaMotion() {
  const navCta = document.querySelector('.navbar__cta');
  const heroCta = document.querySelector('.hero-section__cta');
  const heroSection = document.querySelector('.hero-section');

  if (!navCta || !heroCta || !heroSection) return;

  let hasMoved = false;

  const resetToNavbar = () => {
    hasMoved = false;
    navCta.classList.remove('navbar__cta--hidden');
    heroCta.classList.add('hero-section__cta--hidden');
  };

  const onScroll = () => {
    if (hasMoved) return;
    if (!isDesktop()) {
      resetToNavbar();
      return;
    }

    if (window.scrollY < 24) return;

    hasMoved = true;

    if (prefersReducedMotion()) {
      navCta.classList.add('navbar__cta--hidden');
      heroCta.classList.remove('hero-section__cta--hidden');
      return;
    }

    heroCta.classList.remove('hero-section__cta--hidden');
    heroCta.style.opacity = '0';

    const start = getRect(navCta);
    const end = getRect(heroCta);

    const flyer = navCta.cloneNode(true);
    flyer.classList.add('cta-flyer');
    flyer.style.position = 'fixed';
    flyer.style.left = `${start.left}px`;
    flyer.style.top = `${start.top}px`;
    flyer.style.width = `${start.width}px`;
    flyer.style.height = `${start.height}px`;
    flyer.style.margin = '0';
    flyer.style.zIndex = '120';
    flyer.style.transformOrigin = 'center';

    document.body.appendChild(flyer);

    navCta.classList.add('navbar__cta--hidden');

    const dx = end.left - start.left;
    const dy = end.top - start.top;

    animate(
      flyer,
      { x: [0, dx], y: [0, dy], scale: [1, 1.22] },
      { duration: 0.65, easing: [0.22, 1, 0.36, 1] },
    ).finished.then(() => {
      flyer.remove();
      heroCta.style.opacity = '';
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => {
    if (!isDesktop()) resetToNavbar();
  });
}

