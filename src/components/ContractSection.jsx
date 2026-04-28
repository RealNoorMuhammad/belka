import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './ContractSection.css'

gsap.registerPlugin(ScrollTrigger)

const CONTRACT_TEXT = '4df1wZoygsynEZ6XmpcoabrVwv7nBgjHLyCns5xApump'

function ContractSection() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const contractRef = useRef(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current
    const contract = contractRef.current
    if (!section || !title || !contract) return undefined

    const context = gsap.context(() => {
      gsap.set(contract, { y: 90, opacity: 0 })

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=110%',
          scrub: 1,
          pin: true,
        },
      })

      timeline
        .to(title, { scale: 1.08, opacity: 1, duration: 0.35, ease: 'power2.out' })
        .to(contract, { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' }, 0.15)
        .to(contract, { letterSpacing: '0.08em', duration: 0.25, ease: 'sine.inOut' }, 0.5)
    }, section)

    return () => context.revert()
  }, [])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_TEXT)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1200)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section ref={sectionRef} className="contract-section" aria-label="Contract address section">
      <div className="contract-content">
        <h2 ref={titleRef} className="contract-title">
          Contract Address
        </h2>
        <button
          ref={contractRef}
          type="button"
          className="contract-text contract-copy-button"
          onClick={handleCopy}
          aria-label="Copy contract address"
        >
          {CONTRACT_TEXT}
        </button>
        <p className="contract-copy-hint" aria-live="polite">
          {copied ? 'Copied!' : 'Click address to copy'}
        </p>
      </div>
    </section>
  )
}

export default ContractSection
