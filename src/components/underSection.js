import underImage from '../assets/under.png';

export function createUnderSection() {
  return `
    <section class="under-section" aria-label="Promotional banner">
      <img class="under-section__image" src="${underImage}" alt="Belka banner" loading="lazy" decoding="async" />
    </section>
  `;
}
