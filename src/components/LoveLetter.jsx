import { useState } from 'react'
import { Heart, RotateCcw, X } from 'lucide-react'

const letterParagraphs = [
  'Hi mere pyaare se Kuchchu-Puchuchu! 🥹❤️',
  'Sabse pehle toh main bas yahi chahti hoon ki aap hamesha khush raho. Aap mere liye mera sab kuch ho. Mera itna care karne ke liye, meri itni fikar karne ke liye aur bina mere kahe meri saari chhoti-badi wishes poori karne ke liye thank you so much.',
  'Aap hamesha mere saath rahe. Mere ek baar bolne par mujhse milne aaye, mera itna dhyan rakha aur mujhe itna pyaar diya. Aapko pata hai na, main aapse bahut bahut zyada pyaar karti hoon. I Love You So Much! ❤️',
  'Pata hai, main kabhi-kabhi sochti hoon ki jab hamari shaadi hogi na, tab hum apni in saari memories ko dobara dekhenge. Tab hum yaad karenge ki humne kahan se shuru kiya tha aur aaj hum apni life mein kahan pahunch gaye hain.',
  'Aur pata hai, hum ye saari memories apne bachchon ko bhi dikhayenge. Unhe batayenge ki unke parents ek-dusre se kitna pyaar karte the. Main unhe bataungi ki mujhe duniya ka sabse achha insaan mila hai. ❤️',
  'Aur hum apni strong commitment, apne pyaar aur ek-dusre par bharose se ghar walon ko bhi mana lenge. Aap kisi bhi cheez ki tension mat lena. Sab mujh par chhod dena. Bas mujh par hamesha trust karna. Main apni taraf se kabhi kuch galat nahi hone dungi.',
  'Main aapko kabhi akela feel nahi hone dungi. Life mein koi bhi situation aaye, main har situation mein aapke saath rahungi. Koi kuch bhi bole, main hamesha aapki care karungi, aapka saath dungi aur aapse itna pyaar karungi na ki ab mat hi puchho! ❤️',
  'Kabhi-kabhi mujhe lagta hai ki aapne pichhle janam mein kaun se achhe karm kiye the jo main aapko mil gayi! 😂😂',
  'Achha achha, joke tha! ❤️',
  'Par sach mein, ye letter likhte hue main bahut emotional ho rahi hoon. Pata nahi kyun, aankhon mein aansu aa rahe hain, par ye aansu khushi ke hain. Main sach mein bahut khush hoon ki aap meri life mein ho.',
  'Aap jab bhi mujhse milne aaoge na, tab main aapki nazar utaarungi. 🥹❤️',
  'Aap bahut hi zyada achhe ho. Aapne mujhe theek kiya hai, mujhe dobara khush rehna sikhaya hai aur meri saari buri yaadon ko peeche chhodne mein meri help ki hai.',
  'Thank you meri saari buri yaadon ko mitane ke liye. Thank you mujhe itna pyaar dene ke liye. Thank you mera hone ke liye aur meri life mein aane ke liye.',
  'Life time tak mere dil mein aapke liye bahut kuch hai, jo main aapse milkar bataungi. Par problem ye hai ki main aapke saamne aate hi bol hi nahi paati. Pata nahi kya ho jata hai mujhe! 😂',
  'PAR KOI NAHI!',
  'Abki baar jab milenge na, toh main apne dil ki saari baatein bol dungi. Jo bhi mere dil mein hai, sab bataungi. Is baar kuch bhi nahi chhupaungi. ❤️',
  'Bas aap hamesha aise hi mere saath rehna. Hum dono milkar apni ek beautiful si duniya banayenge, jahan bahut saara pyaar hoga, trust hoga, masti hogi aur dher saari memories hongi.',
]

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="letter-section section-shell" id="love-letter">
      <div className="letter-heading reveal">
        <span className="eyebrow">Happy Men's Day, my love!</span>
        <h2>Mere Pyaare Se <em>Kuchchu-Puchuchu Ke Naam...</em></h2>
        <p>Maine aapke liye dil se kuch likha hai. Letter kholkar poora padhna. ❤️</p>
      </div>
      {!isOpen ? (
        <button className="envelope-button reveal" onClick={() => setIsOpen(true)} aria-label="Open your love letter">
          <span className="envelope-shadow" />
          <span className="envelope">
            <span className="envelope-back" />
            <span className="envelope-letter-preview">
              <Heart size={20} fill="currentColor" />
              <span>Mere pyaare se Kuchchu-Puchuchu</span>
            </span>
            <span className="envelope-flap" />
            <span className="envelope-front" />
            <span className="envelope-seal"><Heart size={18} fill="currentColor" /></span>
          </span>
          <span className="envelope-hint">Tap to open your letter</span>
        </button>
      ) : (
        <article className="letter-paper" aria-label="A letter from Shivani">
          <button className="letter-close" onClick={() => setIsOpen(false)} aria-label="Close letter"><X size={19} /></button>
          <div className="letter-topline"><span>HAPPY MEN'S DAY, MY LOVE!</span><Heart size={16} fill="currentColor" /></div>
          <h3>Mere Pyaare Se<br /><em>Kuchchu-Puchuchu Ke Naam...</em></h3>
          <div className="letter-copy">
            {letterParagraphs.map((paragraph, index) => (
              <p className={index === 0 ? 'letter-greeting' : ''} key={paragraph}>{paragraph}</p>
            ))}
            <p className="letter-bold">I LOVE YOU SO MUCH, MY DEAR HUSBAND! ❤️🥹</p>
            <p>Aap sirf mere pyaar nahi, meri happiness, meri strength aur mera favourite person ho.</p>
            <p><strong>Thank you for being mine. Thank you for choosing me. Thank you for everything.</strong></p>
            <p className="letter-bold">LOTS OF LOVE TO YOU! ❤️</p>
            <p className="letter-signature">Hamesha aapki,<br /><span>Aapki Shivani ❤️🫂</span></p>
          </div>
          <button className="letter-replay" onClick={() => setIsOpen(false)}><RotateCcw size={14} /> Fold the letter</button>
        </article>
      )}
    </section>
  )
}
