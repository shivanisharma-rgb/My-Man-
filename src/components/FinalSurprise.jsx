import { useState } from 'react'
import { ArrowRight, Heart, Sparkles, X } from 'lucide-react'

const promises = [
  'To keep choosing you, in the little moments and the big ones.',
  'To make our home a place full of laughter, trust, and warmth.',
  'To listen, to grow, and to always find our way back to us.',
  'To collect a lifetime of stories we will tell with a smile.',
]

export default function FinalSurprise() {
  const [keptPromises, setKeptPromises] = useState([])
  const [surpriseOpen, setSurpriseOpen] = useState(false)

  const togglePromise = (index) => {
    setKeptPromises((current) => (
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index]
    ))
  }

  return (
    <section className="final-section section-shell">
      <div className="final-content reveal">
        <span className="eyebrow">A promise for every tomorrow</span>
        <h2>The Ones You'll<br /><em>Always Remember</em></h2>
        <p className="final-intro">Some promises are little love notes to the future.<br />Tap each one to keep it close.</p>
        <div className="promise-list">
          {promises.map((promise, index) => {
            const kept = keptPromises.includes(index)
            return (
              <button
                className={`promise-item ${kept ? 'promise-kept' : ''}`}
                key={promise}
                onClick={() => togglePromise(index)}
                aria-pressed={kept}
              >
                <span className="promise-number">0{index + 1}</span>
                <span>{promise}</span>
                <Heart size={17} fill={kept ? 'currentColor' : 'none'} />
              </button>
            )
          })}
        </div>
        <button className="button button-dark final-button" onClick={() => setSurpriseOpen(true)}>
          One last little surprise <Sparkles size={16} />
        </button>
        <div className="final-signoff">With all my love, always <Heart size={13} fill="currentColor" /></div>
      </div>
      {surpriseOpen && (
        <div className="surprise-overlay" role="dialog" aria-modal="true" aria-labelledby="surprise-title">
          <button className="surprise-close" onClick={() => setSurpriseOpen(false)} aria-label="Close surprise"><X size={20} /></button>
          <div className="surprise-hearts" aria-hidden="true">
            {Array.from({ length: 18 }, (_, index) => (
              <span
                key={index}
                style={{
                  left: `${(index * 37 + 5) % 100}%`,
                  fontSize: `${12 + (index % 4) * 8}px`,
                  animationDuration: `${9 + (index % 5) * 2}s`,
                  animationDelay: `${index * -1}s`,
                }}
              >
                ♥
              </span>
            ))}
          </div>
          <div className="surprise-message">
            <span className="surprise-label"><Sparkles size={15} /> JUST FOR YOU <Sparkles size={15} /></span>
            <Heart className="surprise-heart" size={44} fill="currentColor" />
            <h2 id="surprise-title">You are my<br /><em>always.</em></h2>
            <p>No matter where life takes us, my heart will keep finding its way home to you.</p>
            <strong>I love you so, so much. ❤️</strong>
            <span className="surprise-from">Hamesha aapki, Shivani</span>
            <button className="button button-light" onClick={() => setSurpriseOpen(false)}>Keep this in my heart <ArrowRight size={15} /></button>
          </div>
        </div>
      )}
    </section>
  )
}
