import step1Image from '../assets/1.png';
import step2Image from '../assets/2.png';
import step3Image from '../assets/3.png';

export function createHowToBuySection() {
  return `
    <section id="buy" class="buy-section" aria-labelledby="buy-heading">
      <div class="buy-section__header">
        <h2 id="buy-heading" class="buy-section__title">How To Buy</h2>
      </div>

      <div class="buy-section__steps">
        <article class="buy-card">
          <div class="buy-card__lead">
            <div class="buy-card__media">
              <img src="${step1Image}" alt="" />
            </div>
            <span class="buy-card__step">01</span>
          </div>
          <h3 class="buy-card__heading">Get a wallet</h3>
          <p class="buy-card__text">
           We recommend Phantom.
          </p>
        </article>

        <article class="buy-card">
          <div class="buy-card__lead">
            <div class="buy-card__media">
              <img src="${step2Image}" alt="" />
            </div>
            <span class="buy-card__step">02</span>
          </div>
          <h3 class="buy-card__heading">Get Some SOL</h3>
          <p class="buy-card__text">
         Buy SOL on your favorite exchange and send it to your wallet.
          </p>
        </article>

        <article class="buy-card">
          <div class="buy-card__lead">
            <div class="buy-card__media">
              <img src="${step3Image}" alt="" />
            </div>
            <span class="buy-card__step">03</span>
          </div>
          <h3 class="buy-card__heading"> Swap for $BELKA</h3>
          <p class="buy-card__text">
           Swap SOL for $BELKA on Raydium or Jupiter.
          </p>
        </article>
      </div>

      <div class="buy-section__cta">
      
        <a class="hero-btn hero-btn--ghost" href="#story">Buy $BELKA Now</a>
      </div>
    </section>
  `;
}
