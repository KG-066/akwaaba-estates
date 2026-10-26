import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SearchX } from 'lucide-react'
import usePageTitle from '../hooks/usePageTitle.js'
import { properties } from '../data/properties.js'
import {
  filtersFromParams,
  paramsFromFilters,
  filterProperties,
  countActiveFilters,
} from '../utils/filterProperties.js'
import FilterBar from '../components/FilterBar.jsx'
import PropertyCard from '../components/PropertyCard.jsx'
import '../styles/properties.css'

export default function Properties() {
  usePageTitle(
    'Properties',
    'Browse demonstration property listings for sale and rent across East Legon, Cantonments, Airport Residential, Osu, Spintex, Tema and more.'
  )

  const [searchParams, setSearchParams] = useSearchParams()
  const filters = useMemo(() => filtersFromParams(searchParams), [searchParams])
  const results = useMemo(() => filterProperties(properties, filters), [filters])
  const activeCount = countActiveFilters(filters)

  const handleChange = (patch) => {
    setSearchParams(paramsFromFilters({ ...filters, ...patch }), { replace: true })
  }

  const handleClear = () => {
    setSearchParams({}, { replace: true })
  }

  const min = Number(filters.minPrice)
  const max = Number(filters.maxPrice)
  const invalidRange = filters.minPrice !== '' && filters.maxPrice !== '' && min > max

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow eyebrow--light">Properties</p>
          <h1>Browse Properties</h1>
          <p>
            Explore homes, apartments, land and commercial space across Ghana. All listings are
            demonstration content and are not real offers.
          </p>
        </div>
      </section>

      <section className="listing" aria-label="Property search and results">
        <div className="container">
          <FilterBar
            filters={filters}
            onChange={handleChange}
            onClear={handleClear}
            activeCount={activeCount}
            resultCount={results.length}
          />

          {results.length > 0 ? (
            <div className="property-grid listing__grid">
              {results.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <SearchX size={40} aria-hidden="true" />
              <h2 className="empty-state__title">No properties match your search</h2>
              <p className="empty-state__text">
                {invalidRange
                  ? 'Your minimum price is higher than your maximum price. Adjust the range and try again.'
                  : 'Try widening your price range, choosing a different location, or removing a filter.'}
              </p>
              <button type="button" className="btn btn--primary" onClick={handleClear}>
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
