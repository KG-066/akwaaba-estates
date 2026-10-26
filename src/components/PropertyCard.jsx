import { Link } from 'react-router-dom'
import { Heart, MapPin, BedDouble, Bath, Ruler } from 'lucide-react'
import { formatPrice } from '../data/properties.js'
import useFavourites from '../hooks/useFavourites.js'
import '../styles/cards.css'

export default function PropertyCard({ property }) {
  const { isFavourite, toggle } = useFavourites()
  const saved = isFavourite(property.slug)
  const url = `/properties/${property.slug}`

  return (
    <article className="property-card">
      <div className="property-card__media">
        <Link to={url} tabIndex={-1} aria-hidden="true">
          <img
            src={property.images[0]}
            alt={`${property.name} in ${property.location}`}
            width="1200"
            height="800"
            loading="lazy"
          />
        </Link>

        <span className={`badge badge--${property.status}`}>
          {property.status === 'sale' ? 'For sale' : 'For rent'}
        </span>

        <button
          type="button"
          className={`fav-btn${saved ? ' fav-btn--active' : ''}`}
          aria-pressed={saved}
          aria-label={saved ? `Remove ${property.name} from saved properties` : `Save ${property.name} to favourites`}
          onClick={() => toggle(property.slug)}
        >
          <Heart size={20} aria-hidden="true" fill={saved ? 'currentColor' : 'none'} />
        </button>
      </div>

      <div className="property-card__body">
        <p className="property-card__price">{formatPrice(property)}</p>
        <h3 className="property-card__title">
          <Link to={url}>{property.name}</Link>
        </h3>
        <p className="property-card__location">
          <MapPin size={15} aria-hidden="true" /> {property.location}, Ghana
        </p>

        <ul className="property-card__specs">
          {property.bedrooms > 0 && (
            <li>
              <BedDouble size={16} aria-hidden="true" /> {property.bedrooms} bed
            </li>
          )}
          {property.bathrooms > 0 && (
            <li>
              <Bath size={16} aria-hidden="true" /> {property.bathrooms} bath
            </li>
          )}
          <li>
            <Ruler size={16} aria-hidden="true" /> {property.area} m&sup2;
          </li>
        </ul>
      </div>
    </article>
  )
}
