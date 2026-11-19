import { Heart, MoveUpRight } from 'lucide-react'

const photos = [
  {
    image: '/images/our-hands.png',
    alt: 'Shivani and her partner holding hands',
    caption: 'Right here, holding on',
    date: 'a moment to keep',
  },
  {
    image: '/images/holding-hands.png',
    alt: 'Shivani and her partner holding hands on a cozy day',
    caption: 'Your hand feels like home',
    date: 'my favourite place',
  },
  {
    image: '/images/our-selfie.png',
    alt: 'Shivani and her partner smiling together in a selfie',
    caption: 'My favourite person, always',
    date: 'one happy little moment',
  },
  {
    image: '/images/our-adventure.png',
    alt: 'Shivani and her partner sitting together on a bus with their shoes side by side',
    caption: 'All our little adventures',
    date: 'more memories to come',
  },
]

export default function Memories() {
  return (
    <section className="memories-section section-shell">
      <div className="memories-heading reveal">
        <span className="eyebrow">Little moments, big feelings</span>
        <h2>Our Beautiful <em>Memories</em></h2>
        <p>And all the lovely moments still waiting for us.</p>
      </div>
      <div className="memory-grid">
        {photos.map((photo, index) => (
          <article className={`memory-card memory-card-${index + 1} reveal`} key={photo.image}>
            <div className="polaroid-photo">
              <img
                src={photo.image}
                alt={photo.alt}
                loading="lazy"
              />
              <span className="photo-heart"><Heart size={15} fill="currentColor" /></span>
            </div>
            <p className="memory-caption">{photo.caption}</p>
            <span className="memory-date">{photo.date}</span>
            <span className="memory-number">0{index + 1} <MoveUpRight size={11} /></span>
          </article>
        ))}
      </div>
      <p className="gallery-note">Our little moments, kept close. And so many more still waiting for us.</p>
    </section>
  )
}
