import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import howToBuyOnLeft from '../assets/howtobuyonleft.png'
import './HowToBuySection.css'

const STEPS = [
  'Set up a Solana wallet and fund it with SOL.',
  'Open Jupiter and select BELKA token pair.',
  'Swap, confirm transaction, and hold your BELKA.',
]

function HowToBuySection() {
  const sectionRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const leftToRightX = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    ['-26vw', '0vw', '0vw']
  )
  const floatY = useTransform(scrollYProgress, [0, 0.5, 1], ['0px', '-10px', '0px'])
  const rotate = useTransform(scrollYProgress, [0, 0.45, 1], ['-5deg', '0deg', '0deg'])

  return (
    <section
      ref={sectionRef}
      className="how-to-buy-section"
      aria-label="How to buy section"
    >
      <div className="how-to-buy-left-art-layer" aria-hidden="true">
        <motion.img
          src={howToBuyOnLeft}
          alt=""
          className="how-to-buy-left-art"
          style={
            reduceMotion
              ? undefined
              : {
                  x: leftToRightX,
                  y: floatY,
                  rotate,
                }
          }
        />
      </div>
      <div className="how-to-buy-inner">
        <h2 className="how-to-buy-title">How To Buy</h2>
        <div className="how-to-buy-steps">
          {STEPS.map((step, index) => (
            <article key={step} className="how-to-buy-step">
              <span className="how-to-buy-step-index">{index + 1}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowToBuySection
