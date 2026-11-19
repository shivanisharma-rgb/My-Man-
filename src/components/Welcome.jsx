import { ArrowDown, Heart } from 'lucide-react'

export default function Welcome({ onOpen, onReadLetter }) {
  const openHeart = () => {
    onOpen?.()
  }

  return (
    <section className="welcome-screen" id="welcome">
      <div className="welcome-grain" aria-hidden="true" />
      <div className="welcome-copy">
        <p className="eyebrow welcome-eyebrow">A little something, just for you</p>
        <h1>Still You,<br /><span>Always You</span></h1>
        <p className="welcome-subtitle">
          For my Kuchchu-Puchuchu — my favourite person, my safest place,
          and the sweetest part of every day.
        </p>
        <div className="welcome-heart" aria-hidden="true">
          <Heart fill="currentColor" strokeWidth={0} />
          <span />
        </div>
        <button className="button button-dark" onClick={openHeart}>
          Open My Heart <ArrowDown size={16} />
        </button>
        <button className="welcome-letter-link" onClick={onReadLetter}>
          Read the letter I wrote for you
        </button>
      </div>
      <div className="welcome-note">A love letter in little chapters <span>✦</span></div>
      <button className="welcome-skip" onClick={openHeart} aria-label="Open the next page">
        <span>Open the next page</span><ArrowDown size={15} />
      </button>
    </section>
  )
}
