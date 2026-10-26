import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import usePageTitle from '../hooks/usePageTitle.js'
import useFavourites from '../hooks/useFavourites.js'
import { getPropertyBySlug } from '../data/properties.js'
import PropertyCard from '../components/PropertyCard.jsx'
import '../styles/properties.css'

export default function Favourites() {
  usePageTitle('Saved Properties', 'Your saved favourite properties on AKWAABA ESTATES (demonstration site).')

  const { favourites } = useFavourites()
  // Ignore any saved slug that no longer matches a listing.
  const saved = favourites.map(getPropertyBySlug).filter(Boolean)

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow eyebrow--light">Favourites</p>
          <h1>Saved Properties</h1>
          <p>
            Properties you have saved on this device. They are stored in your browser only, so they
            will not follow you to another device.
          </p>
        </div>
      </section>

      <section className="listing" aria-label="Saved properties">
        <div className="container">
          <p className="listing__count" role="status" aria-live="polite">
            {saved.length} saved {saved.length === 1 ? 'property' : 'properties'}
          </p>

          {saved.length > 0 ? (
            <div className="property-grid">
              {saved.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <Heart size={40} aria-hidden="true" />
              <h2 className="empty-state__title">No saved properties yet</h2>
              <p className="empty-state__text">
                Tap the heart on any property to save it here, so you can compare your favourites later.
              </p>
              <Link to="/properties" className="btn btn--primary">Browse properties</Link>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
