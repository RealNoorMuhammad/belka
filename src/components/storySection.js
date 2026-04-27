import aboutImage from '../assets/about.png';

export function createStorySection() {
  return `
    <section id="about" class="story-section story-section--about">
      <div class="story-section__panel story-section__panel--left">
        <img src="${aboutImage}" alt="About section visual" />
      </div>

      <div class="story-section__panel story-section__panel--center">
        <h2 class="story-section__title">What is Belka?</h2>
        <p class="story-section__line">
          While markets move up and down, Belka stays in flow, turning every moment into energy and movement.
        </p>
        <p class="story-section__line story-section__line--space">
          Built on Solana for speed and simplicity, Belka represents a community that stays active, positive, and
          unshaken by volatility.
        </p>
        <p class="story-section__highlight">No stress. No pause. Just keep dancing.</p>


      
      </div>
    </section>
  `;
}
