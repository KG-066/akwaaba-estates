import { Link } from 'react-router-dom'
import { Home, Search, ArrowRight } from 'lucide-react'
import usePageTitle from '../hooks/usePageTitle.js'
import '../styles/notfound.css'

const quickLinks = [
  { to: '/properties', label: 'All properties' },
  { to: '/properties?status=sale', label: 'Homes for sale' },
  { to: '/properties?status=rent', label: 'Properties to rent' },
  { to: '/properties?location=East%20Legon', label: 'Properties in East Legon' },
  { to: '/about', label: 'About AKWAABA ESTATES' },
  { to: '/contact', label: 'Contact us' },
]

export default function NotFound() {
  usePageTitle('Page not found', 'The page you were looking for could not be found.', { noindex: true })

  return (
    <section className="nf" aria-labelledby="nf-title">
      <div className="container">
        <p className="nf__code" aria-hidden="true">404</p>
        <h1 id="nf-title" className="nf__title">This page could not be found</h1>
        <p className="nf__text">
          The link may be broken, or the page may have moved. Let&rsquo;s get you back to finding your
          place in Ghana.
        </p>

        <div className="nf__actions">
          <Link to="/" className="btn btn--primary">
            <Home size={18} aria-hidden="true" /> Return home
          </Link>
          <Link to="/properties" className="btn btn--outline">
            <Search size={18} aria-hidden="true" /> Browse properties
          </Link>
        </div>

        <nav className="nf__links" aria-label="Helpful links">
          <h2 className="nf__links-title">Or try one of these</h2>
          <ul className="nf__list">
            {quickLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to}>
                  {label} <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}

