import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import heroSquirrel from '../assets/herosquirrel.png'
import nutLeft from '../assets/nutleft.png'
import nutRight from '../assets/nutright.png'
import './HeroSection.css'

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
      <div className="hero-scroll-continuation" aria-hidden="true" />
    </main>
  )
}

export default HeroSection
