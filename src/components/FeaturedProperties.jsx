import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { properties } from '../data/properties.js'
import PropertyCard from './PropertyCard.jsx'

const featured = properties.filter((p) => p.featured).slice(0, 6)

export default function FeaturedProperties() {
  return (
    <section className="section" aria-labelledby="featured-title">
      <div className="container">
        <div className="section__head">
          <div>
            <p className="eyebrow">Featured</p>
            <h2 id="featured-title" className="section__title">Featured Properties</h2>
            <p className="section__intro">
              A hand-picked selection of demonstration homes across Accra&rsquo;s most sought-after
              neighbourhoods.
            </p>
          </div>
          <Link to="/properties" className="link-arrow">
            View all properties <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <div className="property-grid">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  )
}
