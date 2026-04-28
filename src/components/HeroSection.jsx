import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import { useState } from 'react'
import heroSquirrel from '../assets/herosquirrel.png'
import heroSquirrelPressed from '../assets/herosquirrel2.png'
import nutLeft from '../assets/nutleft.png'
import nutRight from '../assets/nutright.png'
import buyButton from '../assets/button.png'
import bubbleDesktop from '../assets/bubbledesktop.png'
import heroBottomImage from '../assets/bottom image.png'
import './HeroSection.css'

const DEX_SCREENER_URL =
  'https://dexscreener.com/solana/2rmm8boxpamwulwouacxjym5rara5fsugc3fe4k76qj8'

function HeroSection() {
  const { scrollY } = useScroll()
  const reduceMotion = useReducedMotion()
  const [isSquirrelPressed, setIsSquirrelPressed] = useState(false)

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
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.5}
              dragMomentum={false}
              dragTransition={{ bounceStiffness: 520, bounceDamping: 20 }}
              whileTap={{ scale: 1.08 }}
            />
          </div>
          <div className="hero-nut-anchor hero-nut-anchor--right">
            <motion.img
              src={nutRight}
              alt=""
              className="hero-nut hero-nut--right"
              style={{ y: nutRightY, x: nutRightX }}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.5}
              dragMomentum={false}
              dragTransition={{ bounceStiffness: 520, bounceDamping: 20 }}
              whileTap={{ scale: 1.08 }}
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
              src={isSquirrelPressed ? heroSquirrelPressed : heroSquirrel}
              alt=""
              className="hero-squirrel"
              initial={{ y: '-34vh', opacity: 0.2, scale: 0.92 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: 1.05,
                ease: [0.18, 0.85, 0.22, 1],
                delay: 0.08,
              }}
              onPointerDown={() => setIsSquirrelPressed(true)}
              onPointerUp={() => setIsSquirrelPressed(false)}
              onPointerCancel={() => setIsSquirrelPressed(false)}
              onPointerLeave={() => setIsSquirrelPressed(false)}
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
