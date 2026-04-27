import heroSectionDesktopImage from '../assets/herosectiondesktop.png';

export function createHeroSection() {
  return `
    <section id="home" class="hero-section">
      <div class="hero-section__media">
        <img src="${heroSectionDesktopImage}" alt="Hero section visual" />
      </div>

      <a class="hero-section__cta hero-section__cta--hidden" href="#buy">BUY $BELKA</a>
    </section>
  `;
}
