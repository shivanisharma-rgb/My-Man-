import { Heart } from 'lucide-react'

const blossoms = Array.from({ length: 36 }, (_, index) => {
  const angle = (index / 36) * Math.PI * 2
  const heartRadius = 104 * (1 - Math.sin(angle))
  return {
    id: index,
    x: 180 + Math.cos(angle) * heartRadius,
    y: 138 + Math.sin(angle) * heartRadius * 0.86,
    size: 10 + (index % 4) * 2,
    delay: `${(index % 9) * 0.13}s`,
    tone: index % 5 === 0 ? 'blossom-light' : index % 4 === 0 ? 'blossom-deep' : 'blossom-pink',
  }
})

const petals = Array.from({ length: 9 }, (_, index) => index)

export default function HeartTree() {
  return (
    <section className="tree-section section-shell">
      <div className="section-heading reveal">
        <span className="eyebrow">A little piece of forever</span>
        <h2>Love grows <em>here.</em></h2>
        <p>Rooted in every kind thing you do, blooming a little more every day.</p>
      </div>
      <div className="tree-art reveal" role="img" aria-label="A heart-shaped tree blooming with pink flowers">
        <div className="tree-sun-glow" />
        <svg className="tree-trunk" viewBox="0 0 360 350" aria-hidden="true">
          <path d="M178 340 C174 291 189 262 179 226 C172 197 183 174 180 145" />
          <path d="M180 238 C151 210 128 197 111 166" />
          <path d="M183 219 C210 193 233 181 246 151" />
          <path d="M176 194 C155 173 151 152 147 130" />
          <path d="M185 184 C201 163 204 143 207 120" />
          <path d="M160 340 C170 330 188 330 201 340" />
        </svg>
        {blossoms.map((blossom) => (
          <Heart
            key={blossom.id}
            className={`tree-blossom ${blossom.tone}`}
            fill="currentColor"
            strokeWidth={0}
            style={{
              left: `calc(50% + ${blossom.x - 180}px)`,
              top: `${blossom.y}px`,
              width: `${blossom.size}px`,
              height: `${blossom.size}px`,
              animationDelay: blossom.delay,
            }}
          />
        ))}
        {petals.map((petal) => (
          <span
            key={petal}
            className="falling-petal"
            style={{ left: `${12 + petal * 10}%`, animationDelay: `${petal * -1.2}s` }}
          />
        ))}
      </div>
      <p className="tree-quote reveal"><span>“</span> Wherever you are, that's where my heart feels at home. <Heart size={13} fill="currentColor" /></p>
    </section>
  )
}
