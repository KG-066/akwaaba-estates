import { Link, useParams } from 'react-router-dom'
import {
  MapPin,
  BedDouble,
  Bath,
  Ruler,
  Home,
  Tag,
  Check,
  Heart,
  SearchX,
  MessageCircle,
} from 'lucide-react'
import usePageTitle from '../hooks/usePageTitle.js'
import useFavourites from '../hooks/useFavourites.js'
import { getPropertyBySlug, formatPrice } from '../data/properties.js'
import { buildWhatsAppLink } from '../data/site.js'
import PropertyGallery from '../components/PropertyGallery.jsx'
import EnquiryForm from '../components/EnquiryForm.jsx'
import SimilarProperties from '../components/SimilarProperties.jsx'
import '../styles/details.css'

export default function PropertyDetails() {
  const { slug } = useParams()
  const property = getPropertyBySlug(slug)
  const { isFavourite, toggle } = useFavourites()

  usePageTitle(
    property ? property.name : 'Property not found',
    property
      ? `${property.name} in ${property.location}: ${property.bedrooms > 0 ? property.bedrooms + ' bedrooms, ' : ''}${property.area} m². Demonstration listing only.`
      : 'This property could not be found.',
    { noindex: !property }
  )

  if (!property) {
    return (
      <div className="container">
        <div className="not-found-panel">
          <SearchX size={40} aria-hidden="true" color="#123D32" />
          <h1>Property not found</h1>
          <p>
            We could not find a property at this address. It may have been removed, or the link may be
            incorrect.
          </p>
          <Link to="/properties" className="btn btn--primary">Browse all properties</Link>
        </div>
      </div>
    )
  }

  const saved = isFavourite(property.slug)
  const isLand = property.type === 'Land'

  const whatsappLink = buildWhatsAppLink(
    `Hello AKWAABA ESTATES, I am interested in ${property.name} in ${property.location} (${formatPrice(property)}). Could you share more details? (Demonstration listing)`
  )

  const specs = [
    { icon: Home, label: 'Type', value: property.type },
    { icon: Tag, label: 'Status', value: property.status === 'sale' ? 'For sale' : 'For rent' },
    property.bedrooms > 0 && { icon: BedDouble, label: 'Bedrooms', value: property.bedrooms },
    property.bathrooms > 0 && { icon: Bath, label: 'Bathrooms', value: property.bathrooms },
    { icon: Ruler, label: isLand ? 'Plot size' : 'Floor area', value: `${property.area} m\u00B2` },
    { icon: MapPin, label: 'Location', value: property.location },
  ].filter(Boolean)

  return (
    <>
      <div className="container">
        <nav className="crumbs" aria-label="Breadcrumb">
          <ol>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/properties">Properties</Link></li>
            <li aria-current="page">{property.name}</li>
          </ol>
        </nav>

        <div className="details__layout">
          <div className="details__main">
            <header className="details__head">
              <h1 className="details__title">{property.name}</h1>
              <p className="details__location">
                <MapPin size={18} aria-hidden="true" /> {property.location}, Ghana
              </p>
            </header>

            <PropertyGallery
              key={property.slug}
              images={property.images}
              name={property.name}
              location={property.location}
            />

            <section aria-labelledby="specs-title">
              <h2 id="specs-title" className="details__section-title">Property specifications</h2>
              <ul className="spec-grid">
                {specs.map(({ icon: Icon, label, value }) => (
                  <li key={label} className="spec">
                    <span className="spec__icon" aria-hidden="true">
                      <Icon size={20} />
                    </span>
                    <span>
                      <span className="spec__label">{label}</span>
                      <span className="spec__value">{value}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="desc-title">
              <h2 id="desc-title" className="details__section-title">Description</h2>
              <p className="details__text">{property.description}</p>
            </section>

            <section aria-labelledby="amenities-title">
              <h2 id="amenities-title" className="details__section-title">Amenities</h2>
              <ul className="amenity-list">
                {property.amenities.map((item) => (
                  <li key={item}>
                    <Check size={18} aria-hidden="true" /> {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="details__aside" aria-label="Price, actions and enquiry">
            <div className="price-card">
              <span className={`price-card__status price-card__status--${property.status}`}>
                {property.status === 'sale' ? 'For sale' : 'For rent'}
              </span>
              <p className="price-card__price">{formatPrice(property)}</p>
              <p className="price-card__location">{property.location}, Ghana</p>

              <div className="price-card__actions">
                <a
                  href={whatsappLink}
                  className="btn btn--primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  Enquire on WhatsApp
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>

                <button
                  type="button"
                  className="btn btn--outline price-card__save"
                  aria-pressed={saved}
                  onClick={() => toggle(property.slug)}
                >
                  <Heart size={18} aria-hidden="true" fill={saved ? 'currentColor' : 'none'} />
                  {saved ? 'Saved to favourites' : 'Save to favourites'}
                </button>
              </div>

              <p className="price-card__demo">
                Demonstration listing: this property, its price and its details are fictional and not
                a real offer.
              </p>
            </div>

            <EnquiryForm key={property.slug} propertyName={property.name} />
          </aside>
        </div>
      </div>

      <SimilarProperties property={property} />
    </>
  )
}

