import patriotFooterImg from '../assets/1906.png';
import freeFooterImg from '../assets/free-footer.png';

const twitterSvg = `<svg class="site-footer__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`;

/** Same paths as `FaTelegram` in react-icons/fa (Font Awesome Brands). */
const telegramSvg = `<svg class="site-footer__icon site-footer__icon--telegram" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="26" height="26" aria-hidden="true" role="img"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.8-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l240-92.5c11.1-4.4 20.8 2.7 17.2 19.5z"/></svg>`;

export function createFooterSection() {
  return `
    <footer class="site-footer">
      <div class="site-footer__inner">
        <div class="site-footer__col site-footer__col--left">
          <img
            class="site-footer__img site-footer__img--patriot"
            src="${patriotFooterImg}"
            alt="Patriot"
            decoding="async"
          />
        </div>
        <div class="site-footer__col site-footer__col--center">
        
        </div>
        <div class="site-footer__col site-footer__col--right">
          <p class="site-footer__headline">Join the moment</p>
          <div class="site-footer__social">
            <a class="site-footer__social-link" href="https://x.com/belka_sol" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              ${twitterSvg}
            </a>
            <a class="site-footer__social-link" href="https://t.me/" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
              ${telegramSvg}
            </a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
