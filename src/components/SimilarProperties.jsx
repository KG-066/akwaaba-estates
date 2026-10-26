import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { getSimilarProperties } from '../data/properties.js'
import PropertyCard from './PropertyCard.jsx'

export default function SimilarProperties({ property }) {
  const similar = getSimilarProperties(property, 3)
  if (similar.length === 0) return null

  return (
    <section className="section section--alt" aria-labelledby="similar-title">
      <div className="container">
        <div className="section__head">
          <div>
            <p className="eyebrow">You may also like</p>
            <h2 id="similar-title" className="section__title">Similar Properties</h2>
          </div>
          <Link to="/properties" className="link-arrow">
            View all properties <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <div className="property-grid">
          {similar.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
