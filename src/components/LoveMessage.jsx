import { Heart } from 'lucide-react'

export default function LoveMessage() {
  return (
    <section className="from-me-section section-shell">
      <div className="from-me-card reveal">
        <div className="from-me-stamp"><Heart size={19} fill="currentColor" /></div>
        <span className="eyebrow">A note from my heart</span>
        <h2>From Me <em>to You</em></h2>
        <p className="from-me-lead">
          Mere pyaare se Kuchchu-Puchuchu,
        </p>
        <p className="from-me-message">
          Thank you for making me feel loved, cared for, and safe enough to dream
          about all the tomorrows. You helped me find my smile again. No matter
          what life brings, I want to keep choosing you — one ordinary, beautiful
          day at a time.
        </p>
        <div className="from-me-signoff">Hamesha aapki, <span>Shivani</span> <Heart size={15} fill="currentColor" /></div>
      </div>
      <div className="from-me-decoration decoration-left" aria-hidden="true">❀</div>
      <div className="from-me-decoration decoration-right" aria-hidden="true">♡</div>
    </section>
  )
}
