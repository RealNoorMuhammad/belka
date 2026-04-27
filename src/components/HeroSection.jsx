import { motion } from 'motion/react'
import heroSquirrel from '../assets/herosquirrel.png'
import './HeroSection.css'

function HeroSection() {
  return (
    <main className="hero-page">
      <section className="hero-section" aria-label="Belka hero section">
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
    </main>
  )
}

export default HeroSection
