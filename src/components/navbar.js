const navItems = [
 
];

const navLogoUrl = new URL('../assets/belka-navlogo.png', import.meta.url).href;
const dexScreenerLogoUrl = new URL(
  '../assets/HIMACZhOn7YJ71dTu-actor-eoF4jxJZItdkP33r9-vZJCW562vk-dexpng.webp',
  import.meta.url,
).href;

function iconLink({ href, label, icon }) {
  return `
    <a class="navbar__social" href="${href}" target="_blank" rel="noreferrer" aria-label="${label}">
      ${icon}
    </a>
  `;
}

const telegramIcon = `
  <svg class="navbar__social-icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm4.62 6.63-1.64 7.74c-.12.55-.45.69-.91.43l-2.52-1.86-1.22 1.18c-.13.14-.25.26-.52.26l.18-2.57 4.69-4.24c.2-.18-.05-.28-.31-.1l-5.8 3.66-2.5-.78c-.54-.17-.55-.54.11-.8l9.74-3.76c.45-.17.84.11.7.84Z"/>
  </svg>
`;

const twitterIcon = `
  <svg class="navbar__social-icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
    <path fill="currentColor" d="M18.25 2H21.5l-7.12 8.14L22.75 22h-6.56l-5.13-6.73L5.17 22H1.92l7.62-8.7L1.5 2h6.73l4.64 6.11L18.25 2Zm-1.14 18h1.8L7.25 3.9h-1.9L17.11 20Z"/>
  </svg>
`;

const dexScreenerIcon = `
  <img class="navbar__social-icon navbar__social-icon--image" src="${dexScreenerLogoUrl}" alt="" loading="lazy" decoding="async" />
`;

export function createNavbar() {
  const links = navItems
    .map(
      (item) =>
        `<li class="navbar__item"><a class="navbar__link" href="${item.href}">${item.label}</a></li>`,
    )
    .join('');

  return `
    <header class="navbar-wrap">
      <nav class="navbar" aria-label="Main navigation">
        <a href="#home" class="navbar__brand" aria-label="Belka home">
          <img class="navbar__logo" src="${navLogoUrl}" alt="Belka logo" />
        </a>

        <button class="navbar__toggle" type="button" aria-expanded="false" aria-controls="mobile-menu">
          <span></span>
          <span></span>
          <span></span>
          <span class="sr-only">Toggle navigation menu</span>
        </button>

        <ul class="navbar__links" role="list">
          ${links}
        </ul>

        <div class="navbar__right">
          <a class="navbar__cta" href="https://raydium.io/swap/?inputMint=4df1wZoygsynEZ6XmpcoabrVwv7nBgjHLyCns5xApump&outputMint=sol">BUY $BELKA</a>
          <div class="navbar__socials" aria-label="Social links">
            ${iconLink({ href: '#', label: 'Telegram', icon: telegramIcon })}
            ${iconLink({ href: '#', label: 'https://x.com/belka_sol', icon: twitterIcon })}
            ${iconLink({ href: 'https://dexscreener.com/solana/2RMm8BoXPAMwuLwouAcxJym5rAra5FsuGc3Fe4k76qJ8', label: 'Dexscreener', icon: dexScreenerIcon })}
          </div>
        </div>
      </nav>
    </header>

    <div class="mobile-menu" id="mobile-menu" aria-hidden="true">
      <button class="mobile-menu__close" type="button" aria-label="Close navigation menu">
        <span></span>
        <span></span>
      </button>
      <div class="mobile-menu__inner">
        <ul class="mobile-menu__links">
          ${links}
        </ul>
        <a class="mobile-menu__cta" href="https://raydium.io/swap/?inputMint=4df1wZoygsynEZ6XmpcoabrVwv7nBgjHLyCns5xApump&outputMint=sol">BUY $BELKA</a>
        <div class="mobile-menu__socials" aria-label="Social links">
          ${iconLink({ href: '#', label: 'Telegram', icon: telegramIcon })}
          ${iconLink({ href: 'https://x.com/belka_sol', label: 'X (Twitter)', icon: twitterIcon })}
          ${iconLink({ href: 'https://dexscreener.com/solana/2RMm8BoXPAMwuLwouAcxJym5rAra5FsuGc3Fe4k76qJ8', label: 'Dexscreener', icon: dexScreenerIcon })}
        </div>
      </div>
    </div>
  `;
}

export function setupNavbar() {
  const toggleButton = document.querySelector('.navbar__toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeButton = document.querySelector('.mobile-menu__close');
  const closeOnClick = document.querySelectorAll('.mobile-menu a');

  if (!toggleButton || !mobileMenu) return;

  const setOpenState = (isOpen) => {
    document.body.classList.toggle('menu-open', isOpen);
    toggleButton.setAttribute('aria-expanded', String(isOpen));
    mobileMenu.setAttribute('aria-hidden', String(!isOpen));
  };

  toggleButton.addEventListener('click', () => {
    const isOpen = toggleButton.getAttribute('aria-expanded') === 'true';
    setOpenState(!isOpen);
  });

  closeButton?.addEventListener('click', () => setOpenState(false));

  closeOnClick.forEach((link) => {
    link.addEventListener('click', () => setOpenState(false));
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      setOpenState(false);
    }
  });
}
