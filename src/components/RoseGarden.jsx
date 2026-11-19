import { Heart } from 'lucide-react'

const roses = [
  { className: 'rose-one', label: 'a blush rose' },
  { className: 'rose-two', label: 'a soft pink rose' },
  { className: 'rose-three', label: 'a cream rose' },
  { className: 'rose-four', label: 'a rose-pink bloom' },
  { className: 'rose-five', label: 'a pale rose' },
]

function Rose({ className, label }) {
  return (
    <div className={`rose ${className}`} role="img" aria-label={label}>
      <div className="rose-bloom">
        <i /><i /><i /><i /><i /><i /><i />
        <span />
      </div>
      <span className="rose-stem" />
      <span className="rose-leaf rose-leaf-left" />
      <span className="rose-leaf rose-leaf-right" />
    </div>
  )
}

export default function RoseGarden() {
  return (
    <section className="rose-section section-shell">
      <div className="rose-heading reveal">
        <span className="eyebrow">For all the ways you make life lovely</span>
        <h2>A garden, <em>just for you.</em></h2>
        <p>If I could, I'd give you a rose for every reason I love you.</p>
      </div>
      <div className="rose-garden reveal">
        {roses.map((rose) => <Rose key={rose.className} {...rose} />)}
        <div className="garden-ground" />
      </div>
      <div className="garden-footnote"><Heart size={13} fill="currentColor" /> Picked with love, kept forever</div>
    </section>
  )
}
