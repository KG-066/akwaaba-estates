import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Heart } from 'lucide-react'
import Logo from './Logo.jsx'
import useFavourites from '../hooks/useFavourites.js'
import { getPropertyBySlug } from '../data/properties.js'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/properties', label: 'Properties' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const { favourites } = useFavourites()
  const savedCount = favourites.filter((slug) => getPropertyBySlug(slug)).length

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Logo />

        <nav id="primary-nav" className={`nav${open ? ' nav--open' : ''}`} aria-label="Primary">
          <ul className="nav__list">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) => `nav__link${isActive ? ' nav__link--active' : ''}`}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <NavLink
            to="/favourites"
            className={({ isActive }) => `fav-link${isActive ? ' fav-link--active' : ''}`}
            aria-label={savedCount > 0 ? `Saved properties, ${savedCount} saved` : 'Saved properties'}
          >
            <Heart size={22} aria-hidden="true" />
            {savedCount > 0 && (
              <span className="fav-link__count" aria-hidden="true">{savedCount}</span>
            )}
          </NavLink>

          <NavLink to="/properties" className="btn btn--gold btn--sm site-header__cta">
            Browse Properties
          </NavLink>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  )
}
