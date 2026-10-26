import { Link } from 'react-router-dom'
import { MapPin, ArrowUpRight } from 'lucide-react'
import { properties } from '../data/properties.js'

const locations = [
  { name: 'East Legon', tagline: 'Gated estates and executive homes' },
  { name: 'Cantonments', tagline: 'Established, prestigious and central' },
  { name: 'Airport Residential', tagline: 'Upmarket living near business hubs' },
  { name: 'Osu', tagline: 'Dining, nightlife and city energy' },
  { name: 'Spintex', tagline: 'Family estates with easy road access' },
  { name: 'Tema', tagline: 'Spacious plots and coastal convenience' },
  { name: 'Labone', tagline: 'Quiet, leafy and close to the centre' },
  { name: 'Adenta', tagline: 'Affordable homes in a growing area' },
  { name: 'Dansoman', tagline: 'Settled neighbourhoods with local charm' },
]

export default function PopularLocations() {
  return (
    <section className="section" aria-labelledby="locations-title">
      <div className="container">
        <div className="section__head">
          <div>
            <p className="eyebrow">Explore areas</p>
            <h2 id="locations-title" className="section__title">Popular Locations in Ghana</h2>
            <p className="section__intro">
              From the leafy streets of Cantonments to fast-growing Spintex, find the neighbourhood that
              suits your lifestyle and budget.
            </p>
          </div>
        </div>

        <ul className="location-grid">
          {locations.map(({ name, tagline }) => {
            const count = properties.filter((p) => p.location === name).length
            return (
              <li key={name}>
                <Link to={`/properties?location=${encodeURIComponent(name)}`} className="location-card">
                  <span className="location-card__top">
                    <MapPin size={20} aria-hidden="true" />
                    <ArrowUpRight size={20} className="location-card__arrow" aria-hidden="true" />
                  </span>
                  <span className="location-card__name">{name}</span>
                  <span className="location-card__tagline">{tagline}</span>
                  <span className="location-card__count">
                    {count} {count === 1 ? 'listing' : 'listings'}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
