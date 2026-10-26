import { Link } from 'react-router-dom'
import { Building2, Home, Landmark, Layers, Trees, Briefcase } from 'lucide-react'
import { properties } from '../data/properties.js'

const categories = [
  { type: 'Apartment', icon: Building2, blurb: 'City living with convenience' },
  { type: 'House', icon: Home, blurb: 'Comfortable family homes' },
  { type: 'Villa', icon: Landmark, blurb: 'Space, privacy and prestige' },
  { type: 'Townhouse', icon: Layers, blurb: 'Modern homes in secure estates' },
  { type: 'Land', icon: Trees, blurb: 'Plots to build on or invest in' },
  { type: 'Commercial', icon: Briefcase, blurb: 'Offices and business space' },
]

export default function Categories() {
  return (
    <section className="section section--alt" aria-labelledby="categories-title">
      <div className="container">
        <div className="section__head">
          <div>
            <p className="eyebrow">Browse by type</p>
            <h2 id="categories-title" className="section__title">Property Categories</h2>
            <p className="section__intro">
              Whether you are buying your first home or building an investment portfolio, start with the
              kind of property that fits.
            </p>
          </div>
        </div>

        <ul className="category-grid">
          {categories.map(({ type, icon: Icon, blurb }) => {
            const count = properties.filter((p) => p.type === type).length
            return (
              <li key={type}>
                <Link to={`/properties?type=${encodeURIComponent(type)}`} className="category-card">
                  <span className="category-card__icon" aria-hidden="true">
                    <Icon size={26} />
                  </span>
                  <span className="category-card__name">{type === 'Villa' ? 'Villas' : `${type}s`}</span>
                  <span className="category-card__blurb">{blurb}</span>
                  <span className="category-card__count">
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
