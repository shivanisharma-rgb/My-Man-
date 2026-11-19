import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Welcome from './components/Welcome.jsx'
import Hero from './components/Hero.jsx'
import HeartTree from './components/HeartTree.jsx'
import LoveMessage from './components/LoveMessage.jsx'
import RoseGarden from './components/RoseGarden.jsx'
import Memories from './components/Memories.jsx'
import LoveLetter from './components/LoveLetter.jsx'
import FinalSurprise from './components/FinalSurprise.jsx'

const pages = [
  { slug: 'welcome', label: 'Welcome', Component: Welcome },
  { slug: 'love', label: 'I Love You', Component: Hero },
  { slug: 'tree', label: 'Love Tree', Component: HeartTree },
  { slug: 'from-me', label: 'From Me to You', Component: LoveMessage },
  { slug: 'roses', label: 'Rose Garden', Component: RoseGarden },
  { slug: 'memories', label: 'Our Memories', Component: Memories },
  { slug: 'letter', label: 'Love Letter', Component: LoveLetter },
  { slug: 'surprise', label: 'Final Surprise', Component: FinalSurprise },
]

function getPageIndex() {
  const slug = window.location.hash.replace(/^#\/?/, '')
  const index = pages.findIndex((page) => page.slug === slug || (slug === 'love-letter' && page.slug === 'letter'))
  return index < 0 ? 0 : index
}

const hearts = Array.from({ length: 12 }, (_, index) => ({
  id: index,
  left: `${(index * 37 + 8) % 100}%`,
  delay: `${(index % 6) * -2.7}s`,
  duration: `${15 + (index % 5) * 2}s`,
  size: `${10 + (index % 4) * 5}px`,
}))

export default function App() {
  const [pageIndex, setPageIndex] = useState(getPageIndex)
  const page = pages[pageIndex]
  const Page = page.Component

  useEffect(() => {
    const syncPage = () => setPageIndex(getPageIndex())
    window.addEventListener('hashchange', syncPage)
    return () => window.removeEventListener('hashchange', syncPage)
  }, [])

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14 },
    )

    document.querySelectorAll('.reveal').forEach((element) => {
      revealObserver.observe(element)
    })

    return () => revealObserver.disconnect()
  }, [pageIndex])

  const goToPage = (index) => {
    const target = Math.max(0, Math.min(index, pages.length - 1))
    window.location.hash = `/${pages[target].slug}`
  }

  return (
    <>
      <div className="ambient-hearts" aria-hidden="true">
        {hearts.map((heart) => (
          <span
            className="ambient-heart"
            key={heart.id}
            style={{
              left: heart.left,
              animationDelay: heart.delay,
              animationDuration: heart.duration,
              fontSize: heart.size,
            }}
          >
            ♥
          </span>
        ))}
      </div>
      <main className="chapter-stage" key={page.slug}>
        <Page
          onOpen={() => goToPage(1)}
          onReadLetter={() => goToPage(6)}
        />
      </main>
      {pageIndex > 0 && (
        <nav className="page-navigation" aria-label="Page navigation">
          <div className="page-navigation-row">
            <button
              className="page-nav-arrow"
              onClick={() => goToPage(pageIndex - 1)}
              aria-label={`Previous page: ${pages[pageIndex - 1]?.label}`}
            >
              <ArrowLeft size={16} /><span>Back</span>
            </button>
            <span className="page-counter">
              <span>{String(pageIndex).padStart(2, '0')}</span>
              <i> / {String(pages.length - 1).padStart(2, '0')}</i>
              <b>{page.label}</b>
            </span>
            <button
              className="page-nav-arrow page-nav-next"
              onClick={() => goToPage((pageIndex + 1) % pages.length)}
              aria-label={`Next page: ${pages[(pageIndex + 1) % pages.length].label}`}
            >
              <span>{pageIndex === pages.length - 1 ? 'Again' : 'Next'}</span>
              <ArrowRight size={16} />
            </button>
          </div>
          <div className="page-dots" aria-label="Choose a page">
            {pages.slice(1).map((item, index) => (
              <button
                key={item.slug}
                className={`page-dot ${pageIndex === index + 1 ? 'page-dot-active' : ''}`}
                onClick={() => goToPage(index + 1)}
                aria-label={`Open ${item.label} page`}
                aria-current={pageIndex === index + 1 ? 'page' : undefined}
              />
            ))}
          </div>
        </nav>
      )}
      <footer className="site-footer">
        <span>Made with all my heart</span>
        <span className="footer-heart" aria-label="love">♥</span>
        <span>Always yours, Shivani</span>
      </footer>
    </>
  )
}
