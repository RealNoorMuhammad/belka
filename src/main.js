import './style.css';
import { createNavbar, setupNavbar } from './components/navbar.js';
import { createHeroSection } from './components/heroSection.js';
import { createStorySection } from './components/storySection.js';
import { createHowToBuySection } from './components/howToBuySection.js';
import { createUnderSection } from './components/underSection.js';
import { createFooterSection } from './components/footerSection.js';
import { setupFallingLeaves } from './components/fallingLeaves.js';
import { setupCustomCursor } from './components/customCursor.js';
import { setupHeroCtaMotion } from './components/heroCtaMotion.js';

document.querySelector('#app').innerHTML = `
  ${createNavbar()}
  <main class="page-content">
    ${createHeroSection()}
    ${createStorySection()}
    ${createHowToBuySection()}
    ${createUnderSection()}
  </main>
  ${createFooterSection()}
`;

setupNavbar();
setupFallingLeaves({ count: 9 });
setupCustomCursor();
setupHeroCtaMotion();
