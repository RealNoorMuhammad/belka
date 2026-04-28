import { motion, useReducedMotion } from 'motion/react'
import socialSquirrel from '../assets/squirrelsocial.png'
import twitterButton from '../assets/twitterbutton.png'
import telegramButton from '../assets/telegrambutton.png'
import dexscreenerButton from '../assets/dexscreenerbutton.png'
import './Social.css'

const SOCIAL_LINKS = [
  {
    id: 'twitter',
    label: 'X (Twitter) link',
    href: 'https://x.com/belka_sol',
    image: twitterButton,
  },
  {
    id: 'telegram',
    label: 'Telegram link',
    href: 'https://t.me/belka_portal',
    image: telegramButton,
  },
  {
    id: 'dexscreener',
    label: 'Dexscreener link',
    href: 'https://dexscreener.com/solana/2rmm8boxpamwulwouacxjym5rara5fsugc3fe4k76qj8',
    image: dexscreenerButton,
  },
]

function Social() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="social-section" aria-label="Belka socials">
      <div className="social-list-wrap">
        {SOCIAL_LINKS.map((item) => (
          <a
            key={item.id}
            className="social-button"
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
          >
            <img src={item.image} alt="" className="social-button-image" />
          </a>
        ))}
      </div>
      <div className="social-squirrel-wrap" aria-hidden="true">
        <motion.img
          src={socialSquirrel}
          alt=""
          className="social-squirrel"
          initial={reduceMotion ? { x: 0, opacity: 1 } : { x: 120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.08 }
          }
          drag="x"
          dragConstraints={{ left: -2, right: 2 }}
          dragElastic={0.08}
          dragTransition={{ bounceStiffness: 700, bounceDamping: 26 }}
        />
      </div>
    </section>
  )
}

export default Social
