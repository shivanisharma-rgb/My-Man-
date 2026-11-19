import { Heart, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="love-hero section-shell" id="our-story">
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
      <div className="hero-center reveal">
        <span className="hero-kicker"><Sparkles size={14} /> MY FAVOURITE WORDS</span>
        <Heart className="hero-heart" fill="currentColor" strokeWidth={0} aria-hidden="true" />
        <h2>I Love You</h2>
        <p>In every little moment, in every version of forever.</p>
        <span className="hero-signature">more than words can say</span>
      </div>
      <span className="hero-side-note">you &amp; me, always</span>
      <span className="hero-vertical-label">A LOVE NOTE · 01</span>
    </section>
  )
}
