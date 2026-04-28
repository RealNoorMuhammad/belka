import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import heroSquirrel from '../assets/herosquirrel.png'
import nutLeft from '../assets/nutleft.png'
import nutRight from '../assets/nutright.png'
import buyButton from '../assets/button.png'
import bubbleDesktop from '../assets/bubbledesktop.png'
import heroBottomImage from '../assets/bottom image.png'
import './HeroSection.css'

const DEX_SCREENER_URL =
  'https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=4df1wZoygsynEZ6XmpcoabrVwv7nBgjHLyCns5xApump'

function HeroSection() {
  const { scrollY } = useScroll()
  const reduceMotion = useReducedMotion()

  const leftParallax = reduceMotion ? 0 : 0.26
  const rightParallax = reduceMotion ? 0 : 0.34
  const leftDrift = reduceMotion ? 0 : 0.04
  const rightDrift = reduceMotion ? 0 : -0.03

  const nutLeftY = useTransform(scrollY, (y) => -y * leftParallax)
  const nutRightY = useTransform(scrollY, (y) => -y * rightParallax)
  const nutLeftX = useTransform(scrollY, (y) => y * leftDrift)
  const nutRightX = useTransform(scrollY, (y) => y * rightDrift)

  return (
    <main className="hero-page">
      <section className="hero-section" aria-label="Belka hero section">
        <div className="hero-nuts-layer" aria-hidden="true">
          <div className="hero-nut-anchor hero-nut-anchor--left">
            <motion.img
              src={nutLeft}
              alt=""
              className="hero-nut hero-nut--left"
              style={{ y: nutLeftY, x: nutLeftX }}
            />
          </div>
          <div className="hero-nut-anchor hero-nut-anchor--right">
            <motion.img
              src={nutRight}
              alt=""
              className="hero-nut hero-nut--right"
              style={{ y: nutRightY, x: nutRightX }}
            />
          </div>
        </div>
        <div className="hero-bubble-layer" aria-hidden="true">
          <div className="hero-bubble-anchor">
            <motion.img
              src={bubbleDesktop}
              alt=""
              className="hero-bubble-deco"
              initial={
                reduceMotion
                  ? { scale: 1, opacity: 1, filter: 'blur(0px)' }
                  : { scale: 1.38, opacity: 0.25, filter: 'blur(10px)' }
              }
              animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : {
                      duration: 1,
                      delay: 0.18,
                      ease: [0.22, 1, 0.36, 1],
                    }
              }
              style={{ transformOrigin: '55% 62%' }}
            />
          </div>
        </div>
        <div className="hero-bottom-art-layer" aria-hidden="true">
          <img src={heroBottomImage} alt="" className="hero-bottom-art" />
        </div>
        <div className="hero-squirrel-layer" aria-hidden="true">
          <div className="hero-squirrel-anchor">
            <motion.img
              src={heroSquirrel}
              alt=""
              className="hero-squirrel"
              initial={{ y: '-34vh', opacity: 0.2, scale: 0.92 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: 1.05,
                ease: [0.18, 0.85, 0.22, 1],
                delay: 0.08,
              }}
            />
          </div>
        </div>
      </section>
      <a
        className="hero-buy-button"
        href={DEX_SCREENER_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={buyButton} alt="Buy $BELKA on Dexscreener" />
      </a>
    </main>
  )
}

export default HeroSection
