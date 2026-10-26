import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <Logo light />
          <p className="site-footer__blurb">
            Find Your Place in Ghana. Premium homes and investment properties across Accra and beyond.
          </p>
        </div>

        <div>
          <h2 className="site-footer__heading">Explore</h2>
          <ul className="site-footer__list">
            <li><Link to="/properties">Properties</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="site-footer__heading">Popular Areas</h2>
          <ul className="site-footer__list">
            <li>East Legon</li>
            <li>Cantonments</li>
            <li>Airport Residential</li>
            <li>Osu</li>
          </ul>
        </div>
      </div>

      <div className="site-footer__bar">
        <div className="container">
          <p>
            &copy; {year} AKWAABA ESTATES. This is a demonstration website. All properties, prices and
            contact details are fictional and not real offers.
          </p>
        </div>
      </div>
    </footer>
  )
}
